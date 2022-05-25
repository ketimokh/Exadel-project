
const Services = () => {
    return (
    <>
        <div>
            <button type='button' className='service-button'>
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