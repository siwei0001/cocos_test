'use strict';
const Fs = require('fs');
const Path = require('path');
const FileUtil = require('./utils/file-util');
const ObjectUtil = require('./utils/object-util');

module.exports = {
  /**
   * 生命周期：加载
   */
  load() {
    // 读取配置
    // const config = ConfigManager.read(false);
    // this.expand = config.expand;
    // this.detail = config.detail;
  },

  /**
   * 生命周期：卸载
   */
  unload() {
    this.cache = null;
  },
  // register your ipc messages here
  messages: {
    'open'() {
      // open entry panel registered in package.json
      Editor.Panel.open('tp_auto');
    },
    'clicked'(event, data) {
      Editor.log('Button clicked!', data);
      //开始拆分
      //先查找tp资源的引用 
      this.findAssetUuid(data.assetUuid);
      //对应uid的文件名字
      //在文件夹里找到对应名字的图片资源
      //替换资源
      //输出结果
    }
  },

  //查找对应uuid的资源引用
  findAssetUuid(uuid) {
    // 获取资源信息
    const assetInfo = Editor.assetdb.assetInfoByUuid(uuid);
    if (assetInfo) {
      Editor.log('findAssetUuid assetInfo', assetInfo);
      const url = assetInfo.url.replace('db://', '');
      Editor.log('findAssetUuid url', url);
      // 处理文件路径 & 打印头部日志
      const urlItems = url.split('/');
      if (!urlItems[urlItems.length - 1].includes('.')) {
        urlItems.splice(urlItems.length - 1);
      }
      Editor.log('findAssetUuid urlItems', urlItems);
      //  Editor.log(`[${EXTENSION_NAME}]`, translate('findAssetRefs'), urlItems.join('/'));
      //  记录子资源 uuid
      const subUuids = assetInfo ? [] : null;
      // 资源类型检查
      if (assetInfo.type === 'texture') {
        // 纹理子资源
        const subAssetInfos = Editor.assetdb.subAssetInfosByUuid(uuid);
        if (subAssetInfos) {
          for (let i = 0; i < subAssetInfos.length; i++) {
            subUuids.push(subAssetInfos[i].uuid);
          }
          uuid = null;
        }
      } else if (assetInfo.type === 'typescript' || assetInfo.type === 'javascript') {
        // 脚本
        uuid = Editor.Utils.UuidUtils.compressUuid(uuid);
      }
      // 查找
      const results = uuid ? this.findReferences(uuid) : [];
      Editor.log('findAssetUuid subUuids', subUuids);
      if (subUuids && subUuids.length > 0) {
        for (let i = 0, l = subUuids.length; i < l; i++) {
          const subResults = this.findReferences(subUuids[i]);
          if (subResults.length > 0) {
            results.push(...subResults);
          }
        }
      }
      // // Done
      Editor.log('findAssetUuid results', results);

      this.printResult(results);
    } else {
      // 不存在的资源，直接查找 uuid
      Editor.log(`[${EXTENSION_NAME}]`, translate('findAssetRefs'), uuid);
      const result = this.findReferences(uuid);
      // Done
      this.printResult(result);
    }
    // return 
  },

  /**
   * 打印结果至控制台
   * @param {object[]} results 
   */
  printResult(results) {
    if (results.length === 0) {
      Editor.log(`[${EXTENSION_NAME}]`, translate('noRefs'));
      Editor.log(`${'----'.repeat(36)}`);
      return;
    }
    // 添加引用
    const nodeRefs = [];
    let nodeRefsCount = 0;
    const assetRefs = [];
    let assetRefsCount = 0;
    for (let i = 0, l = results.length; i < l; i++) {
      const result = results[i],
        type = result.type,
        url = result.fileUrl.replace('db://', '').replace('.meta', '');
      if (type === 'scene' || type === 'prefab') {
        nodeRefs.push(`　　　·　${iconMap[type]} [${translate(type)}] ${url}`);
        const refs = result.refs;
        for (let j = 0, n = refs.length; j < n; j++) {
          nodeRefsCount++;
          if (this.detail) {
            const ref = refs[j];
            let item = `　　　　　　　${iconMap['node']} [${translate('node')}] ${ref.node}`;
            if (ref.component) {
              item += ` 　→ 　${iconMap['component']} [${translate('component')}] ${ref.component}`;
            }
            if (ref.property) {
              item += ` 　→ 　${iconMap['property']} [${translate('property')}] ${ref.property}`;
            }
            nodeRefs.push(item);
          }
        }
      } else {
        assetRefsCount++;
        assetRefs.push(`　　　·　${iconMap['asset']} [${translate(type)}] ${url}`);
      }
    }
    // 合并
    const texts = [`[${EXTENSION_NAME}] ${translate('searchResult')} >>>`];
    if (nodeRefs.length > 0) {
      nodeRefs.unshift(`　　　📙 ${translate('nodeRefs')} x ${nodeRefsCount}`);
      texts.push(...nodeRefs);
    }
    if (assetRefs.length > 0) {
      assetRefs.unshift(`　　　📘 ${translate('assetRefs')} x ${assetRefsCount}`);
      texts.push(...assetRefs);
    }
    // 分隔
    texts.push(`${'----'.repeat(36)}`);
    // 打印到控制台
    if (this.expand) {
      // 逐行打印
      for (let i = 0, l = texts.length; i < l; i++) {
        Editor.log(texts[i]);
      }
    } else {
      // 单行打印
      const content = texts.join('\n');
      Editor.log(content);
    }
  },

  /**
   * 查找节点中的引用
   * @param {object} node 目标节点
   * @param {string} uuid 查找的 uuid
   * @param {object} nodeTree 节点所在的节点树
   * @param {object[]} container 结果容器
   */
  findRefsInNode(node, uuid, nodeTree, container) {

    // 检查节点上的组件是否有引用
    const components = node.components;
    if (components && components.length > 0) {
      for (let i = 0, l = components.length; i < l; i++) {
        const info = this.getContainsInfo(components[i], uuid);
        if (!info.contains) continue;
        // 资源类型
        let type = components[i]['__type__'];
        // 是否为脚本资源
        if (Editor.Utils.UuidUtils.isUuid(type)) {
          const scriptUuid = Editor.Utils.UuidUtils.decompressUuid(type),
            assetInfo = Editor.assetdb.assetInfoByUuid(scriptUuid);
          type = Path.basename(assetInfo.url);
        }
        // 处理属性名称
        let property = info.property;
        if (property) {
          Editor.log('findRefsInNode property', property);
          Editor.log('findRefsInNode type', type);

          // Label 组件需要特殊处理
          if (type === 'cc.Label' && property === '_N$file') {
            property = 'font';
          }
          else if (type === 'cc.Sprite' && property === '_atlas') {
            // Editor.log('findRefsInNode type', type);
            //替换该节点图片
            this.findReferencesUUID(node);
          }
          else {
            // 去除属性名的前缀
            if (property.startsWith('_N$')) {
              property = property.replace('_N$', '');
            } else if (property[0] === '_') {
              property = property.substring(1);
            }
          }
        }
        // 保存结果
        container.push({
          node: node.path,
          component: type,
          property: property
        });
      }
    }
    // 检查预制体是否有引用
    const prefab = node.prefab;
    if (prefab) {
      // 排除预制体自己
      if (uuid !== nodeTree['__uuid__']) {
        const contains = ObjectUtil.containsValue(prefab, uuid);
        if (contains) {
          container.push({
            node: node.path
          });
        }
      }
    }
    // 遍历子节点
    const children = node.children;
    if (children && children.length > 0) {
      for (let i = 0, l = children.length; i < l; i++) {
        this.findRefsInNode(children[i], uuid, nodeTree, container);
      }
    }
  },

  /**
   * 查找引用
   * @param {string} uuid 
   * @returns {object[]}
   */
  findReferences(uuid) {
    Editor.log('findReferences');

    const results = [];
    /**
     * 文件处理函数
     * @param {string} filePath 文件路径
     * @param {Fs.Stats} stats 
     */
    const searchHandler = (filePath, stats) => {
      const extname = Path.extname(filePath);
      // 场景和预制体资源
      if (extname === '.fire' || extname === '.prefab') {
        // 将资源数据转为节点树
        const nodeTree = this.getNodeTree(filePath),
          children = nodeTree.children,
          refs = [];
        // 遍历节点
        for (let i = 0, l = children.length; i < l; i++) {
          this.findRefsInNode(children[i], uuid, nodeTree, refs);
        }
        // 保存当前文件引用结果
        if (refs.length > 0) {
          results.push({
            type: typeMap[extname],
            fileUrl: Editor.assetdb.fspathToUrl(filePath),
            refs: refs
          });
        }
      }
      // 动画资源
      else if (extname === '.anim') {
        const data = JSON.parse(Fs.readFileSync(filePath)),
          curveData = data['curveData'],
          contains = ObjectUtil.containsValue(curveData, uuid);
        if (contains) {
          results.push({
            type: typeMap[extname],
            fileUrl: Editor.assetdb.fspathToUrl(filePath)
          });
        }
      }
      // 材质和字体资源
      else if (extname === '.mtl' || filePath.indexOf('.fnt.meta') !== -1) {
        const data = JSON.parse(Fs.readFileSync(filePath)),
          contains = ObjectUtil.containsValue(data, uuid);
        if (contains && !(data['uuid'] === uuid)) {
          const _extname = (extname === '.mtl') ? '.mtl' : '.fnt.meta';
          results.push({
            type: typeMap[_extname],
            fileUrl: Editor.assetdb.fspathToUrl(filePath)
          });
        }
      }

    };
    // 遍历资源目录下的文件
    const assetsPath = Editor.url('db://assets/');
    FileUtil.map(assetsPath, searchHandler);
    // Done
    return results;
  },

  /**
   * 查找指定文件夹下该文件的名字
   * @param {string} node 
   * @returns {object[]}
   */
  findReferencesUUID(node) {
    Editor.log('findReferencesUUID ');
    //这个节点
    //获取对应节点
    const components = node.components;
    Editor.log('findReferencesUUID components', components);
    if (components && components.length > 0) {
      for (let i = 0, l = components.length; i < l; i++) {
        const info = this.getContainsInfo(components[i], uuid);
        if (!info.contains) continue;
        //查找是否有可以替换的资源
        //uuid资源名字
        //在对应文件夹找到相同名字的资源
        //替换资源uuid
        //资源类型
        let type = components[i]['__type__'];
        // 是否为脚本资源
        if (Editor.Utils.UuidUtils.isUuid(type)) {
          const scriptUuid = Editor.Utils.UuidUtils.decompressUuid(type),
            assetInfo = Editor.assetdb.assetInfoByUuid(scriptUuid);
          type = Path.basename(assetInfo.url);
        }
        
        // 处理属性名称
        let property = info.property;
        if (property) {
          // Label 组件需要特殊处理
          if (type === 'cc.Sprite' && property === '_N$atlas') {
            // Editor.log('findRefsInNode type', type);
            //替换该节点图片
            
          }
        }
      }
    }
  },

  /**
   * 更新节点树缓存
   * @param {string} filePath 文件路径
   */
  updateNodeTree(filePath) {
    // 获取缓存
    let cache = this.cache;
    if (!cache) {
      cache = this.cache = Object.create(null);
    }
    // 将资源数据转为节点树并缓存
    const data = JSON.parse(Fs.readFileSync(filePath));
    cache[filePath] = this.convertToNodeTree(data);
  },

  /**
   * 获取节点树
   * @param {string} filePath 文件路径
   * @returns {object}
   */
  getNodeTree(filePath) {
    // 获取缓存
    let cache = this.cache;
    if (!cache) {
      cache = this.cache = Object.create(null);
    }
    // 从缓存中读取
    if (!cache[filePath]) {
      // 将资源数据转为节点树
      const data = JSON.parse(Fs.readFileSync(filePath));
      cache[filePath] = this.convertToNodeTree(data);
    }
    // Done
    return cache[filePath];
  },

  /**
   * 读取节点
   * @param {object} source 元数据
   * @param {number} id 节点 ID
   * @param {object} parent 父容器
   */
  convertNode(source, id, parent) {
    const node = Object.create(null),
      sourceData = source[id];
    // 基本信息
    node['__id__'] = id;
    node['_name'] = sourceData['_name'];
    node['__type__'] = sourceData['__type__'];
    // 路径
    const parentPath = parent.path || (parent['_name'] || null);
    node.path = (parentPath ? `${parentPath}/` : '') + node['_name'];
    // 组件
    const components = sourceData['_components'];
    if (components && components.length > 0) {
      const _components = node.components = [];
      for (let i = 0, l = components.length; i < l; i++) {
        const sourceComponent = source[components[i]['__id__']];
        _components.push(this.extractValidInfo(sourceComponent));
      }
    }
    // 预制体引用
    const prefab = sourceData['_prefab'];
    if (prefab) {
      const realPrefab = source[prefab['__id__']];
      node.prefab = this.extractValidInfo(realPrefab);
    }
    // 子节点
    const children = sourceData['_children'];
    if (children && children.length > 0) {
      node.children = [];
      for (let i = 0, l = children.length; i < l; i++) {
        const childId = children[i]['__id__'];
        this.convertNode(source, childId, node);
      }
    }
    // 保存数据
    parent.children.push(node);
  },

  /**
   * 将资源数据转为节点树
   * @param {object} source 元数据
   * @returns {object}
   */
  convertToNodeTree(source) {
    const nodeTree = Object.create(null),
      type = source[0]['__type__'];
    // 场景资源
    if (type === 'cc.SceneAsset') {
      const sceneId = source[0]['scene']['__id__'],
        children = source[sceneId]['_children'];
      nodeTree['__type__'] = 'cc.Scene';  // 类型
      nodeTree['__id__'] = sceneId;       // ID
      // 遍历节点
      nodeTree.children = [];
      for (let i = 0, l = children.length; i < l; i++) {
        const nodeId = children[i]['__id__'];
        this.convertNode(source, nodeId, nodeTree);
      }
    }
    // 预制体资源 
    else if (type === 'cc.Prefab') {
      const uuid = source[source.length - 1]['asset']['__uuid__'];
      nodeTree['__type__'] = 'cc.Prefab'; // 类型
      nodeTree['__uuid__'] = uuid;        // uuid
      // 从根节点开始读取
      nodeTree.children = [];
      const rootId = source[0]['data']['__id__'];
      this.convertNode(source, rootId, nodeTree);
    }
    // Done
    return nodeTree;
  },

  /**
   * 提取有效信息（含有 uuid）
   * @param {object} data 元数据
   * @returns {{ __type__: string, _name: string, fileId?: string }}
   */
  extractValidInfo(data) {
    const info = Object.create(null);
    // 记录有用的属性
    const keys = ['__type__', '_name', 'fileId'];
    for (let i = 0, l = keys.length; i < l; i++) {
      const key = keys[i];
      if (data[key]) {
        info[key] = data[key];
      }
    }
    // 记录包含 uuid 的属性
    for (const key in data) {
      if (ObjectUtil.containsProperty(data[key], '__uuid__')) {
        info[key] = data[key];
      }
    }
    // Done
    return info;
  },

  /**
   * 获取对象中是否包含指定值以及相应属性名
   * @param {object} object 对象
   * @param {any} value 值
   * @returns {{ contains: boolean, property: string }}
   */
  getContainsInfo(object, value) {
    const result = {
      contains: false,
      property: null
    };
    // 搜索
    const search = (target, parentKey) => {
      if (ObjectUtil.isObject(target)) {
        for (const key in target) {
          if (target[key] === value) {
            result.contains = true;
            result.property = parentKey;
            return;
          }
          search(target[key], key);
        }
      } else if (Array.isArray(target)) {
        for (let i = 0, l = target.length; i < l; i++) {
          search(target[i], parentKey);
        }
      }
    }
    search(object, null);
    // Done
    return result;
  },
};

/** 扩展名对应文件类型 */
const typeMap = {
  '.fire': 'scene',
  '.prefab': 'prefab',
  '.anim': 'animation',
  '.mtl': 'material',
  '.fnt.meta': 'font',
}

/** 类型对应图标 */
const iconMap = {
  'scene': '📺',
  'prefab': '🧸',
  'node': '💾',
  'component': '💿',
  'property': '🎲',
  'asset': '📦',
}