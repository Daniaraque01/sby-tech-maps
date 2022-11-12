import React, { useRef, useEffect } from "react";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import "./index.css";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";


const Maps = ({ point, polyline, polygon }) => {

    console.log(point, "point")
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
                map: webmap,
                zoom: 2,
            });

            const graphicsLayer = new GraphicsLayer();
            webmap.add(graphicsLayer);

            const simpleMarkerSymbol = {
                type: "simple-marker",
                color: [7, 25, 250],  // blue
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

            const simpleLineSymbol = {
                type: "simple-line",
                color: [7, 25, 250], // blue
                width: 2
            };

            const polylineGraphic = new Graphic({
                geometry: polyline,
                symbol: simpleLineSymbol
            });
            graphicsLayer.add(polylineGraphic);

            /**crear un polígono */


            const simpleFillSymbol = {
                type: "simple-fill",
                color: [7, 25, 250],  // blue
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            };

            const polygonGraphic = new Graphic({
                geometry: polygon,
                symbol: simpleFillSymbol,

            });
            graphicsLayer.add(polygonGraphic);



        }
    }, []);

    return <div className="mapDiv" ref={mapDiv}></div>;
}

export default Maps;
