import React from "react";

const Data = ({data}) => (
   <>
       <p>Cas Confirmés : {data.confirmed}</p>
       <p>Rétablissement : {data.recovered}</p>
       <p>Cas critiques : {data.critical}</p>
       <p>Morts : {data.deaths}</p>
   </>
);

export default Data;
