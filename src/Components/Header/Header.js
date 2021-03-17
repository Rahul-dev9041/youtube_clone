import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import './Header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon/>
                <img 
                className='header__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
                alt=''
              />
            </div>
            <div className="header__center">
            <input type='text' style={{backgroundColor:'rgb(248, 246, 246)'}}/>
            <SearchIcon className='header__searchbutton'/>
          </div>

          <div className="header__right">
            <VideoCallIcon className='header_icon'/>
            <AppsIcon className='header__icon'/>
            <NotificationsIcon className='header__icon'/>
            <Avatar
              alt='Anime'
              src='https://static.hollywoodreporter.com/sites/default/files/2018/09/coming_to_netflix_in_october_2018-_the_seven_deadly_sins-_revival_of_the_commandments-publicity_-production_still-_h_2018-768x433.jpg'
            />
          </div>
        </div>
    )
}
