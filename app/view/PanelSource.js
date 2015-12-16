Ext.define('Components.view.PanelSource',{
    extend: 'Ext.tree.Panel',
    alias: 'widget.panelsource',
    requires: 'Components.store.SourceStore',
    title: 'Категории компонентов',
    rootVisible: true,
    store: 'SourceStore',
    viewConfig: {
        plugins: {
            ptype: 'treeviewdragdrop',
            enableDrag: true,
            enableDrop: true
        }
    }
});
