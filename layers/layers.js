var wms_layers = [];

var format_TrabajoFinalKarenGuevarapen_Clip_0 = new ol.format.GeoJSON();
var features_TrabajoFinalKarenGuevarapen_Clip_0 = format_TrabajoFinalKarenGuevarapen_Clip_0.readFeatures(json_TrabajoFinalKarenGuevarapen_Clip_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrabajoFinalKarenGuevarapen_Clip_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrabajoFinalKarenGuevarapen_Clip_0.addFeatures(features_TrabajoFinalKarenGuevarapen_Clip_0);
var lyr_TrabajoFinalKarenGuevarapen_Clip_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrabajoFinalKarenGuevarapen_Clip_0, 
                style: style_TrabajoFinalKarenGuevarapen_Clip_0,
                popuplayertitle: "Trabajo Final Karen Guevara — pen_Clip",
                interactive: true,
    title: 'Trabajo Final Karen Guevara — pen_Clip<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevarapen_Clip_0_0.png" /> 10<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevarapen_Clip_0_1.png" /> 20<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevarapen_Clip_0_2.png" /> 30<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevarapen_Clip_0_3.png" /> 40<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevarapen_Clip_0_4.png" /> 50<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevarapen_Clip_0_5.png" /> 60<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevarapen_Clip_0_6.png" /> 70<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevarapen_Clip_0_7.png" /> 80<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevarapen_Clip_0_8.png" /> 90<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevarapen_Clip_0_9.png" /> 100<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevarapen_Clip_0_10.png" /> <br />'
        });
var format_TrabajoFinalKarenGuevarageo_Clip_1 = new ol.format.GeoJSON();
var features_TrabajoFinalKarenGuevarageo_Clip_1 = format_TrabajoFinalKarenGuevarageo_Clip_1.readFeatures(json_TrabajoFinalKarenGuevarageo_Clip_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrabajoFinalKarenGuevarageo_Clip_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrabajoFinalKarenGuevarageo_Clip_1.addFeatures(features_TrabajoFinalKarenGuevarageo_Clip_1);
var lyr_TrabajoFinalKarenGuevarageo_Clip_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrabajoFinalKarenGuevarageo_Clip_1, 
                style: style_TrabajoFinalKarenGuevarageo_Clip_1,
                popuplayertitle: "Trabajo Final Karen Guevara — geo_Clip",
                interactive: true,
    title: 'Trabajo Final Karen Guevara — geo_Clip<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevarageo_Clip_1_0.png" /> b6k6-Stm<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevarageo_Clip_1_1.png" /> E1-Sc<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevarageo_Clip_1_2.png" /> e6e9-Sc<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevarageo_Clip_1_3.png" /> k1k6-Stm<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevarageo_Clip_1_4.png" /> k6E1-Stm<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevarageo_Clip_1_5.png" /> Q-ca<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevarageo_Clip_1_6.png" /> <br />'
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TrabajoFinalKarenGuevaracob_Clip_3 = new ol.format.GeoJSON();
var features_TrabajoFinalKarenGuevaracob_Clip_3 = format_TrabajoFinalKarenGuevaracob_Clip_3.readFeatures(json_TrabajoFinalKarenGuevaracob_Clip_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrabajoFinalKarenGuevaracob_Clip_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrabajoFinalKarenGuevaracob_Clip_3.addFeatures(features_TrabajoFinalKarenGuevaracob_Clip_3);
var lyr_TrabajoFinalKarenGuevaracob_Clip_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrabajoFinalKarenGuevaracob_Clip_3, 
                style: style_TrabajoFinalKarenGuevaracob_Clip_3,
                popuplayertitle: "Trabajo Final Karen Guevara — cob_Clip",
                interactive: true,
    title: 'Trabajo Final Karen Guevara — cob_Clip<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevaracob_Clip_3_0.png" /> ALTA<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevaracob_Clip_3_1.png" /> BAJA<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevaracob_Clip_3_2.png" /> MEDIA<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevaracob_Clip_3_3.png" /> MUY BAJA<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevaracob_Clip_3_4.png" /> <br />'
        });
