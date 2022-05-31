import {useEffect, useState} from "react";
import ServiceFormPage from "./ServiseFormPage";
import Tbilisi from '../../images/tbilisi.jpg'

const Services = () => {
    const [services, setServices] = useState([])
    const [service, setService] = useState(null)

    useEffect(() => {
        fetch('https://api.npoint.io/44c1c313d40c0811ad19?fbclid=IwAR0aHCzzz2cy35cADlBCVZT0Dp0nFghbwAsKpTw-bDh-CrTaDJlIAVE3oCI')
            .then((res)=> res.json())
            .then((data) => setServices(data.slice(0, 2)))
    },[])
    return (
        <div className='service-container'>
            <div>
                <button type='button' className='service-button' onClick={() => setService({title: '', description: ''})}  >
                    add new service
                </button>
            </div>
            <div className='posts-wrapper'>
                {
                    services.map((item) => {
                        return (
                            <div key={item.id} className='service-wrapper'>
                                <div className='service-content'>
                                    <h2 className='post-title'> {item.title} </h2>
                                    <p className='post-text'> {item.description}</p>
                                </div>
                                <img
                                    style={{width: 100, height: 100}}
                                    src={Tbilisi}
                                    alt="Tbilisi City"
                                />
                            </div>
                        )
                    })
                }
                {service !== null ? <ServiceFormPage service={service} setServices={setServices} setService={setService} /> : null}
            </div>
        </div>

    )
}

export default Services