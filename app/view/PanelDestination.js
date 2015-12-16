Ext.define('Components.view.PanelDestination',{
    extend: 'Ext.tree.Panel',
    alias: 'widget.paneldestination',
    requires: 'Components.store.DestinationStore',
    title: 'Дерево элементров',
    store: 'DestinationStore',
    viewConfig: {
        plugins: {
            ptype: 'treeviewdragdrop',
            enableDrag: true,
            enableDrop: true
        }
    }
});
