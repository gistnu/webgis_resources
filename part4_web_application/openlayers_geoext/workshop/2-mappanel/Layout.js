Ext.namespace("Heron");

Heron.layout = {
    xtype: 'hr_mappanel',
    //title: 'Workshop',
    //html: 'ทดสอบ'
	hropts:{
		settings:{
			projection: 'EPSG:3857',
			units: 'm',
			maxExtent: '-20026376.39, -20048966.10, 20026376.39, 20048966.10',
			center: '11153595.621088,1890994.752004',
			zoom: '13'
		},			
		layers:[new OpenLayers.Layer.OSM()]
	}
};
