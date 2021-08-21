import React from 'react'
import { Spinner } from "react-bootstrap";
import './Loading.css'

export const Loading = () => {
    return (
        <center className="load overlay">
            <Spinner animation="grow" />
        </center>
    )
}