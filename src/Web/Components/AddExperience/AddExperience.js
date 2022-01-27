import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import addimage from'../../../images/add.png'

const AddExperience = () => {
    return (
        <div>
            <h1 className='text-primary'>What's On Your Mind?</h1>
            <p>You can share your travelling experiences.</p>
            <img src={addimage} alt="" className='w-25'/>
            {/* <h1 className='border rounded w-25 text-primary mx-auto'><FontAwesomeIcon icon={faPlus} /></h1>  */}
            <Link to="/addmyexperience" className='d-block py-1 border w-25 mx-auto'><Button><FontAwesomeIcon icon={faPlus} /></Button></Link>
        </div>
    );
};

export default AddExperience;