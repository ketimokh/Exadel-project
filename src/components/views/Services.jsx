import ServiceFormPage from "./ServiseFormPage";
import Tbilisi from '../../images/tbilisi.jpg'
import useServices from "../hooks/useServices";

const Services = () => {
const { service, setService, services, setServices} = useServices()
    return (
        <div className='service-container'>
            <div className='add-form'>
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
