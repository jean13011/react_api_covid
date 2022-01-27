import React from "react";

const Title = ({text, country}) => (
    <>
        {country
            ? <h1>{text} {country}</h1>
            : <h1>{text}</h1>
        }
    </>
);

export default Title;
