import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <aside className={`w-64 p-4 bg-gray-100 ${props.isOpen?"translate-x-0":"translate-x-[-300px]"} transition-all ease-in-out`}>
      <nav>
        <h1>{props.isOpen ? "opened" : "closed"}</h1>
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