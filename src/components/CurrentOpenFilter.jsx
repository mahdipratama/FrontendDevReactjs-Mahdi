/* eslint-disable react/prop-types */

function CurrentOpenFilter({ setIsOpen, isOpen }) {
  const handleChange = event => {
    const openStatus = event.target.checked;

    setIsOpen(openStatus);
  };

  return (
    <div className="">
      <label className="text-sm sm:text-base">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={handleChange}
          className="text-sm sm:text-base"
        />{' '}
        Open Now
      </label>
    </div>
  );
}

export default CurrentOpenFilter;
