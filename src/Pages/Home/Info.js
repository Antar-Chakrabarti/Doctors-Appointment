import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {

    return (
        <div className='my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <InfoCart bgClass='bg-gradient-to-r from-secondary to-primary' cardTitle='Opening Hours' img={clock}/>
            <InfoCart bgClass='bg-[#3a4451]' cardTitle='Our Locations' img={marker}/>
            <InfoCart bgClass='bg-gradient-to-r from-secondary to-primary' cardTitle='Contact Us' img={phone}/>
        </div>
    );
};

export default Info;