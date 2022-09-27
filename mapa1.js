var myPoints = [{
"type": "FeatureCollection",
"name": "postes",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "cat": 1, "osm_id": "10033953886", "name": null, "barrier": null, "highway": null, "ref": null, "address": null, "is_in": null, "place": null, "man_made": "utility_pole", "other_tags": null }, "geometry": { "type": "Point", "coordinates": [ -83.9963505, 9.9248976 ] } },
{ "type": "Feature", "properties": { "cat": 2, "osm_id": "10033953887", "name": null, "barrier": null, "highway": null, "ref": null, "address": null, "is_in": null, "place": null, "man_made": "utility_pole", "other_tags": null }, "geometry": { "type": "Point", "coordinates": [ -83.9961606, 9.9252245 ] } },
{ "type": "Feature", "properties": { "cat": 3, "osm_id": "10033953888", "name": null, "barrier": null, "highway": null, "ref": null, "address": null, "is_in": null, "place": null, "man_made": "utility_pole", "other_tags": null }, "geometry": { "type": "Point", "coordinates": [ -83.9959377, 9.9255831 ] } },
{ "type": "Feature", "properties": { "cat": 4, "osm_id": "10033953889", "name": null, "barrier": null, "highway": null, "ref": null, "address": null, "is_in": null, "place": null, "man_made": "utility_pole", "other_tags": null }, "geometry": { "type": "Point", "coordinates": [ -83.9965676, 9.9245316 ] } }
]
},
{
    "type": "FeatureCollection",
    "name": "hidrante",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "cat": 5, "osm_id": "10033953890", "name": null, "barrier": null, "highway": null, "ref": null, "address": null, "is_in": null, "place": null, "man_made": null, "other_tags": "\"emergency\"=>\"fire_hydrant\",\"water_source\"=>\"main\"" }, "geometry": { "type": "Point", "coordinates": [ -83.9965577, 9.9245536 ] } }
    ]
    }];

var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

L.geoJson(myPoints, {
    style: myStyle
}).addTo(map);