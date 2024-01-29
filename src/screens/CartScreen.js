import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import DishInCart from "../components/DishInCart";
import {useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';

const CartScreen = () => {

    const [tableNumber, setTableNumber] = useState(null)
    const [tablePin, setTablePin] = useState(null)
    const [err, setErr] = useState(null)

    const changeTableNumber = (e) => {
        setTableNumber(e.target.value)
    }

    const changeTablePin = (e) => {
        setTablePin(e.target.value)
    }

    const navigate = useNavigate()

    const currentUrl = window.location.href;
    const urlParams = new URLSearchParams(new URL(currentUrl).search);
    const id = urlParams.get("id");

    // const {id} = useParams()
    console.log(`checking the id value ${id}`)

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

    const navigateHandler = () => {
        navigate(`/menu/${id}`)
    }

    const checkoutHandler = () => {
        if(tableNumber === '1' && tablePin === '010010') {
            console.log('success1')
        } else if(tableNumber === '2' && tablePin === '64762') {
            console.log('success2')
        } else if(tableNumber === '3' && tablePin === '76377') {
            console.log('success3')
        } else {
            setErr('Invalid pin or table number entered')
        }    
    }
    

    return (
        <div className="w-screen h-screen px-8 pl-16 py-8 bg-black text-white overflow-hidden">
            <img className="h-5 w-auto hover:cursor-pointer" src="logo.png" alt="Your Company" onClick={() => navigateHandler()} />
            <div className="w-full grid grid-cols-5">
                <div className="col-span-3 w-full pt-12">
                    <h3 className="text-xl font-medium">Chef is waiting to serve you</h3>
                    <div className="w-2/3 h-2/3 bg-gray-700 mt-4 rounded-lg p-4 -mb-8 overflow-y-auto">
                        {
                            cartItems && cartItems.map(item => {

                                if(item.qty > 0) {
                                    return (
                                        <DishInCart id={item.id} image={item.image} name={item.name} price={item.price} quantity={item.qty} />
                                    )
                                } else {
                                    return 
                                }
                            })
                        }

                        <div className="w-full h-24 flex justify-between">
                            <div className="h-full w-full flex flex-col justify-center">
                                <h5 className="text-base cursor-pointer" onClick={() => navigateHandler()}><span>+</span><span className="ml-2">Add more items</span></h5>
                            </div>
                            <div className="h-full w-full flex flex-col gap-y-1 justify-center items-end">
                                <h6 className="text-sm">Sub total: <span className="font-semibold pl-3">₹ {totalPrice}</span></h6>
                                <h6 className="text-sm">Net payable: <span className="font-semibold pl-3">₹ {totalPrice} </span></h6>
                            </div>
                        </div> 

                        <hr class="h-px my-2 bg-gray-600 border-0"></hr>

                        <div className="w-full">
                            <div className="grid grid-cols-2 gap-x-16 justify-evenly items-center">
                                <div className="flex justify-end">
                                    <label htmlFor="tableNumber" className="text-white block mt-1">
                                        Enter Table number
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    id="tableNumber"
                                    // value={tableNumber}
                                    onChange={(e) => changeTableNumber(e)}
                                    className="border-b w-2/3 border-white bg-transparent text-white text-sm focus:outline-none mb-2 text-center"
                                />
                            </div>
                        </div>

                        <div className="w-full mb-2">
                            <div className="grid grid-cols-2 gap-x-16 justify-evenly items-center">
                                <div className="flex justify-end">
                                    <label htmlFor="tableNumber" className="text-white block mt-1">
                                        Enter Table PIN
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    id="tableNumber"
                                    // value={tableNumber}
                                    onChange={(e) => changeTablePin(e)}
                                    className="border-b w-2/3 border-white bg-transparent text-white text-sm text-center focus:outline-none mb-2"
                                />
                            </div>
                        </div>

                        {console.log(`current table number is ${tableNumber}`)}
                        {console.log(`current tabkePin is ${tablePin}`)}
                        {console.log(`current error is ${err}`)}

                        <hr class="h-px my-2 bg-gray-600 border-0"></hr>

                        {err && <div className="p-2 my-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                                <span class="font-medium"></span> {err}
                        </div>}

                        <hr class="h-px my-2 bg-gray-600 border-0"></hr>

                        <button type="button" class=" bg-white text-black font-medium rounded-lg text-sm px-5 py-3 text-center w-full mt-2" onClick={() => checkoutHandler()} >{(cartItems.filter(item => item.qty > 0).length) > 0 ? 'checkout' : 'view menu'}</button>

                    </div>
                </div>
                <div className="col-span-2 w-full pt-6 flex justify-start">
                    <img src="cheff.png" className="h-screen -mt-24 object-cover -ml-12" />
                </div>
            </div>

        </div>
    )
}

export default CartScreen