import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 w-64 p-4">
      <nav>
        <ul className="space-y-4">
          <li><Link to="/admin" className="text-black hover:underline">Admin</Link></li>
          <li><Link to="/users" className="text-black hover:underline">Users</Link></li>
          <li><Link to="/dashboard" className="text-black hover:underline">Dashboard</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;