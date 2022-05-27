import {useState} from "react";
import {formik} from "formik"

const ServiceFormPage = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const services = { title, description, image}

        fetch('http://localhost:3000/services',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(services)

        }).then(() => {
            console.log(' add new services')
        })
    }

    return (
        <>
            <div className='posts-wrapper'>
                <formik >
                    <form onSubmit={handleSubmit}>
                        <h3> Create new service</h3>
                        <div className='service-wrapper'>
                            <div>
                                <label className='post-title'> service: </label>
                                <input
                                    type='text'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <label className='post-title'> description: </label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <input
                                type='file'
                                name='photo'
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </div>
                        <div>
                            <button type='submit' className='service-button'>
                                save changes
                            </button>
                            <button type='submit' className='service-button'>
                                close
                            </button>
                        </div>
                    </form>
                </formik>
            </div>
        </>
    )
}

export default ServiceFormPage