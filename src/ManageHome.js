import React from 'react';
import './css/Manage.css';

function ManageHome() {
    return (
        <div className='manage-home'>
            <div className='d-flex align-items-center justify-content-center'>
                <img src='/images/web_design/uncle_roger.png'></img>
                <h1 className='manage-home-title'>Welcome to
                    <span className='logo-navbar font-milonga text-center'> BAOS </span>
                    Management!</h1>
            </div>
            <img src='/images/web_design/broken_robot.png'></img>
        </div>
    )
}

export default ManageHome;