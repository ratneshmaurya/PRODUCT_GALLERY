import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import StarRatings from 'react-star-ratings'; 

const Products = ({image,title,description,rating,price,oneMonthPrice,threeMonthPrice}) => {
    return (
        // as in a single product card, every items are arranged in flex-col way-----------------------
        <div className=" flex flex-col p-10 space-y-6 pb-24">

            {/* --------first of all the image, title, and description of product------------------- */}
            <img className='h-required' src={image} alt="imag" />
            <p className='font-bold text-4xl md:text-5xl  text-white '>{title}</p>
            <p className='text-sm md:text-lg text-white font-Belgrano'>{description}</p>

            {/* ------------for rating and review section--------------------- */}
            <div className='flex space-x-3 text-sm md:text-lg'>
                <div className='flex text-white bg-green-500 pl-2 pr-2 rounded-lg'>
                    <StarRatings
                        rating={rating}
                        starSpacing="0px"
                        starDimension='11px'
                        starEmptyColor='#28622B'
                        starRatedColor='#DADADA'
                    />
                </div>
                <p className='text-white font-bold'>{rating}</p>
                <p className='text-white text-gray-500 ml-3 font-DMSans hover:cursor-pointer'>Click to read review <ChevronRightOutlinedIcon className='text-gray-500'/> </p>
            </div>

            {/*-------------------- for main heading price section-------------------------------------- */}
            <div className='flex space-x-6 text-4xl md:text-5xl '>
                <p className='text-white font-bold font-Montserrat'>₹{price-400}</p>
                <p className='text-gray-500 line-through font-bold font-Montserrat'>₹{price}</p>
            </div>
            
            {/*------------------------ one month price card section ------------------------*/}
            <div className='group flex'>
                <div className='flex bg-gray-800 w-92percent md:w-94percent p-5 rounded-lg hover:bg-gray-600 border-2 border-gray-800 hover:cursor-pointer hover:border-white'>

                    {/* left section for card */}
                    <div className='flex flex-col space-y-2'>

                        <p className='text-white font-bold text-xs md:text-sm bg-blue-600 rounded-xl w-fit font-Poppins'>
                        <StarOutlinedIcon className='scale-50'/> MOST POPULAR <StarOutlinedIcon className='scale-50'/>
                        </p>

                        <p className='text-white font-bold text-base md:text-lg font-DMSans'>1 Months Pack (4 tubes)</p>

                        <p className='text-base md:text-lg text-gray-500 font-Belgrano'>Savings: ₹200</p>

                        <div className='flex space-x-3 text-base md:text-lg'>
                        <p className='text-green-400 font-DMSans'>38% Saved</p>
                        <p className='text-yellow-500 font-DMSans'>Best Results</p>
                        </div>
                        
                    </div>

                    {/* this div is just for taking the middle free space */}
                    <div className='flex-1'>
                        
                    </div>

                    {/* right section for card */}
                    <div className='flex flex-col mt-12 text-lg md:text-xl'>
                        <p className='text-white font-bold font-DMSerifDisplay'>₹{oneMonthPrice - 200}</p>
                        <p className='text-gray-500 font-bold line-through font-DMSerifDisplay'>₹{oneMonthPrice}</p>

                    </div>
                </div>

                {/* --------the tick will only be shown when user hovers the price card div----------------- */}
                <div className='hidden group-hover:inline'>
                    <DoneOutlinedIcon className='text-white md:scale-150 mt-12 ml-1'/>
                </div>
            </div>
           


            {/* ------------three month price card section ------------------------------*/}
            <div className='flex group'>
                <div className='flex bg-gray-800 w-92percent md:w-94percent p-5 rounded-lg hover:bg-gray-600 border-2 border-gray-800 hover:cursor-pointer hover:border-white'>

                    {/* left section for card */}
                    <div className='flex flex-col space-y-2'>
                        <p className='text-white font-bold text-base md:text-lg font-DMSans'>3 Months Pack (12 tubes)</p>

                        <p className='text-base md:text-lg text-gray-500 font-Belgrano'>Savings: ₹100</p>

                        <div className='flex space-x-3 text-base md:text-lg'>
                        <p className='text-green-400 font-DMSans'>12% Saved</p>
                        </div>
                        
                    </div>

                    {/* this div is just for taking the middle free space */}
                    <div className='flex-1'></div>

                    {/* right section for card */}
                    <div className='flex flex-col mt-5 text-lg md:text-xl'>
                        <p className='text-white font-bold font-DMSerifDisplay'>₹{threeMonthPrice - 100}</p>
                        <p className='text-gray-500 font-bold line-through font-DMSerifDisplay'>₹{threeMonthPrice}</p>

                    </div>
                </div>

                 {/* --------the tick will only be shown when user hovers the price card div----------------- */}
                <div className='hidden group-hover:inline'>
                    <DoneOutlinedIcon className='text-white md:scale-150 mt-12 ml-1'/>
                </div>

            </div>
            

            {/*--------------------------- button at the bottom--------------------- */}
            <button className="w-full p-2 text-white bg-sky-900 hover:bg-sky-700 font-Montserrat">
            <ShoppingCartOutlinedIcon className='mr-2'/>
            <span className='text-base md:text-lg font-extrabold'>ADD TO CART</span></button>

        </div>
    )
}

export default Products
