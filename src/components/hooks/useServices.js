import {useEffect, useState} from "react";

const useServices = () => {
    const [services, setServices] = useState([])
    const [service, setService] = useState(null)

    useEffect(() => {
        fetch('https://api.npoint.io/44c1c313d40c0811ad19?fbclid=IwAR0aHCzzz2cy35cADlBCVZT0Dp0nFghbwAsKpTw-bDh-CrTaDJlIAVE3oCI')
            .then((res)=> res.json())
            .then((data) => setServices(data.slice(0, 2)))
    },[])

    return { service, services, setService, setServices }
}

export default useServices
