import React from 'react'

const WaitingForDriver=(props)=>{
    return (
    <div>
            <h5
                className='p-1 text-center w-[94%] absolute top-0'
                onClick={() => {
                    props.waitingForDriver(false);
                }}
            >
                <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
            </h5>

                <div className='flex items-center justify-between'>
                     <img
                    className='h-18'
                    src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
                    alt=""
                />
                <div className='text-right'>
                    <h2 className='text-lg font-medium capitalize'>{props.ride?.captain.fullname.firstname}</h2>
                    <h4 className='text-xl font-semibold -mt-1 -mb-1'>{props.ride?.captain.vehicle.plate}</h4>
                    <p className='text-sm text-gray-600'>Scorpio</p>
                     <h1 className='text-lg font-semibold'>OTP -  {props.ride?.otp} </h1>
        
                </div>
                </div>

            <div className='flex flex-col gap-2 justify-between items-center'>
              

                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹{props.ride?.fare}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default WaitingForDriver