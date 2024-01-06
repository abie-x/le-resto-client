import React, {useState} from "react";
import LoginComponent from "../components/LoginComponent";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const LoginScreen = () => {

    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    const navigate = useNavigate()

    const signup = () => {
        navigate('/signup')
    }

    return (
        <div className="h-screen w-screen md:px-12 pt-20 bg-black text-white">
            <div className="grid gap-4 grid-cols-2">
                <div className="h-full w-full">
                    <div className="h-full w-full mx-auto">
                        <img src="login-img.png" className="rounded-md w-4/6 h-full ml-24" />
                        <div className="absolute bottom-1/2 left-56">
                            <h1 className="font-medium text-2xl mt-24 ">Hey there👋</h1>
                            <h3 className="font-bold text-3xl mt-4">welcome to Le-Resto</h3>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full relative">
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/5 h-3/6 bg-white border border-gray-200 rounded-xl shadow py-6 flex items-center px-4">
                        <div className="w-full pt-8">
                            <label for="remember" class="text-sm font-medium text-gray-500">Enter your details to login</label>
                            <div className="relative rounded-md shadow-sm ">
                                    <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="border border-gray-600 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 mb-2 mt-4"
                                    placeholder="Enter email "
                                    required
                                    onChange={(e) => setEmailValue(e.target.value)}
                                    />
                                {/* <BsFillTelephoneFill className="absolute top-3 left-2" /> */}
                            </div>
                            <div className="relative rounded-md shadow-sm">
                                    <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="border border-gray-600 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 mb-2 mt-4"
                                    placeholder="Enter your password"
                                    required
                                    onChange={(e) => setPasswordValue(e.target.value)}
                                    />
                                {/* <BsFillTelephoneFill className="absolute top-3 left-2" /> */}
                            </div>
                            <div class="flex items-center h-5 mt-6">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 transition required" />
                                <label for="remember" class="ml-2 mt-1 text-sm font-medium text-gray-500">Keep me signed in</label>
                            </div>
                            <div className="">
                                <button type="button" onClick={signup} class=" text-white bg-black font-medium rounded-lg text-sm px-5 py-2 text-center mb-4 mt-6">Login</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-2/4 top-3/4 transform -translate-x-1/2 -translate-y-1/2 mt-4">
                        <p className="text-white font-thin text-sm">Are you a new user? <span className="font-bold underline text-sm hover:cursor-pointer" onClick={signup}>Signup</span></p>
                    </div>
                    {console.log('current email is:', emailValue)}
                    {console.log('current password value is:', passwordValue)}
                </div>
            </div>
        </div>
    )
}

export default LoginScreen