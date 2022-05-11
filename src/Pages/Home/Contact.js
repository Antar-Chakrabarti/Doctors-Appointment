import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <section
            style={{
                background: `url(${appointment})`
            }} className='py-20' >
                <div className='text-center'>
                <h2 className='text-xl text-primary font-bold'>Contact Us</h2>
                <p className='text-3xl text-white'>Stay connected with us</p>
                </div>
            <form className='flex justify-center items-center flex-col gap-5 my-10'>
                <input type="text" placeholder="Email Address" className="input input-bordered input-sm w-full max-w-xs" />
                <input type="text" placeholder="Subject" className="input input-bordered input-sm w-full max-w-xs" />
                <input type="text" placeholder="Your message" className="input input-bordered input-lg w-full max-w-xs" />
                <PrimaryButton>submit</PrimaryButton>
            </form>
        </section>
    );
};

export default Contact;