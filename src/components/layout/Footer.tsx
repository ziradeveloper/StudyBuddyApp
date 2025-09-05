// Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-4 text-center text-sm text-gray-500 border-t border-gray-200">
      © {new Date().getFullYear()} Study Buddy. All rights reserved.
    </footer>
  );
};

export default Footer;