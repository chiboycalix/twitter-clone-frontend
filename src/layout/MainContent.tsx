import React from 'react';
import { Outlet } from 'react-router-dom';

const MainContent: React.FC = () => {
  return (
    <main className="md:ml-20 lg:ml-64 pt-16">
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </main>
  );
};

export default MainContent;