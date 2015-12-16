//Определяем компонент Store для категорий компонентов
//В каждом компоненте присутствует массив объектов parameters,
//в котором задаются свойства по умолчанию объектов, перемещаемых
//в дерево элементов
Ext.define('Components.store.SourceStore',{
    extend: 'Ext.data.TreeStore',
    root: {
        text: 'Группа компонентов',
        expanded: true,
        children: [{
            text: 'Панели',
            expanded: false,
            children: [{
                text: 'Компонент#1Panel',
                parameters: [
                    {title: 'newDefaultPanel'},
                    {xtype: 'panel'}
                ],
                //Вопрос: каким образом на лету менять значение свойства leaf
                leaf: true
            },{
                text: 'Компонент#2FormPanel',
                parameters: [
                    {title: 'newDefaultForm'},
                    {xtype: 'form'}
                ],
                leaf: true
            },{
                text: 'Компонент#3TabPanel',
                //Отдельно решить вопрос о задании количества Тab и их названиях
                parameters: [
                    {activeTab: 0},
                    {xtype: 'tabpanel'}
                ],
                leaf: true
            }]
        },{
            text: 'Формы',
            expanded: false,
            children: [{
                text: 'Компонент#4FieldSet',
                parameters: [
                    {autoHeight: true},
                    {title: 'fieldSetLegend'},
                    {xtype: 'fieldset'}
                ],
                leaf: true
            },{
                text: 'Компонент#5ComboBox',
                parameters: [
                    {fieldLabel: 'labelText'},
                    {hiddenName: 'combovalue'},
                    {name: 'combovalue'},
                    {xtype: 'combo'}
                ],
                leaf: true
            },{
                text: 'Компонент#6TextField',
                parameters: [
                    {xtype: 'textfield'},
                    {fieldLabel: 'TextLabel'},
                    {name: 'textvalue'}
                ],
                leaf: true
            },{
                text: 'Компонент#7NumberField',
                parameters: [
                    {xtype: 'numberfield'},
                    {name: 'numbervalue'},
                    {fieldLabel: 'NumberLabel'}
                ],
                leaf: true
            },{
                text: 'Компонент#8TimeField',
                parameters: [
                    {xtype: 'timefield'},
                    {fieldLabel: 'TimeLabel'},
                    {name: 'timevalue'}
                ],
                leaf: true
            },{
                text: 'Компонент#9DateField',
                parameters: [
                    {xtype: 'datefield'},
                    {name: 'datevalue'},
                    {fieldLabel: 'DateLabel'}
                ],
                leaf: true
            },{
                text: 'Компонент#10CheckBox',
                parameters: [
                    {xtype: 'checkbox'},
                    {boxLabel: 'CheckBox Label'},
                    {fieldLabel: 'LegendLabel'},
                    {inputValue: 'cbvalue'},
                    {name: 'checkbox'}
                ],
                leaf: true
            },{
                text: 'Компонент#11RadioBox',
                parameters: [
                    {xtype: 'radio'},
                    {boxLabel: 'RadioBoxLabel'},
                    {fieldLabel: 'LegendLabel'},
                    {inputValue: 'radiovalue'},
                    {name: 'radio'}
                ],
                leaf: true
            }]
        },{
            text: 'Layouts',
            //С Layout-ами непонятно пока: нужны ли они вообще или проще предусмотреть свойства layout в формах
            expanded: false,
            children: [{
                text: 'Компонент#12FitLayout',
                parameters: [
                    {title: 'FitLayoutContainer'},
                    {layout: 'fit'}
                ],
                leaf: true
            },{
                text: 'Компонент#13CardLayout',
                parameters: [
                    {layout: 'card'},
                    {title: 'CardLayoutContainer'}
                ],
                leaf: true
            },{
                text: 'Компонент#14AnchorLayout',
                parameters: [
                    {layout: 'anchor'},
                    {title: 'AnchorLayoutContainer'}
                ],
                leaf: true
            },{
                text: 'Компонент#15AbsoluteLayout',
                parameters: [
                    {layout: 'absolute'},
                    {title: 'AbsoluteLayoutContainer'}
                ],
                leaf: true
            },{
                text: 'Компонент#16AccordionLayout',
                parameters: [
                    {layout: 'accordion'},
                    {title: 'AccordionLayoutContainer'}
                ],
                leaf: true
            },{
                text: 'Компонент#17TableLayout',
                parameters: [
                    {layout: 'table'},
                    {title: 'TableLayoutContainer'}
                ],
                leaf: true
            },{
                text: 'Компонент#18ColumnLayout',
                parameters: [
                    {layout: 'column'},
                    {title: 'ColumnLayoutContainer'}
                ],
                leaf: true
            },{
                text: 'Компонент#19BorderLayout',
                parameters: [
                    {layout: 'border'},
                    {title: 'BorderLayoutContainer'}
                ],
                leaf: true
            }]
        }]
    }
});