var format_TrabajoFinalKarenGuevaracli_Clip_4 = new ol.format.GeoJSON();
var features_TrabajoFinalKarenGuevaracli_Clip_4 = format_TrabajoFinalKarenGuevaracli_Clip_4.readFeatures(json_TrabajoFinalKarenGuevaracli_Clip_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrabajoFinalKarenGuevaracli_Clip_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrabajoFinalKarenGuevaracli_Clip_4.addFeatures(features_TrabajoFinalKarenGuevaracli_Clip_4);
var lyr_TrabajoFinalKarenGuevaracli_Clip_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrabajoFinalKarenGuevaracli_Clip_4, 
                style: style_TrabajoFinalKarenGuevaracli_Clip_4,
                popuplayertitle: "Trabajo Final Karen Guevara — cli_Clip",
                interactive: true,
    title: 'Trabajo Final Karen Guevara — cli_Clip<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevaracli_Clip_4_0.png" /> Cálido<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevaracli_Clip_4_1.png" /> Templado<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevaracli_Clip_4_2.png" /> <br />'
        });
var format_TrabajoFinalKarenGuevaracli_Clip_Capas_Inte_DissolveAMENAZA_5 = new ol.format.GeoJSON();
var features_TrabajoFinalKarenGuevaracli_Clip_Capas_Inte_DissolveAMENAZA_5 = format_TrabajoFinalKarenGuevaracli_Clip_Capas_Inte_DissolveAMENAZA_5.readFeatures(json_TrabajoFinalKarenGuevaracli_Clip_Capas_Inte_DissolveAMENAZA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrabajoFinalKarenGuevaracli_Clip_Capas_Inte_DissolveAMENAZA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrabajoFinalKarenGuevaracli_Clip_Capas_Inte_DissolveAMENAZA_5.addFeatures(features_TrabajoFinalKarenGuevaracli_Clip_Capas_Inte_DissolveAMENAZA_5);
var lyr_TrabajoFinalKarenGuevaracli_Clip_Capas_Inte_DissolveAMENAZA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrabajoFinalKarenGuevaracli_Clip_Capas_Inte_DissolveAMENAZA_5, 
                style: style_TrabajoFinalKarenGuevaracli_Clip_Capas_Inte_DissolveAMENAZA_5,
                popuplayertitle: "Trabajo Final Karen Guevara — cli_Clip_Capas_Inte_DissolveAMENAZA",
                interactive: true,
    title: 'Trabajo Final Karen Guevara — cli_Clip_Capas_Inte_DissolveAMENAZA<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevaracli_Clip_Capas_Inte_DissolveAMENAZA_5_0.png" /> Muy baja<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevaracli_Clip_Capas_Inte_DissolveAMENAZA_5_1.png" /> Baja<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevaracli_Clip_Capas_Inte_DissolveAMENAZA_5_2.png" /> Media<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevaracli_Clip_Capas_Inte_DissolveAMENAZA_5_3.png" /> Alta<br />\
    <img src="styles/legend/TrabajoFinalKarenGuevaracli_Clip_Capas_Inte_DissolveAMENAZA_5_4.png" /> Muy Alta<br />'
        });

