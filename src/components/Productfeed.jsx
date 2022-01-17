import React from 'react'
import Products from './Products'
import { productsDetails } from './productsDetails' //taking all products from my productsDetails page and storing in a variable productsDetails

//we are fetching details of each products from productsDetails.jsx JSON and pushing to Products components for rendering
const Productfeed = ()=> {
    return (
        
        // making responsive, and showing the number of products in a row based on screen size 
            <div className=' grid md:grid-cols-2 lg:grid-cols-3'>
                {/* mapping through each productItems and rendering on screen by using Products component */}
                {productsDetails.map(({id,image,title,description,rating,price,oneMonthPrice,threeMonthPrice})=>(

                    <Products
                        key={id} 
                        image={image}
                        title={title}
                        description={description}
                        rating= {rating}
                        price={price}
                        oneMonthPrice={oneMonthPrice}
                        threeMonthPrice={threeMonthPrice}
                    />
                ))}
            </div>
    )
}

export default Productfeed
