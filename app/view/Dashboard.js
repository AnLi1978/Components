Ext.define('Components.view.Dashboard',{
    extend: 'Ext.container.Viewport',
    requires: [
        'Components.view.Header',
        'Components.view.PanelDestination',
        'Components.view.PanelSource',
        'Ext.panel.Panel',
        'Ext.tab.Panel',
        'Ext.button.Button',
        'Ext.data.*',
        'Ext.tree.*'
    ],
    alias: 'widget.dashboard',
    layout: {
        type: 'border'
    },
    items: [{
        xtype: 'container',
        region: 'west',
        itemId: 'westContainer',
        width: 250,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'panel',
            itemId: 'componentPropertyPanel',
            title: 'Свойства компонентов',
            html: 'Контент панели "Свойства компонентов"',
            flex: 1
        }]
    },{
        xtype: 'appheader',
        region: 'north'
    },{
        xtype: 'tabpanel',
        itemId: 'centerTabPanel',
        region: 'center',
        items: [{
            title: 'Panel#1',
            html: 'Контент панели №1'
        },{
            title: 'Panel#2',
            html: 'Контент панели №2'
        }]
    },{
        xtype: 'panel',
        region: 'south',
        height: 50,
        items: [{
            xtype: 'button',
            text: 'Добавить',
            itemId: 'buttonAdd'
        }]
    },{
        xtype: 'container',
        width: 250,
        region: 'east',
        layout : {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'panelsource',
            flex: 1
        },{
            xtype: 'paneldestination',
            flex: 1
        }]
    }]
});
