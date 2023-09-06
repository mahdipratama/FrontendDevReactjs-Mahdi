/* eslint-disable react/prop-types */
import { useState } from 'react';

function CurrentOpenFilter({ onSelectOpenStatus }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = event => {
    const openStatus = event.target.checked;
    setIsOpen(openStatus);
    onSelectOpenStatus(openStatus);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isOpen} onChange={handleChange} /> Show
        Open Restaurants
      </label>
    </div>
  );
}

export default CurrentOpenFilter;
