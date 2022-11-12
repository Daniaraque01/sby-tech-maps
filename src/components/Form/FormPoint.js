import React from "react";
import Form from 'react-bootstrap/Form';

const FormPoint = () => {
    return (
        <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Longitud 1</Form.Label>
                <Form.Control type="longitud" placeholder="Longitud 1" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Latitud 1</Form.Label>
                <Form.Control type="latitud" placeholder="Latitud 1" />

            </Form.Group>
        </>


    )

}

export default FormPoint;