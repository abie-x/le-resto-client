import React, {useState, useEffect} from "react";
import axios from "axios";
import animationData from '../assets/pending.json'
import Lottie from "lottie-react";
import {useNavigate} from 'react-router-dom'
import OrderDisplay from "../components/OrderDisplay";

const OrderUpdationScreen = () => {

    const navigate = useNavigate()

    const [orders, setOrders] = useState([])

    useEffect(() => {

        const fetchOrderData = async () => {
            const {data} = await axios.get('http://127.0.0.1:3001/api/order/getall')
            console.log(data)
            setOrders(data)
        }

        fetchOrderData()

    }, [orders])


    const navigateHandler = () => {
        navigate('/inventory')
    }

    return (
        <div class="h-screen w-screen bg-black text-white py-12 px-8 overflow-hidden flex flex-col">
            <div className="w-full flex justify-between">
                <h2 class="text-white text-3xl font-semibold">Good morning cheff👋</h2>
                <button type="button" className=" text-green-100 font-medium rounded-md text-base" onClick={navigateHandler}>View inventory</button>
            </div>

            <h5 class="text-lg mt-2">Here's the sneak peak of orders you have received</h5>
            <div class="flex-1 grid grid-cols-3 gap-4 mt-6 overflow-y-scroll">
            
                
                {orders.length > 0 && orders.map((order) => {
                    if(order.status === 'Delivered' || order.status === 'Completed') {
                        return null
                    }
                    let date = new Date(order.created_at)
                    const hours = date.getHours();
                    const minutes = date.getMinutes();
                    const seconds = date.getSeconds();
                    return (
                            <OrderDisplay order={order} hours={hours} minutes={minutes} seconds={seconds}/>
                    )
                })}
                </div>


            {orders.length === 0 && (
                    <div className="w-screen h-full flex flex-col justify-center items-center -mt-12">
                        <Lottie animationData={animationData} className="w-1/2 h-1/2" />
                            <h2 className="text-lg font-bold pt-1">No pending orders⌛</h2>
                    </div>
                )}
                
        </div>
    )
}

export default OrderUpdationScreen