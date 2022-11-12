import React from "react";
import Form from 'react-bootstrap/Form';


const FormLine = () => {
    return (
        <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Longitud 1</Form.Label>
                <Form.Control type="Longitud 1" placeholder="Longitud 1" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Latitud 1</Form.Label>
                <Form.Control type="Latitud 1" placeholder="Latitud 1" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Longitud 2</Form.Label>
                <Form.Control type="Longitud 2" placeholder="Longitud 2" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Latitud 2</Form.Label>
                <Form.Control type="Latitud 2" placeholder="Latitud 2" />
            </Form.Group>

        </>
    )

}

export default FormLine;