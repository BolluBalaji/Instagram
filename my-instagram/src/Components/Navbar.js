import React from 'react';
import './Css/Navbar.css';
import HomeIcon from '@material-ui/icons/Home';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className="main">
            <div className="navbar">
                <div className="navbar_logo">
                    <span>Instagram</span>
                </div>
                <div className="navbar_search">
                    <input type="text" placeholder="Search"/>
                </div>
                <div className="navbar_icons">
                    <span><HomeIcon /></span>
                    <span><SendOutlinedIcon className="explore"/></span>
                    <span><ExploreOutlinedIcon /></span>
                    <span><FavoriteBorderOutlinedIcon /></span>
                    <div className="profile">
                        <span><AccountCircleOutlinedIcon /></span>
                        <ul className="profile_menu">
                            <li>
                                <AccountCircleOutlinedIcon />
                                <span class="profile_txt">Profile</span>
                            </li>
                            <li>
                                <BookmarkBorderOutlinedIcon />
                                <span class="profile_txt">Saved</span>
                            </li>
                            <li>
                                <SettingsIcon />
                                <span class="profile_txt">Settings</span>
                            </li>
                            <hr />
                            <li>
                                <ExitToAppIcon />
                                <span class="profile_txt">Logout</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
