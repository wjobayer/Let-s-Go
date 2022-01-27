import React from 'react';
import Banner from '../../Components/Banner/Banner';
import SlicedProducts from '../../Components/SlicedProducts/SlicedProducts';
import Reviews from '../Reviews/Reviews';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import AddExperience from '../../Components/AddExperience/AddExperience';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <SlicedProducts></SlicedProducts>
            <AddExperience></AddExperience>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;