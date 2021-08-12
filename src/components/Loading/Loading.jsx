import React from 'react'
import { Spinner } from "react-bootstrap";
import './Loading.css'

export const Loading = () => {
    return (
        <center className="load">
            <Spinner animation="grow" />
        </center>
    )
}