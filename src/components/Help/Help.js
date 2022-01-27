import React, {useEffect, useState} from "react";
import API from "../../API";
import Table from "./Table";

const Help = () => {

    const [countries, setCountries] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( () => {

        const getDatas = async () => {
            let datas = await API.fetchAllCountriesDatasForHelp();
            datas = await datas;
            if (typeof datas == "object"){
                setCountries(datas);
            }
        }
        getDatas();

    }, []);

    return (
        <>
            {countries.length > 0 &&
                (
                    <div style={{marginTop: "50px", width: "50%", margin: '60px 330px'}}>
                        <Table countries={countries} />
                    </div>
                )
            }
        </>
    );
}

export default Help
