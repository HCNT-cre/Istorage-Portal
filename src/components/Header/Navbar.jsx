import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';


const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(null);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const MENU = [
        { title: 'Profile', link: '/profile', onClick: handleClick },
        { title: 'Profile', link: '/profile', onClick: handleClick },
        { title: 'Profile', link: '/profile', onClick: handleClick },
        { title: 'Profile', link: '/profile', onClick: handleClick },
    ]
    return (
        <div className='flex justify-around'>
            {
                MENU.map((item, index) => {
                    return (
                        <div>
                            <div
                                aria-controls={open ? 'demo-positioned-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={item.onClick}
                                className='cursor-pointer'
                            >
                                {item.title}
                            </div>

                            <Menu
                                aria-labelledby="demo-positioned-button"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >   
                            </Menu>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Navbar;
