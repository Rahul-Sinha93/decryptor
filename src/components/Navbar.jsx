import React, { useState, useEffect} from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../Images/cryptocurrency.png';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(()=>{
        const handlerResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handlerResize);

        handlerResize();

        return () => window.addEventListener('resize', handlerResize);
    },[]);

    useEffect(() => {
        if(screenSize < 768) {
            setActiveMenu(false)
        }else {
            setActiveMenu(true)
        }
    }, [screenSize])


    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Dycryptor</Link>
                </Typography.Title>
                <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu) }>
                    < MenuOutlined />
                </Button>
            </div>

            {activeMenu && (
                <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined/>}>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined/>}>
                    <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined/>}>
                    <Link to='/news'>News</Link>
                </Menu.Item>
            </Menu>
            )}
            
        </div>
    )
}

export default Navbar
