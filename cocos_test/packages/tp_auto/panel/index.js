// panel/index.js, this filename needs to match the one registered in package.json
Editor.Panel.extend({
  // css style for panel
  style: `
    :host { margin: 5px; }
    h2 { color: #f90; }
  `,

  // html template for panel
  template: `
    <h2>tp拆分</h2>
    <ui-prop name="assets:" tooltip="直接拖动tp资源" style="height: 43px; display: flex;">
        <ui-asset id="assets" type="sprite-atlas" v-value="assetUuid" class="flex-1">
        </ui-asset>
    </ui-prop>
    <ui-prop name="文件夹:" tooltip="拆分后的资源文件夹" style="height: 43px; display: flex;">
        <ui-asset id="folder" type="folder" v-value="assetFolder" class="flex-1">
        </ui-asset>
    </ui-prop>
    <hr />
    <ui-button id="btn">开始拆分</ui-button>
  `,

  // element and variable binding
  $: {
    btn: '#btn',
    assets: '#assets',
    folder: '#folder'
  },

  // method executed when template and styles are successfully loaded and initialized
  ready() {
    this.$btn.addEventListener('confirm', () => {
      Editor.log(" this.$btn", this.$btn);
      Editor.log(" this.$folder", this.$assets);
      Editor.log(" this.$folder", this.$folder);
      // _value
      let data = {
        assetUuid: this.$assets._value,
        FolderUuid: this.$folder._value,
      }
      Editor.Ipc.sendToMain('tp_auto:clicked', data);
    });
  },

  // register your ipc messages here
});