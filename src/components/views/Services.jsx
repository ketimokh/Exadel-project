//import {useState} from "react";


const Services = () => {
    // const [title, setTitle] = useState('')
    // const [description, setDescription] = useState('')
    // const [image, setImage] = useState('')
    //
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const services = { title, description, image}
    //
    //     fetch('http://localhost:3000/services',{
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(services)
    //
    //     }).then(() => {
    //         console.log(' add new services')
    //     })
    // }
    return (
    <>
        <div>
            <button type='button' className='service-button' >
                add new service
            </button>
        </div>
        <div className='posts-wrapper'>
            <div className='service-wrapper'>
                <div>
                    <h2 className='post-title'> service </h2>
                    <p className='post-text'> საცდელი ვირთხა</p>
                </div>
                <img style={{width: 100}} src="https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png" alt="SecurityLogo"/>

            </div>
            <div className='service-wrapper'>
                <div>
                    <h2 className='post-title'> service </h2>
                    <p className='post-text'> საცდელი ვირთხა</p>
                </div>
                <img style={{width: 100}} src="https://diginomica.com/sites/default/files/images/2014-09/customer-service.0822.12.jpg" alt="SecurityLogo"/>
            </div>
        </div>
    </>
    )
}

export default Services