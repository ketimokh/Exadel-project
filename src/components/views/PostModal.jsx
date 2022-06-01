import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const PostModal = (props) => {
    return(
        <>
            <div className='centered'>
                <div className='modal'>
                    <div className='modal-header'>
                        <h3 className='modal-title'> {props.post.title} </h3>
                        <FontAwesomeIcon icon={faXmark} className='close' onClick={()=> props.setPost(null)} />
                    </div>
                    <hr/>
                    <img className='modal-image' style={{width: 100}} src={`${props.post.image}`} alt="postImage"/>
                    <p className='post-text'> {props.post.description}</p>
                </div>
            </div>
            <div className='darkBG'> </div>
        </>
    )
}

export default PostModal