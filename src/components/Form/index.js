import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import FormPoint from "./FormPoint";
import FormPolygon from "./FormPolygon";
import FormLine from "./FormLine";
import Button from 'react-bootstrap/Button';
import Maps from "../Maps";

const FormOption = () => {

    const [figure, setFigure] = useState(<div></div>)
    const [type, setType] = useState("1")
    const [refresh, setRefresh] = useState(false)

    const [point, setPoint] = useState({ //Create a point
        type: "point",
        longitude: -70.680652,//Santiago
        latitude: -33.42630,
    })

    const [line, setLine] = useState({ //Create a line
        type: "polyline",
        paths: [
            [-82.366308, 23.116607], //Longitude, latitude  //Cuba   
            [-3.703625, 40.417431], //Longitude, latitude //España 
        ]
    })

    const [polygon, setPolygono] = useState({
        type: "polygon",
        rings: [
            [-55.702980, -8.269622], //Longitude, latitude Brazil
            [-48.499192, -1.456810], //Longitude, latitude Belem
            [-38.526836, -3.732923], //Longitude, latitude  Fortaleza
            [-34.878565, -8.058156],   //Longitude, latitude Recife
            [-38.502495, -12.984492]  //Longitude, latitude Salvadorr
        ]
    });
    const handleChange = (e) => {

        setType(e.target.value)
        console.log(e.target.value);

        switch (e.target.value) {

            case "1": {
                setFigure(FormPoint);
                break;
            }

            case "2": {
                setFigure(FormLine);
                break;
            }

            case "3": {
                setFigure(FormPolygon);
                break;
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);


        switch (type) {

            case "1": {

                setPoint({ //Create a point
                    type: "point",
                    longitude: e.target[1].value === "" ? -70.680652 : parseFloat(e.target[1].value), //Santiago
                    latitude: e.target[2].value === "" ? -33.426303 : parseFloat(e.target[2].value),
                });
                break;
            }

            case "2": {
                const longitudeOne = e.target[1].value
                const latitudOne = e.target[2].value
                const pathOne = [longitudeOne === "" ? -82.366308 : parseFloat(longitudeOne), latitudOne === "" ? 23.116607 : parseFloat(latitudOne)]
                const longitudeTwo = e.target[3].value
                const latitudTwo = e.target[4].value
                const pathTwo = [longitudeTwo === "" ? -3.703625 : parseFloat(longitudeTwo), latitudTwo === "" ? 40.417431 : parseFloat(latitudTwo)]

                setLine({
                    type: "polyline",
                    paths: [
                        pathOne, //Longitude, latitude  //Cuba   
                        pathTwo,   //Longitude, latitude //España 

                    ]
                });
                break;


            }

            case "3": {

                const longitudeOne = e.target[1].value
                const latitudOne = e.target[2].value
                const pathOne = [longitudeOne === "" ? -55.702980 : parseFloat(longitudeOne), latitudOne === "" ? -8.269622 : parseFloat(latitudOne)]
                const longitudeTwo = e.target[3].value
                const latitudTwo = e.target[4].value
                const pathTwo = [longitudeTwo === "" ? -48.499192 : parseFloat(longitudeTwo), latitudTwo === "" ? -1.456810 : parseFloat(latitudTwo)]
                const longitudeThree = e.target[5].value
                const latitudThree = e.target[6].value
                const pathThree = [longitudeTwo === "" ? -38.526836 : parseFloat(longitudeThree), latitudThree === "" ? -3.732923 : parseFloat(latitudThree)]
                const longitudeFour = e.target[7].value
                const latitudFour = e.target[8].value
                const pathFour = [longitudeTwo === "" ? -34.878565 : parseFloat(longitudeFour), latitudFour === "" ? -8.058156 : parseFloat(latitudFour)]
                const longitudeFive = e.target[9].value
                const latitudFive = e.target[10].value
                const pathFive = [longitudeFive === "" ? -38.502495 : parseFloat(longitudeFive), latitudFive === "" ? -12.984492 : parseFloat(latitudFive)]

                setPolygono({
                    type: "polygon",

                    rings: [
                        pathOne,
                        pathTwo,
                        pathThree,
                        pathFour,
                        pathFive,

                    ]
                });
                break;
            }
        }
        setRefresh(true)
        setTimeout(() => {
            setRefresh(false)
        }, "1000")
        console.log(e.target[1].value);
        console.log(e.target);
    }
    return (

        <>
            <Form onSubmit={handleSubmit}>
                <Form.Select onChange={handleChange} aria-label="Default select example">
                    <option>Selecciona tu figura</option>
                    <option value="1">Punto</option>
                    <option value="2">Linea</option>
                    <option value="3">Polígono</option>
                </Form.Select>
                {figure}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            {refresh ? <div></div> : <Maps point={point} polyline={line} polygon={polygon} />}
        </>
    );
}

export default FormOption;