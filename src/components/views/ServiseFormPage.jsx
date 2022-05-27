//import {useState} from "react";
import {Form, Formik} from "formik"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ServiceFormPage = (props) => {
    // const [title, setTitle] = useState('')
    // const [description, setDescription] = useState('')
    // const [image, setImage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const services = {props}

        fetch('http://localhost:3000/services',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(services)

        }).then(() => {
            console.log(' add new services')
        })
    }

    const newService = {...props}
    console.log(props)

    return (
        <>
            <div className='darkBG'>
                <div className='centered'>
                    <div className='service-form'>
                        <Formik  initialValues={{title: '', description: ''}} onSubmit={(values) => console.log(values)}>
                            {(formProps) => (
                                <Form onSubmit={handleSubmit}>
                                    <div className='content'>
                                        <div className='modal-header'>
                                            <h3 style={{marginTop: 30}}> Create new service</h3>
                                            <FontAwesomeIcon icon={faXmark} className='close' onClick={()=> props.setService(null)} />
                                        </div>
                                        <hr/>
                                        <div className='service'>
                                            <label className='service-form-title'> service: </label>
                                            <input
                                                name={props.service.title}
                                                className='service-input'
                                                value={props.service.title}
                                                //onChange={(e) => setTitle(e.target.value)}
                                            />
                                        </div>
                                        <div >
                                            <label className=' service-form-title'> description: </label>
                                            <textarea
                                                className='textarea'
                                                value={props.service.description}
                                                //onChange={(e) => setDescription(e.target.value)}
                                            />
                                        </div>
                                        <div className='service'>
                                            <label> image: </label>
                                            <input
                                                style={{marginTop: 30}}
                                                type='file'
                                                name='photo'
                                                //onChange={(e) => setImage(e.target.value)}
                                            />
                                        </div>
                                        <hr/>
                                        <div className='submit-button'>
                                            <button type='submit' className='close' onClick={()=> props.setService(null)}>
                                                close
                                            </button>
                                            <button type='submit' className='form-button'>
                                                save changes
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceFormPage