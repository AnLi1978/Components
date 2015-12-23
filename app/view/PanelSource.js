Ext.define('Components.view.PanelSource',{
    extend: 'Ext.tree.Panel',
    alias: 'widget.panelsource',
    requires: 'Components.store.TreeExampleStore',
    title: 'Компоненты',
    rootVisible: false,
    store: 'TreeExampleStore',
    viewConfig: {
        plugins: {
            ptype: 'treeviewdragdrop',
            enableDrag: true,
            enableDrop: false
        },
        //NB после установки для copy значение true, мы
        //не перемещаем узел из панели в панель, а копируем его
        copy: true
    }
});
