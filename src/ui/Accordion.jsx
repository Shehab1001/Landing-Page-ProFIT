import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <button
        onClick={handleToggle}
        className={`flex justify-between items-center w-full px-5 py-3 text-lg text-left transition-all duration-300 ease-in-out ${
          isOpen ? 'bg-gray-200 font-bold' : 'bg-white font-normal'
        }`}
      >
        <span>{title}</span>
        <ChevronDownIcon
          className={`w-5 h-5 transform transition-transform duration-150 ${
            isOpen ? 'rotate-180' : ''
          } hidden sm:block`} // Hide on mobile devices
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-5 py-3">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
