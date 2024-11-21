import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, LogOut } from 'lucide-react';
import { SidebarLinkProps, SidebarProps } from '../types';


export const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon: Icon, text }) => {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) => `
        flex items-center space-x-3 w-full p-3 rounded-lg transition-colors duration-200
        ${isActive
          ? 'bg-primary-50 text-primary-600'
          : 'hover:bg-gray-50'
        }
      `}
    >
      <Icon className="h-6 w-6" />
      <span className="hidden lg:inline">{text}</span>
    </NavLink>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onLogout }) => {
  return (
    <aside
      className={`
        fixed md:fixed left-0 bg-white border-r border-gray-200 z-40
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:w-20 lg:w-64
        h-full md:h-[calc(100vh-4rem)] top-0 md:top-16
      `}
    >
      <div className="px-4 py-6 space-y-4">
        <SidebarLink to="/dashboard" icon={Home} text="Home" />
        <button
          onClick={onLogout}
          className="flex items-center space-x-3 w-full p-3 rounded-lg text-red-600 hover:bg-red-50"
        >
          <LogOut className="h-6 w-6" />
          <span className="hidden lg:inline">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;