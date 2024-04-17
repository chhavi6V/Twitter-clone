// LeftSideBarData.js
import { CiUser, CiHashtag, CiBookmark, CiSearch, CiMail, CiViewList, CiCircleMore } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineGroup } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { IoNotifications } from 'react-icons/io5';
import { BsSlashSquare } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";

export const sidebarData = [
    { icon: IoMdHome, label: 'Home' },
    { icon: CiSearch, label: 'Explore' },
    { icon: IoIosNotificationsOutline, label: 'Notifications' },
    { icon: CiMail, label: 'Messages' },
    { icon: BsSlashSquare, label: 'Grok' },
    { icon: CiViewList, label: 'Lists' },
    { icon: CiBookmark, label: 'Bookmarks' },
    { icon: MdOutlineGroup, label: 'Communities' },
    { icon: FaXTwitter, label: 'Premium' },
    { icon: CiUser, label: 'Profile' },
    { icon: CiCircleMore, label: 'More' }
];
