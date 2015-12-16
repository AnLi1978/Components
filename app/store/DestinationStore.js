//Определяем компонент Store для дерева элементов
Ext.define('Components.store.DestinationStore',{
    extend: 'Ext.data.TreeStore',
    root: {
        text: 'Корневая папка дерева элементов',
        expanded: true,
        children: []
    }
});
