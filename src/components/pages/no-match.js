import React from 'react';
import {Link} from "react-router-dom";

export default function() {
    return (
        <div>
            <h1>We couldn't find that page, please try a different route </h1>
            <Link to="/">Return to Homepage</Link>
        </div>
    );
}