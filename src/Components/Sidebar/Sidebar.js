import React from 'react';
import SideBarRow from './../Sidebarrow/Sidebarrow';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import { YoutubeSearchedFor } from '@material-ui/icons';


const SideBar = () => {
    return (
        <div className='sidebar'>
            <SideBarRow selected Icon={HomeIcon} title='Home'/>
            <SideBarRow Icon={WhatshotIcon} title='Trending' />
            <SideBarRow Icon={SubscriptionsIcon} title='Subscription' />
            <hr />
            <SideBarRow Icon={VideoLibraryIcon} title='Library' />
            <SideBarRow Icon={HistoryIcon} title='History' />
            <SideBarRow Icon={OndemandVideoIcon} title='Your videos' />
            <SideBarRow Icon={WatchLaterIcon} title='Watch later' />
            <SideBarRow Icon={ThumbUpIcon} title='Liked videos' />
            <hr />
            <h3>Subscription</h3>
            <SideBarRow Icon={AccountCircleIcon} title='Florin Pop' />
            <SideBarRow Icon={AccountCircleIcon} title='Trap Nation' />
            <SideBarRow Icon={AccountCircleIcon} title='Stock Updates' />
            <SideBarRow Icon={AccountCircleIcon} title='Abhishek Upmanayu' />
            <SideBarRow Icon={AccountCircleIcon} title='Xpert Nifty' />
            <hr />
            <h3>More from Subscription</h3>
            <SideBarRow Icon={YouTubeIcon} title='Youtube Premium' />
            <SideBarRow Icon={LocalMoviesIcon} title='Movies' />
            <SideBarRow Icon={SettingsInputAntennaIcon} title='Connect' />
            <SideBarRow Icon={SportsEsportsIcon} title='Sports' />
            <SideBarRow Icon={EmojiObjectsIcon} title='Learning' />
            <SideBarRow Icon={YoutubeSearchedFor} title='Yotube search' />
        </div>
    )
}

export default SideBar;