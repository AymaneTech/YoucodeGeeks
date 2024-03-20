import { Aside, SidebarItem } from "../components/Aside";
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

const Sidebar = () => {
  return (

    <Aside>
      <SidebarItem icon={<HomeIcon size={20} />} text="Home" active />
      <SidebarItem icon={<Bug size={20} />} text="Bugs" />
      <SidebarItem icon={<Newspaper size={20} />} text="New posts" />
      <SidebarItem icon={<Anchor size={20} />} text="Community" />
      <SidebarItem icon={<Braces size={20} />} text="Codes" />
      <SidebarItem icon={<UserCircle size={20} />} text="User Profile" alert />
      <SidebarItem icon={<Settings size={20} />} text="Settings" />
      <SidebarItem icon={<LogOut size={20} />} text="Log out" />
    </Aside>
  )
}

export default Sidebar
