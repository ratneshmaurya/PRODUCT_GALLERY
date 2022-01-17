import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton} from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = () => {
    return (
        <div className='header'>
            <div className='flex ml-10 mr-10 pt-4'>
                <div>
                    <IconButton>
                        <MenuIcon className='text-white scale-150'/>
                    </IconButton>    
                </div>

                {/* to have invisible div that stretches the whole middle width space */}
                <div className='flex-1'></div>

                <div>
                    <IconButton>
                        <ShoppingCartOutlinedIcon className='text-white scale-150'/>
                    </IconButton>    
                </div>
            </div>
            
            <br/>
            <hr className='h-1 b-0 text-white ml-10 mr-10'/>
        </div>
    )
}

export default Header