lyr_TrabajoFinalKarenGuevarapen_Clip_0.setVisible(true);lyr_TrabajoFinalKarenGuevarageo_Clip_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_TrabajoFinalKarenGuevaracob_Clip_3.setVisible(true);lyr_TrabajoFinalKarenGuevaracli_Clip_4.setVisible(true);lyr_TrabajoFinalKarenGuevaracli_Clip_Capas_Inte_DissolveAMENAZA_5.setVisible(true);
var layersList = [lyr_TrabajoFinalKarenGuevarapen_Clip_0,lyr_TrabajoFinalKarenGuevarageo_Clip_1,lyr_OpenStreetMap_2,lyr_TrabajoFinalKarenGuevaracob_Clip_3,lyr_TrabajoFinalKarenGuevaracli_Clip_4,lyr_TrabajoFinalKarenGuevaracli_Clip_Capas_Inte_DissolveAMENAZA_5];
lyr_TrabajoFinalKarenGuevarapen_Clip_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'PendPorc': 'PendPorc', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'penpond': 'penpond', });
lyr_TrabajoFinalKarenGuevarageo_Clip_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'SimboloUC': 'SimboloUC', 'N_CartaCo': 'N°CartaCo', 'Descripcio': 'Descripcio', 'Edad': 'Edad', 'UGIntegrad': 'UGIntegrad', 'Comentario': 'Comentario', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'geopond': 'geopond', });
lyr_TrabajoFinalKarenGuevaracob_Clip_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'codigo': 'codigo', 'leyenda': 'leyenda', 'insumo': 'insumo', 'confiabili': 'confiabili', 'cambio': 'cambio', 'Shape_Leng': 'Shape_Leng', 'Incidencia': 'Incidencia', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'cobpond': 'cobpond', });
lyr_TrabajoFinalKarenGuevaracli_Clip_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'GRIDCODE': 'GRIDCODE', 'RANGOS': 'RANGOS', 'CALIFIC': 'CALIFIC', 'Shape_Leng': 'Shape_Leng', 'RULEID': 'RULEID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'climpond': 'climpond', });
lyr_TrabajoFinalKarenGuevaracli_Clip_Capas_Inte_DissolveAMENAZA_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FInal_Pond': 'FInal_Pond', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'AmenazaNuevo': 'AmenazaNuevo', });
lyr_TrabajoFinalKarenGuevarapen_Clip_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'Range', 'PendPorc': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'penpond': 'Range', });
lyr_TrabajoFinalKarenGuevarageo_Clip_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'Range', 'SimboloUC': 'TextEdit', 'N_CartaCo': 'TextEdit', 'Descripcio': 'TextEdit', 'Edad': 'TextEdit', 'UGIntegrad': 'TextEdit', 'Comentario': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'geopond': 'Range', });
lyr_TrabajoFinalKarenGuevaracob_Clip_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'codigo': 'Range', 'leyenda': 'TextEdit', 'insumo': 'TextEdit', 'confiabili': 'TextEdit', 'cambio': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Incidencia': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'cobpond': 'Range', });
lyr_TrabajoFinalKarenGuevaracli_Clip_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'Range', 'GRIDCODE': 'TextEdit', 'RANGOS': 'TextEdit', 'CALIFIC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'RULEID': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'climpond': 'Range', });
lyr_TrabajoFinalKarenGuevaracli_Clip_Capas_Inte_DissolveAMENAZA_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'FInal_Pond': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'AmenazaNuevo': 'Range', });
lyr_TrabajoFinalKarenGuevarapen_Clip_0.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'PendPorc': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'penpond': 'no label', });
lyr_TrabajoFinalKarenGuevarageo_Clip_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'SimboloUC': 'no label', 'N_CartaCo': 'no label', 'Descripcio': 'no label', 'Edad': 'no label', 'UGIntegrad': 'no label', 'Comentario': 'no label', 'GlobalID': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'geopond': 'no label', });
lyr_TrabajoFinalKarenGuevaracob_Clip_3.set('fieldLabels', {'OBJECTID': 'no label', 'codigo': 'no label', 'leyenda': 'no label', 'insumo': 'no label', 'confiabili': 'no label', 'cambio': 'no label', 'Shape_Leng': 'no label', 'Incidencia': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'cobpond': 'no label', });
lyr_TrabajoFinalKarenGuevaracli_Clip_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'GRIDCODE': 'no label', 'RANGOS': 'no label', 'CALIFIC': 'no label', 'Shape_Leng': 'no label', 'RULEID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'climpond': 'no label', });
lyr_TrabajoFinalKarenGuevaracli_Clip_Capas_Inte_DissolveAMENAZA_5.set('fieldLabels', {'OBJECTID': 'no label', 'FInal_Pond': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'AmenazaNuevo': 'no label', });
lyr_TrabajoFinalKarenGuevaracli_Clip_Capas_Inte_DissolveAMENAZA_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});