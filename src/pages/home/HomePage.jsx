import React from 'react';
import Banner from './homePageComponent/Banner';
import Template from './homePageComponent/Template';
import Footer from '../../component/Footer';
import FAQ from './homePageComponent/FAQ';
import Why from './homePageComponent/Why';

const HomePage = () => {
    return (
        <div className='w-screen flex flex-col gap-4 items-center overflow-hidden bg-slate-50 dark:bg-black'>
            <Banner></Banner>
            
            <Why></Why>
            <Template></Template>
            <FAQ></FAQ>
            <Footer></Footer>

        </div>
    );
};

export default HomePage;