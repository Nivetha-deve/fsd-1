import { useEffect, useState } from "react";
import { samplePromise } from "../../apis/auth";


const Redirect = () => {
    const [loading,setLoading] = useState(false);

    const getUrl = async () => {

        setLoading(true);

        const response = await samplePromise;

         location.replace(response.longUrl);
    };

    useEffect(() =>{
      getUrl();
    },[]);

    if(loading) {
        return '....loading';
    }
    return <h1>some error occured</h1>
    
}

export default Redirect;