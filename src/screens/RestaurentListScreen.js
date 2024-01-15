import React from "react";
import Navbar from "../components/Navbar";

const RestaurentCard = () => {

}

const RestaurentListScreen = () => {

    return (
        <div className="w-screen min-h-screen bg-black text-white px-6 py-4">
            <Navbar isProfile={true} placeholder='search for restaurents'/>
            <div className="grid grid-cols-4 gap-6 bg-red-100 h-full w-full">
                <div className="bg-gray-800 flex-col">
                    <div>
                        <img src="ruchi.jpg" className="h-40 w-full object-cover" />
                    </div>
                    <div>
                        i'm the card text portion
                    </div>
                </div>
                <div className="bg-gray-800 flex-col">
                    <div>
                        <img src="ruchi.jpg" className="h-40 w-full object-cover" />
                    </div>
                    <div>
                        i'm the card text portion
                    </div>
                </div>
                <div className="bg-gray-800 flex-col">
                    <div>
                        <img src="ruchi.jpg" className="h-40 w-full object-cover" />
                    </div>
                    <div>
                        i'm the card text portion
                    </div>
                </div>
                <div className="bg-gray-800 flex-col">
                    <div>
                        <img src="ruchi.jpg" className="h-40 w-full object-cover" />
                    </div>
                    <div>
                        i'm the card text portion
                    </div>
                </div>
                <div className="bg-gray-800 flex-col">
                    <div>
                        <img src="ruchi.jpg" className="h-40 w-full object-cover" />
                    </div>
                    <div>
                        i'm the card text portion
                    </div>
                </div>
                <div className="bg-gray-800 flex-col">
                    <div>
                        <img src="ruchi.jpg" className="h-40 w-full object-cover" />
                    </div>
                    <div>
                        i'm the card text portion
                    </div>
                </div>
                
                
            </div>
        </div>
    )

}

export default RestaurentListScreen