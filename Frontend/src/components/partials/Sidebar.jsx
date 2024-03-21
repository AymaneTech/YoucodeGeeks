import {
  UserCircle,
  HomeIcon,
  Newspaper,
  Bug,
  Anchor,
  Settings,
  LogOut,
  Braces
} from 'lucide-react';
import { Aside, SidebarItem } from './Aside';

const Sidebar = () => {
  return (

    <Aside>
      <SidebarItem item={{ to: "home", icon: <HomeIcon size={20} />, text: "Home", active: true }} />
      <SidebarItem item={{ to: "/", icon: <Bug size={20} />, text: "Bugs" }} />
      <SidebarItem item={{ to: "/", icon: <Newspaper size={20} />, text: "New posts" }} />
      <SidebarItem item={{ to: "/", icon: <Anchor size={20} />, text: "Community" }} />
      <SidebarItem item={{ to: "/", icon: <Braces size={20} />, text: "Codes" }} />
      <SidebarItem item={{ to: "/", icon: <UserCircle size={20} />, text: "User Profile", alert: true }} />
      <SidebarItem item={{ to: "/", icon: <Settings size={20} />, text: "Settings" }} />
      <SidebarItem item={{ to: "/", icon: <LogOut size={20} />, text: "Log out" }} />

    </Aside>
  )
}

export default Sidebar
