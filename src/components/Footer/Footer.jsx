import React from 'react';
import logo from '../../assets/images/logo.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import mastercard from "../../assets/images/sliders/payment/master.png"
import skrill from "../../assets/images/sliders/payment/skrill.png"
import visacard from "../../assets/images/sliders/payment/visa.png"
import westernunion from "../../assets/images/sliders/payment/westernunion.png"
const Footer = () => {
    const payments = [
        { src: mastercard },
        { src: visacard },
        { src: westernunion },
        { src: skrill }
    ]
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content flex justify-between items-center px-12">
            <div className='flex flex-col gap-6'>
                <div>
                    <img src={logo} className='rounded-full my-4' alt="" />
                    <p>25 New Eskaton Road, <br /> Dhaka-1000, Bangladesh</p>
                    <p className='my-4'>support@resellerbd.com</p>
                    <p className='mt-4'>+8801800000000</p>
                </div>
                <div>
                    <h3>Visit US on</h3>
                    <nav className='flex gap-6 my-4'>
                        <span><FaFacebookF /></span>
                        <span><FaXTwitter /> </span>
                        <span><FaInstagram /></span>
                        <span><FaYoutube /></span>
                        <span><FaPinterestP /></span>
                    </nav>
                </div>
            </div>
            <nav>
                <header className="footer-title">Services</header>
                <Link className="link link-hover">Branding</Link>
                <Link className="link link-hover">Design</Link>
                <Link className="link link-hover">Marketing</Link>
                <Link className="link link-hover">Advertisement</Link>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Jobs</Link>
                <Link className="link link-hover">Press kit</Link>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </nav>
            <div className='flex flex-col justify-start items-center'>
                <h2 className='text-xl bg-green-200 px-4 py-2 text-black mb-4'>We accept payment</h2>
                <div className='grid grid-cols-4 gap-2'>
                    {
                        payments.map(payment => <img className='w-10 h-8' src={payment.src} />)
                    }
                </div>
                <div className='my-4'>
                    <h2 className='text-center items-center text-xl pb-4'>Subscribe</h2>
                    <input type="text" placeholder='@.com' className='w-64 text-right rounded-lg h-10' />
                </div>
            </div>
        </footer>
    );
};

export default Footer;