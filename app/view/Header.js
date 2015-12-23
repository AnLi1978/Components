
Ext.define('Components.view.Header',{
    extend: 'Ext.toolbar.Toolbar',
    requires: ['Ext.button.Button', 'Ext.form.Label'],
    alias: 'widget.appheader',
    height: 30,
    ui: 'footer',
    style: 'border-bottom: 4px solid #4c72a4;',
    items: [
        {
            xtype: 'label',
            html: '<div id="tytleHeader"><span style="font-size:18px;">Прототип визуального редактора компонентов с возможностью Drag&Drop</span></div>'
        },
        {
            xtype: 'tbfill'
        },
        {
            xtype: 'tbseparator'
        },
        {
            xtype: 'button',
            text: 'Выход',
            itemId: 'buttonLogout'
        }
    ]
});
