import React from 'react'
import './css/Sidebar.css'

function Sidebar() {
    const SidebarData = [
        {
            icon: <i className="fa-solid fa-house-user"></i>,
            title: "Home",
            link: "/managehome"
        },
        {
            icon: <i className="fa-solid fa-people-roof"></i>,
            title: "Staff",
            link: "/managestaff"
        },
        {
            icon: <i className="fa-solid fa-list"></i>,
            title: "Order",
            link: "/manageorder"
        }
    ]

    return (
        <div className='sidebar'>
            <div className='sidebar-logo'>
                <h1 className='logo-navbar font-milonga text-center'>BAOS</h1>
            </div>
            <ul className='sidebar-list'>
                {SidebarData.map((value, key) => {
                    return (
                        <li className={window.location.pathname == value.link ? 'd-flex active' : 'd-flex'} key={key} onClick={() => window.location.pathname = value.link}>
                            <div className='sidebar-item-icon'>{value.icon}</div>
                            <div className='sidebar-item-title'>{value.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar