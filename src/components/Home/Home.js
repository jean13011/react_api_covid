import React, {useEffect, useState} from "react";
import API from "../../API";
import Data from "../Data";

const Home = () => {
    const [datas, setDatas] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async () => {
        setDatas(await API.fetchTotalDatas())
    }, []);

    return (
        <>
            <div>
                <h1>Total chiffre sur le covid</h1>
                {datas.map((data, i) => (
                        <div key={i}>
                            <Data  data={data}/>
                        </div>
                    ))}
            </div>
        </>

    );
}

export default Home;
