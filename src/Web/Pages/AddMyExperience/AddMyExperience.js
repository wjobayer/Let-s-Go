import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
const AddMyExperience = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-product">
            <Header></Header>
            <div>
            <h1 className="mt-5 text-primary">Add Your Travelling Experience.</h1>
            <p className='text-danger'>All the options are required *</p>
            <form className="mb-5 d-flex" onSubmit={handleSubmit(onSubmit)}>
               <div className='w-50 p-4 me-4'>
               <input {...register("blog_title", { required: true, maxLength: 150 })} placeholder="Blog Title" />
                <textarea {...register("description",{ required: true})} placeholder="Description" />
                <input {...register("destination",{ required: true})} placeholder="Tourist Destination" />
                <input type="number" {...register("duration",{ required: true})} placeholder="Days" />
                <input type="number" {...register("cost",{ required: true})} placeholder="Cost" />
               </div>
                <div className='w-50 p-4'>
                <input {...register("spots_image",{ required: true})} placeholder="Image url Of Tourist Destination" />
                <input {...register("category", { required: true, maxLength: 30 })} placeholder="Category" />
                <input type="email" {...register("traveller_email")} placeholder="Traveller Email" />
                <input {...register("traveller_facebook")} placeholder="Traveller Facebook" />
                <input {...register("traveller_instagram")} placeholder="Traveller Instagram" />
                <input className="btn btn-primary" type="submit" value="Post" />
                
                </div>
            </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddMyExperience;