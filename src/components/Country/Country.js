import React, {useEffect, useRef, useState} from "react";
import API from "../../API";
import Title from "../Title";
import Data from "../Data";
import Button from "./Button";
import {Link} from "react-router-dom";


const Country = () => {
    const initial = useRef(true);
    const input = useRef(null);
    const [country, setCountry] = useState('');
    const [datas, setDatas] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async () => {

        if (initial.current){
            initial.current = false;
            return;
        }

        setDatas(await API.fetchCountryDatas(country))
    }, [country]);

    return (
        <>
            <div style={{display: "flex", justifyContent: "center"}}>
                {datas.length > 0
                    ? datas.map((data, i) => (
                        <div key={i}>
                            <div>
                                <Title text='Recherche pour' country={data.country}/>
                            </div>

                            <input
                                type="text"
                                placeholder="Rechercher les données pour un pays"
                                ref={input}
                            />
                            <Button callback={() => setCountry(input.current.value)} text="Rechercher un autre pays"/>

                            <div>
                                <Data data={data}/>
                            </div>
                        </div>

                    )) : <div>
                            <div>
                                <Title text='Recherche par pays'/>
                            </div>
                            <br/>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Rechercher les données pour un pays"
                                    ref={input}
                                />
                                <Button callback={() => setCountry(input.current.value)} text="Recherche"/>
                            </div>

                        <br/>

                        <Link to="/help">liste des pays</Link>

                        </div>
                }
            </div>

        </>

    );
}

export default Country;
