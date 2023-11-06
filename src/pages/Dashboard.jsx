import React from "react";
import "./Dashboard.css"
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Dashboard() {

    return (
        <>
            <div id="Dashboard">
                <Link to="/classic">
                    <Button name="Classic"/>
                </Link>
                <Link to="/quote">
                    <Button name="Quote"/>
                </Link>
                <Link to="/devil_fruit">
                    <Button name="Devil Fruit"/>
                </Link>
                <Link to="/image">
                    <Button name="Image"/>
                </Link>
            </div>
        </>
    )

}