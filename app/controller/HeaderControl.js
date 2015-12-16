Ext.define('Components.controller.HeaderControl',{
    extend: 'Ext.app.Controller',
    views: ['Components.view.Header'],
    init: function(application){
        this.control({
            "appheader button#buttonLogout": {
                click: this.onButtonLogoutClick
            }
        });
    },
    onButtonLogoutClick: function(button, e, options){
        console.log('Была нажата кнопка Logout');
    }
});
