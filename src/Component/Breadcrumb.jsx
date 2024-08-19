// Breadcrumbs.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // or 'react-router' if you use that

const Breadcrumbs = ({ paths }) => {
  return (
    <nav className='p-8'>
      <ol className="flex items-center space-x-2 text-sm text-gray-700">
        {paths.map((path, index) => (
          <li key={index} className="flex items-center">
            <Link
              to={path.href}
              className={`text-gray-600 hover:text-green-600 ${index === paths.length - 1 ? 'font-bold' : ''}`}
            >
              {path.label}
            </Link>
            {index < paths.length - 1 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
