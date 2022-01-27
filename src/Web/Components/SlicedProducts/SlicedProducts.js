import React, { useEffect, useState } from 'react';
import { Container, Pagination } from 'react-bootstrap';
import Product from '../../Components/Product/Product';
import './SlicedProducts.css'

const SlicedProducts = () => {
    const [product , setProduct]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div className="my-5">
            <Container className="my-5">
           <h1 className=" display-5 text-primary">Travellers Experiences.</h1>
            <p className=" mb-5">Recents Blog Post</p>
            <div className="product-collection">{
            product.slice(0, 6).map(product =><Product
                key={product.key}
                product={product}
            ></Product>
            )
        }
        </div>
        <Pagination className='w-50 mx-auto'>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Ellipsis />

  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>{11}</Pagination.Item>
  <Pagination.Item active>{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item disabled>{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
           </Container>
        </div>
    );
};

export default SlicedProducts;