//import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useFormik } from 'formik';

const ServiceFormPage = (props) => {
    const formik = useFormik({
        initialValues: {title: props.service.title, description: props.service.description},
        onSubmit: values => {
           console.log(values)
        },
    });
    const handleSubmit = (e) => {
        const services = {props}

        fetch('http://localhost:3000/services',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(services)

        }).then((data) => {
            props.setServices(prev => [...prev, data])
            console.log(' add new services')
        })
    }

    return (
        <>
                <div className='centered'>
                    <div className='service-form'>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='content'>
                                <div className='modal-header'>
                                    <h3 style={{marginTop: 30, fontSize: 30}}> Create new service</h3>
                                    <FontAwesomeIcon icon={faXmark} className='close' onClick={()=> props.setService(null)} />
                                </div>
                                <hr/>
                                <div className='service'>
                                    <label className='service-form-title'> service: </label>
                                    <input
                                        name='title'
                                        className='service-input'
                                        value={formik.values.title}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                                <div >
                                    <label className=' service-form-title'> description: </label>
                                    <textarea
                                        name='description'
                                        className='textarea'
                                        value={formik.values.description}
                                        onChange={formik.handleChange}
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
                                    <button
                                        type='submit'
                                        className='form-button'
                                    >
                                        save changes
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            <div className='darkBG'> </div>
        </>
    )
}

export default ServiceFormPage