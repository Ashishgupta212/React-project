import { useState, useEffect } from "react";
import { Menu_api } from "./const"; 

const useResturantmenu = (resid) => {
    const [Resinfo, SetResinfo] = useState(null);

    useEffect(() => {
        if (resid) {
            fetchdata();
        }
    }, [resid]); 

    const fetchdata = async () => {
        try {
            const data = await fetch(Menu_api + resid);
            const response = await data.json();
            SetResinfo(response?.data); 
            console.log(response?.data);
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
        }
    };

    return Resinfo;
};

export default useResturantmenu;
