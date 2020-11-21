import React from 'react'
import './Header.css';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon  from '@material-ui/icons/HelpOutline';
import { useStateValue } from "./StateProvider";

function Header() {
    const [{ user }] = useStateValue();

    return(
     <div className="header"> 
        <div className='header__left'>
            <Avatar 
             className="header__avatar"
             alt={user?.displayName}
             src={user?.photoURL}
              />
        
        {/*Avatare for Logged in user  */}
             <AccessTimeIcon />

        {/*Time Icon*/}       
        </div>
        <div className='header__search'>
            {/*Search Icon*/}
            <SearchIcon />
            <input placeholder="Search Frog Talk" />
            {/*input*/}
        </div>
        <div className='header__right'/>
            <HelpOutlineIcon />
            {/* help icon*/}
        </div>
        
    );
    
}

export default Header
