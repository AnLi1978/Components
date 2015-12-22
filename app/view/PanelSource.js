Ext.define('Components.view.PanelSource',{
    extend: 'Ext.tree.Panel',
    alias: 'widget.panelsource',
    requires: 'Components.store.SourceStore',
    title: 'Компоненты',
    rootVisible: true,
    store: 'SourceStore',
    viewConfig: {
        plugins: {
            ptype: 'treeviewdragdrop',
            enableDrag: true,
            enableDrop: true
        },
        //NB после установки для copy значение true, мы
        //не перемещаем узел из панели в панель, а копируем его
        copy: true
    }
});
