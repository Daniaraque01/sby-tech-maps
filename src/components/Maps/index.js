import Map from "@arcgis/core/Map";
import esriConfig from "@arcgis/core/config.js";
import React, { useRef, useEffect } from "react";
import Bookmarks from '@arcgis/core/widgets/Bookmarks';
import Expand from '@arcgis/core/widgets/Expand';
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import "./index.css";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";


const Maps = () => {

    const mapDiv = useRef(null);

    useEffect(() => {
        if (mapDiv.current) {
            /**
             * Initialize application
             */
            const webmap = new WebMap({
                basemap: "topo-vector"
            });

            /**crear un punto */

            const view = new MapView({
                container: mapDiv.current,
                map: webmap
            });

            const graphicsLayer = new GraphicsLayer();
            webmap.add(graphicsLayer);

            const point = { //Create a point
                type: "point",
                longitude: -70.680652, //Santiago
                latitude: -33.426303,
            };
            const simpleMarkerSymbol = {
                type: "simple-marker",
                color: [7, 25, 250],  // Orange
                outline: {
                    color: [255, 255, 255], // White
                    width: 1
                }
            };

            const pointGraphic = new Graphic({
                geometry: point,
                symbol: simpleMarkerSymbol
            });
            graphicsLayer.add(pointGraphic);

            /**crear una linea */

            const polyline = {
                type: "polyline",
                paths: [
                    [-82.366308, 23.116607], //Longitude, latitude  //Cuba   
                    [40.417431, -3.703625], //Longitude, latitude //España 
                    // [-118.808878330345, 34.0016642996246]  //Longitude, latitude
                ]
            };
            const simpleLineSymbol = {
                type: "simple-line",
                color: [67, 5, 248], // Orange
                width: 2
            };

            const polylineGraphic = new Graphic({
                geometry: polyline,
                symbol: simpleLineSymbol
            });
            graphicsLayer.add(polylineGraphic);



        }
    }, []);

    return <div className="mapDiv" ref={mapDiv}></div>;
}

export default Maps;
