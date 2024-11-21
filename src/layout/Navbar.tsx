import React from 'react';
import { Bell, Mail, Menu, User } from 'lucide-react';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={onMenuClick}
              className="p-2 rounded-md md:hidden"
            >
              <Menu className="h-6 w-6 text-gray-500" />
            </button>
            <span className="text-2xl font-bold text-primary-600 ml-2">TweetApp</span>
          </div>
          <NavActions />
        </div>
      </div>
    </nav>
  );
};

const NavActions = () => {
  return (
    <div className="flex items-center space-x-2">
      <NavIconButton icon={Bell} />
      <NavIconButton icon={Mail} />
      <NavIconButton icon={User} />
    </div>
  );
};

interface NavIconButtonProps {
  icon: React.ElementType;
  onClick?: () => void;
}

const NavIconButton: React.FC<NavIconButtonProps> = ({ icon: Icon, onClick }) => (
  <button
    onClick={onClick}
    className="p-2 rounded-full hover:bg-gray-100"
  >
    <Icon className="h-6 w-6 text-gray-500" />
  </button>
);

export default Navbar;