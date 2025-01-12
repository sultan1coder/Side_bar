import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 p-4 bg-gray-100">
      <nav>
        <ul className="space-y-4">
          <li><Link to="/admin" className="text-xl font-bold text-black hover:underline-none">Admin</Link></li>
          <li><Link to="/users" className="text-xl font-bold text-black hover:underline-none">Users</Link></li>
          <li><Link to="/dashboard" className="text-xl font-bold text-black hover:underline-none">Dashboard</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;