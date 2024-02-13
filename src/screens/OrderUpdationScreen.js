import React from "react";

const OrderUpdationScreen = () => {
    return (
        <div class="h-screen w-screen bg-black text-white py-12 px-8 overflow-hidden flex flex-col">
            <h2 class="text-white text-3xl font-semibold">Good morning cheff👋</h2>
            <h5 class="text-lg mt-2">Here's the sneak peak of orders you have received</h5>
            <div class="flex-1 grid grid-cols-3 gap-4 mt-6 overflow-y-scroll">
                
                <div className="h-80 w-full bg-gray-100 text-black rounded-md">
                    <div className="flex justify-between px-6 py-4">
                        <div className="w-full">
                            <div className="font-semibold text-base">
                                Name: Blake
                            </div>
                            <div className="font-semibold text-sm">
                                Time ordered: 11:00 AM
                            </div>
                            <div className=" h-32 w-32 text-center relative">
                                <img src="chair.png" className="h-28 w-28" />
                                <h6 className="text-xs absolute top-3 left-12">A15</h6>
                            </div>
                        </div>
                        <div class=" h-40 w-full text-center overflow-y-scroll">
                            <div>
                                <h4 class="font-semibold text-base">Items ordered</h4>
                                <h3 class="text-sm mt-2">Chicken Biriyani X 2</h3>
                                <h3 class="text-sm mt-2">Mint lime X 2</h3>
                                <h3 class="text-sm mt-2">Al Faham X 2</h3>
                                <h3 class="text-sm mt-2">Black Tea X 2</h3>
                                <h3 class="text-sm mt-2">Boost X 5</h3>
                                <h3 class="text-sm mt-2">Al Faham X 2</h3>
                                <h3 class="text-sm mt-2">Black Tea X 2</h3>
                                <h3 class="text-sm mt-2">Boost X 5</h3>
                            </div>
                        </div>

                    </div>
                    <div className="px-6 ">
                        <h5 className="font-semibold text-base">Order status</h5>
                        <div className="w-full h-14 bg-green-100 mt-1 grid grid-cols-3 gap-2 p-2">
                            <button type="button" className=" text-white bg-black font-medium rounded-md text-sm">Accepted</button>
                            <button type="button" className=" text-white bg-black font-medium rounded-md text-sm">Prepared</button>
                            <button type="button" className=" text-white bg-black font-medium rounded-md text-sm">Delivered</button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="h-80 w-full bg-gray-100 text-black rounded-md">
                        <div className="flex justify-between px-6 py-4">
                            <div className="w-full">
                                <div className="font-semibold text-base">
                                    Name: Blake
                                </div>
                                <div className="font-semibold text-sm">
                                    Time ordered: 11:00 AM
                                </div>
                                <div className=" h-32 w-32 text-center relative">
                                    <img src="chair.png" className="h-28 w-28" />
                                    <h6 className="text-xs absolute top-3 left-12">A15</h6>
                                </div>
                            </div>
                            <div class=" h-40 w-full text-center overflow-y-scroll">
                                <div>
                                    <h4 class="font-semibold text-base">Items ordered</h4>
                                    <h3 class="text-sm mt-2">Chicken Biriyani X 2</h3>
                                    <h3 class="text-sm mt-2">Mint lime X 2</h3>
                                    <h3 class="text-sm mt-2">Al Faham X 2</h3>
                                    <h3 class="text-sm mt-2">Black Tea X 2</h3>
                                    <h3 class="text-sm mt-2">Boost X 5</h3>
                                    <h3 class="text-sm mt-2">Al Faham X 2</h3>
                                    <h3 class="text-sm mt-2">Black Tea X 2</h3>
                                    <h3 class="text-sm mt-2">Boost X 5</h3>
                                </div>
                            </div>

                        </div>
                        <div className="px-6 ">
                            <h5 className="font-semibold text-base">Order status</h5>
                            <div className="w-full h-14 bg-green-100 mt-1 grid grid-cols-3 gap-2 p-2">
                                <button type="button" className=" text-white bg-black font-medium rounded-md text-sm">Accepted</button>
                                <button type="button" className=" text-white bg-black font-medium rounded-md text-sm">Prepared</button>
                                <button type="button" className=" text-white bg-black font-medium rounded-md text-sm">Delivered</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <div className="h-80 w-full bg-gray-100 text-black rounded-md">
                        <div className="flex justify-between px-6 py-4">
                            <div className="w-full">
                                <div className="font-semibold text-base">
                                    Name: Blake
                                </div>
                                <div className="font-semibold text-sm">
                                    Time ordered: 11:00 AM
                                </div>
                                <div className=" h-32 w-32 text-center relative">
                                    <img src="chair.png" className="h-28 w-28" />
                                    <h6 className="text-xs absolute top-3 left-12">A15</h6>
                                </div>
                            </div>
                            <div class=" h-40 w-full text-center overflow-y-scroll">
                                <div>
                                    <h4 class="font-semibold text-base">Items ordered</h4>
                                    <h3 class="text-sm mt-2">Chicken Biriyani X 2</h3>
                                    <h3 class="text-sm mt-2">Mint lime X 2</h3>
                                    <h3 class="text-sm mt-2">Al Faham X 2</h3>
                                    <h3 class="text-sm mt-2">Black Tea X 2</h3>
                                    <h3 class="text-sm mt-2">Boost X 5</h3>
                                    <h3 class="text-sm mt-2">Al Faham X 2</h3>
                                    <h3 class="text-sm mt-2">Black Tea X 2</h3>
                                    <h3 class="text-sm mt-2">Boost X 5</h3>
                                </div>
                            </div>

                        </div>
                        <div className="px-6 ">
                            <h5 className="font-semibold text-base">Order status</h5>
                            <div className="w-full h-14 bg-green-100 mt-1 grid grid-cols-3 gap-2 p-2">
                                <button type="button" className=" text-white bg-black font-medium rounded-md text-sm">Accepted</button>
                                <button type="button" className=" text-white bg-black font-medium rounded-md text-sm">Prepared</button>
                                <button type="button" className=" text-white bg-black font-medium rounded-md text-sm">Delivered</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="h-80 w-full bg-gray-100 text-black rounded-md">
                        <div className="flex justify-between px-6 py-4">
                            <div className="w-full">
                                <div className="font-semibold text-base">
                                    Name: Blake
                                </div>
                                <div className="font-semibold text-sm">
                                    Time ordered: 11:00 AM
                                </div>
                                <div className=" h-32 w-32 text-center relative">
                                    <img src="chair.png" className="h-28 w-28" />
                                    <h6 className="text-xs absolute top-3 left-12">A15</h6>
                                </div>
                            </div>
                            <div class=" h-40 w-full text-center overflow-y-scroll">
                                <div>
                                    <h4 class="font-semibold text-base">Items ordered</h4>
                                    <h3 class="text-sm mt-2">Chicken Biriyani X 2</h3>
                                    <h3 class="text-sm mt-2">Mint lime X 2</h3>
                                    <h3 class="text-sm mt-2">Al Faham X 2</h3>
                                    <h3 class="text-sm mt-2">Black Tea X 2</h3>
                                    <h3 class="text-sm mt-2">Boost X 5</h3>
                                    <h3 class="text-sm mt-2">Al Faham X 2</h3>
                                    <h3 class="text-sm mt-2">Black Tea X 2</h3>
                                    <h3 class="text-sm mt-2">Boost X 5</h3>
                                </div>
                            </div>

                        </div>
                        <div className="px-6 ">
                            <h5 className="font-semibold text-base">Order status</h5>
                            <div className="w-full h-14 bg-green-100 mt-1 grid grid-cols-3 gap-2 p-2">
                                <button type="button" className=" text-white bg-black font-medium rounded-md text-sm">Accepted</button>
                                <button type="button" className=" text-white bg-black font-medium rounded-md text-sm">Prepared</button>
                                <button type="button" className=" text-white bg-black font-medium rounded-md text-sm">Delivered</button>
                            </div>
                        </div>
                    </div>

                </div>
                

            </div>
                
        </div>

    )
}

export default OrderUpdationScreen