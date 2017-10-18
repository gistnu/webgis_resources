Ext.namespace("Heron.options.map");

// All Map settings
Heron.options.settings = {
    // Standard OpenLayers Map config settings
    projection: 'EPSG:3857',
    units: 'm',
    maxExtent: '-20026376.39, -20048966.10, 20026376.39, 20048966.10',
    center: '11153595.621088,1890994.752004',
    zoom: 13
};

// All Layers
Heron.options.layers = [
    new OpenLayers.Layer.OSM()
];

Heron.options.toolbar = [
    {type: "pan"},
    {type: "zoomin"},
    {type: "zoomout"},
    {type: "zoomvisible"},
    {type: "-"} ,
    {type: "zoomprevious"},
    {type: "zoomnext"}
];

// All Map settings bundled
Heron.options.map = {
    settings: Heron.options.settings,
    layers: Heron.options.layers,
    toolbar: Heron.options.toolbar
};
