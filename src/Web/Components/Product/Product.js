import { faDyalog} from '@fortawesome/free-brands-svg-icons';
import { faHome,faMap} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'


const Product = ({product}) => {
    const{_id,blog_title,description,destination,duration,spots_image,category,traveller_email,traveller_facebook,traveller_instagram}=product;
    return (
        <div>
        <div className="product m-2 p-3 w-100 blogpost">
        <img src={spots_image} alt="" height="300px" className='w-100 rounded'/>
        <p className='mt-2 fw-bold text-primary'><FontAwesomeIcon icon={faHome}/>     {blog_title}</p>
        <h6 className='text-secondary'><FontAwesomeIcon icon={faMap} />  {destination}</h6>
        <h6><FontAwesomeIcon icon={faDyalog} /> {duration} Days</h6>
        <Link to={`/confirmorder/${_id}`}>
        <Button className="px-4 custom-btn">Details</Button>
        </Link>       
    </div>
    </div>
    );
};

export default Product;