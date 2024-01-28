import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter, CiYoutube } from "react-icons/ci";
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { logIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.email.value;
        console.log(email, password)
        logIn(email, password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)
                navigate("/")
            })
            .catch(err => {
                const errMsg = err.message;
                console.log(errMsg)
            })

    }
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-200 border-2 p-4 py-8 rounded-md">
                <form onSubmit={handleLogin}>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <h2 className='ring-2 ring-blue-500/50 rounded-lg p-2 text-2xl text-blue-800 font-semibold border-pink-400 border-2 '>Please Login</h2>
                        <div className='join join-vertical gap-2'>
                            <label>Email</label>
                            <input type="email"
                                name='email'
                                placeholder="Enter Your Email" className="input h-10 w-full input-bordered w-full mt-2" />
                        </div>
                        <div className='join join-vertical gap-2'>
                            <label>Password</label>
                            <input
                                name='password' type="password" placeholder="Enter Your Password" className="input input-bordered w-full mt-2 h-10 w-full" />
                            <span className='text-xs text-right underline'><Link>Forgot Password </Link></span>
                        </div>
                    </div>
                    <div className='flex flex-col jusitfy-center items-center my-4'>
                        <button className='bg-red-300 px-4 py-2 rounded-lg'>Login</button>
                    </div>
                </form>

                <div>
                    <span className='text-sm'>
                        Don't have an account? Please<Link className='text-blue-600' to="/register"> Register</Link>
                    </span>
                </div>
                <div className="divider">Or Login using</div>
                <div className='grid grid-cols-5 mx-4 jusitfy-center items-center'>
                    <span><CiFacebook className='hover:text-pink-400 text-xl ' /></span>
                    <span><CiTwitter className='hover:text-pink-400 text-xl ' /></span>
                    <span><CiInstagram className='hover:text-pink-400 text-xl ' /></span>
                    <span><CiLinkedin className='hover:text-pink-400 text-xl ' /></span>
                    <span><CiYoutube className='hover:text-pink-400 text-xl ' /></span>
                </div>
            </div>
        </div>
    )
}

export default Login