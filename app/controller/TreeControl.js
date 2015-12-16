Ext.define('Components.controller.TreeControl',{
    extend: 'Ext.app.Controller',
    views: ['Components.view.PanelSource'],
    init: function(application){
        this.control({
            "panelsource":{
                itemclick: this.onPanelSourceTreeItemClick
            },
            "paneldestination":{
                itemclick: this.onPanelDestinationTreeItemClick
            },
            //Важно: чтобы получить доступ к событиям drop и beforedrop надо добавить листенер к объекту TreeView
            "panelsource treeview":{
                drop: this.onPanelSourceTreeDrop
            },
            "paneldestination treeview":{
                drop: this.onPanelDestinationTreeDrop
            }
        })
    },
    onPanelSourceTreeItemClick: function(view, record, item, index, event, options){
        console.log('Был щелчок мышью на элементе дерева Категория компонентов')
    },
    onPanelDestinationTreeItemClick: function(view, record, item, index, event, options){
        console.log('Был щелчок мышью на элементе дерева элементов')
    },
    onPanelSourceTreeDrop: function( node, data, overModel, dropPosition, eOpts){
        console.log('Something was just dropped into panelSource');
    },
    onPanelDestinationTreeDrop: function( node, data, overModel, dropPosition, eOpts){
        console.log('Something was just dropped into panelDestination');
    }
});
