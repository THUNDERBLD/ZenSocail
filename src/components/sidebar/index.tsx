import * as React from 'react';
import homeIcon from '@/assets/icons/home.svg';
import addIcon from '@/assets/icons/add.svg';
import sendIcon from '@/assets/icons/send.svg';
import settingTcon from '@/assets/icons/setting.svg';
import logoutIcon from '@/assets/icons/logout.svg';
import myPhotoIcon from '@/assets/icons/myphotos.svg';
import notificationIcon from '@/assets/icons/notification.svg';
import profileIcon from '@/assets/icons/profile.svg';
import { Link, useLocation } from 'react-router-dom';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';
import { UseUserAuth } from '@/context/userAuthContext';

interface ISidebarProps {
}

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: homeIcon,
  },
  {
    name: "Profile",
    link: "/profile",
    icon: profileIcon,
  },
  {
    name: "Add",
    link: "/post",
    icon: addIcon,
  },
  {
    name: "Message",
    link: "/message",
    icon: sendIcon,
  },
  {
    name: "My Photos",
    link: "/my-photos",
    icon: myPhotoIcon,
  },
  {
    name: "Notifications",
    link: "/notifications",
    icon: notificationIcon,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: settingTcon,
  },
]

const Sidebar: React.FunctionComponent<ISidebarProps> = () => {
  const { pathname } = useLocation();
  const { logOut } = UseUserAuth();

  return (
    <nav className='flex flex-col max-w-sm w-full h-screen bg-gray-900 text-white pl-4'>
      <div className='text-center text-xl font-bold mb-8'>
        ZenSocial
      </div>

      <div className='flex flex-col space-y-4'>
        {navItems.map((item) => (
          <div key={item.name} className={
            cn(buttonVariants({ variant: 'default' }),   // cn function takes multiple classNames and combines them
              pathname === item.link ? 'bg-white text-white hover:bg-white rounded-none' : 'hover:bg-gray-950 hover:text-white bg-transparent rounded-none',
              "justify-start")}>
            <Link to={item.link} className='flex items-center space-x-2 rounded' style={{filter: `${pathname === item.link ? "invert(0)" : "invert(1)"}`}}>
              <span>
                <img src={item.icon} alt={item.name} className='w-6 h-6 mr-2' />
              </span>
              <span className='text-black'>{item.name}</span>
            </Link>
          </div>
        ))}
        
            <Link to={"/login"} onClick={logOut} className='flex items-center space-x-2 rounded-none ml-4 hover:bg-white px-1 py-2' style={{filter: `${pathname === "/logout" ? "invert(0)" : "invert(1)"}`}}>
              <span>
                <img src={logoutIcon} alt={"logout"} className='w-6 h-6 mr-2' />
              </span>
              <span className='text-black'>Logout</span>
            </Link>
          
      </div>
    </nav>
  );
};

export default Sidebar;
