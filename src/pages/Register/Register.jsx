import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter, CiYoutube } from "react-icons/ci";
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { register } = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const userName = form.uName.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        const user = { userName, email, password, photoURL }
        console.log(user)
        register(email, password)
            .then(res => {
                const regUser = res.user;
                console.log(regUser)
                if (regUser.email) {
                    Swal.fire(regUser.email, "has been successfully registered")
                }
            })
            .catch(err => {
                const errMsg = err.message
                console.log(errMsg)
            })
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-200 border-2 px-4 py-8 rounded-md w-96">
                <form onSubmit={handleRegister}>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <h2 className='ring-2 ring-blue-500/50 rounded-lg p-2 text-2xl text-blue-800 font-semibold border-pink-400 border-2 '>Register</h2>
                        <div className='join join-vertical gap-2 w-full'>
                            <label>User Name</label>
                            <input type="text"
                                name='uName'
                                placeholder="Enter Your Your User Name" className="input h-10 w-full input-bordered w-full mt-2" />
                        </div>
                        <div className='join join-vertical gap-2 w-full'>
                            <label>Email</label>
                            <input type="email"
                                name='email'
                                placeholder="Enter Your Email" className="input h-10 w-full input-bordered w-full mt-2" />
                        </div>
                        <div className='join join-vertical gap-2 w-full'>
                            <label>Photo URL</label>
                            <input type="text"
                                name='photoURL'
                                placeholder="Enter Your Photo URL" className="input h-10 w-full input-bordered w-full mt-2" />
                        </div>
                        <div className='join join-vertical gap-2 w-full'>
                            <label>Password</label>
                            <input
                                name='password' type="password" placeholder="Enter Your Password" className="input input-bordered w-full mt-2 h-10 w-full" />
                        </div>
                    </div>
                    <div className='flex flex-col jusitfy-center items-center my-4'>
                        <input className='bg-red-300 px-4 py-2 rounded-lg' type="submit" value="Register" />
                    </div>
                </form>

                <div className='w-full text-center'>
                    <span className='text-sm '>
                        Already have an account? Please<Link className='text-blue-600' to="/login"> Login</Link>
                    </span>
                </div>
                <div className="divider">Or Register using</div>
                <div className='flex justify-center items-center gap-4 '>
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

export default Register