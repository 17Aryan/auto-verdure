import React, { useState } from 'react';
import './styles.css';

const ParentComponent = () => {
    const handleApplyFilters = (filters) => {
      // Implement your logic here to apply filters
      console.log('Applying filters:', filters);
    };
  
    const handleClearFilters = () => {
      // Implement your logic here to clear filters
      console.log('Clearing filters');
    };
  
    return (
      <div>
        {/* <h1>Product Filters</h1> */}
        <Filter onApplyFilters={handleApplyFilters} onClearFilters={handleClearFilters} />
      </div>
    );
  };

const Filter = ({ onApplyFilters, onClearFilters }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    plantType: [],
    potType: [],
    size: [],
    lightRequirement: [],
    priceRange: [],
    color: []
  });

  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(true);

  const handleSelection = (category, value) => {
    setSelectedFilters((prev) => {
      const updatedCategory = prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value];
      return { ...prev, [category]: updatedCategory };
    });
  };

  const applyFilters = () => {
    onApplyFilters(selectedFilters);
    setIsFilterBoxOpen(false);
  };

  const clearFilters = () => {
    setSelectedFilters({
      plantType: [],
      potType: [],
      size: [],
      lightRequirement: [],
      priceRange: [],
      color: []
    });
    onClearFilters();
  };

  const getSelectedCount = () => {
    return Object.values(selectedFilters).reduce((total, category) => total + category.length, 0);
  };

  const isSelected = (category, value) => {
    return selectedFilters[category].includes(value);
  };

  return (
    <div className={`w-[462px] h-[1229px] bg-white rounded-2xl border border-zinc-500 flex-col justify-start items-start inline-flex ${isFilterBoxOpen ? '' : 'hidden'}`}>
      <div className="h-[172px] px-5 py-3 border-b border-black flex-col justify-start items-start gap-[30px] flex">
        <div className="text-violet-500 text-sm font-semibold font-['Urbanist']">Plant type</div>
        <div className="flex-col justify-start items-start gap-2.5 flex">
          {['Indoor Plants', 'Outdoor Plants', 'Seasonal Plants'].map((type) => (
            <div
              key={type}
              className={`w-[417px] justify-start items-start gap-[324px] inline-flex ${isSelected('plantType', type) ? 'bg-blue-100' : ''}`}
              onClick={() => handleSelection('plantType', type)}
            >
              <div className="text-black text-[13px] font-normal font-['Poppins'] leading-7">{type}</div>
              <div className="text-right text-black text-[13px] font-normal font-['Poppins'] leading-7">2</div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[246px] px-5 py-3 border-b border-black flex-col justify-start items-start gap-[30px] flex">
        <div className="text-violet-500 text-sm font-semibold font-['Urbanist']">Pot Type</div>
        <div className="flex-col justify-start items-start gap-2.5 flex">
          {['Hydroponics', 'Traditional', 'FRP', 'Ceramic'].map((type) => (
            <div
              key={type}
              className={`w-[417px] justify-start items-start gap-[324px] inline-flex ${isSelected('potType', type) ? 'bg-blue-100' : ''}`}
              onClick={() => handleSelection('potType', type)}
            >
              <div className="grow shrink basis-0 text-black text-[13px] font-normal font-['Poppins'] leading-7">{type}</div>
              <div className="text-right text-black text-[13px] font-normal font-['Poppins'] leading-7">2</div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[172px] px-5 py-3 border-b border-black flex-col justify-start items-start gap-[30px] flex">
        <div className="text-violet-500 text-sm font-semibold font-['Urbanist']">Size</div>
        <div className="flex-col justify-start items-start gap-2.5 flex">
          {['Small', 'Medium', 'Large'].map((size) => (
            <div
              key={size}
              className={`w-[417px] justify-start items-start gap-[324px] inline-flex ${isSelected('size', size) ? 'bg-blue-100' : ''}`}
              onClick={() => handleSelection('size', size)}
            >
              <div className="grow shrink basis-0 text-black text-[13px] font-normal font-['Poppins'] leading-7">{size}</div>
              <div className="text-right text-black text-[13px] font-normal font-['Poppins'] leading-7">2</div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[172px] px-5 py-3 border-b border-black flex-col justify-start items-start gap-[30px] flex">
        <div className="text-violet-500 text-sm font-semibold font-['Urbanist']">Light Requirement</div>
        <div className="flex-col justify-start items-start gap-2.5 flex">
          {['More', 'Medium', 'Less'].map((requirement) => (
            <div
              key={requirement}
              className={`w-[417px] justify-start items-start gap-[324px] inline-flex ${isSelected('lightRequirement', requirement) ? 'bg-blue-100' : ''}`}
              onClick={() => handleSelection('lightRequirement', requirement)}
            >
              <div className="grow shrink basis-0 text-black text-[13px] font-normal font-['Poppins'] leading-7">{requirement}</div>
              <div className="text-right text-black text-[13px] font-normal font-['Poppins'] leading-7">2</div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[135px] px-5 py-3 border-b border-black flex-col justify-start items-start gap-[30px] flex">
        <div className="text-violet-500 text-sm font-semibold font-['Urbanist']">Price Range</div>
        <div className="flex-col justify-start items-start gap-2.5 flex">
          {['RS.100 - RS.1000'].map((range) => (
            <div
              key={range}
              className={`w-[417px] justify-between items-start inline-flex ${isSelected('priceRange', range) ? 'bg-blue-100' : ''}`}
              onClick={() => handleSelection('priceRange', range)}
            >
              <div className="text-black text-[13px] font-normal font-['Poppins'] leading-7">{range}</div>
              <div className="text-right text-black text-[13px] font-normal font-['Poppins'] leading-7">2</div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[462px] h-[90px] relative">
        <div className="w-[462px] h-[90px] left-0 top-0 absolute" />
        <div className="w-[31.59px] h-4 left-[396.85px] top-[18px] absolute" />
        <div className="w-[416.59px] h-[50px] left-[31.59px] top-0 absolute text-black text-sm font-semibold font-['Poppins']">Color</div>
        <div
          className={`w-[45.41px] h-[23px] left-[31.59px] top-[50px] absolute rounded-[20px] ${isSelected('color', 'black') ? 'border-2 border-blue-500' : ''}`}
          onClick={() => handleSelection('color', 'black')}
          style={{ backgroundColor: 'black' }}
        />
        <div
          className={`w-[45.41px] h-[23px] left-[157.95px] top-[50px] absolute rounded-[20px] ${isSelected('color', 'blue') ? 'border-2 border-blue-500' : ''}`}
          onClick={() => handleSelection('color', 'blue')}
          style={{ backgroundColor: 'blue' }}
        />
        <div
          className={`w-[45.41px] h-[23px] left-[217.18px] top-[50px] absolute rounded-[20px] ${isSelected('color', 'fuchsia') ? 'border-2 border-blue-500' : ''}`}
          onClick={() => handleSelection('color', 'fuchsia')}
          style={{ backgroundColor: 'fuchsia' }}
        />
        <div
          className={`w-[45.41px] h-[23px] left-[90.82px] top-[50px] absolute rounded-[20px] ${isSelected('color', 'red') ? 'border-2 border-blue-500' : ''}`}
          onClick={() => handleSelection('color', 'red')}
          style={{ backgroundColor: 'red' }}
        />
      </div>
      {isFilterBoxOpen && (
      <div className="w-[462px] h-[107px] relative">
      <div className="w-[394.87px] h-[37px] py-2 left-[31.59px] top-[33px] absolute bg-violet-500 rounded-[50px] justify-center items-center inline-flex">
          <button className='button_adjust' onClick={applyFilters}>Apply Filters({getSelectedCount()})</button>
        </div>
        <div className="w-[394.87px] h-[37px] py-2 left-[31.59px] top-[90px] absolute bg-gray-500 rounded-[50px] justify-center items-center inline-flex">
          <button className='button_adjust' onClick={clearFilters}>Clear Filters</button>
        </div>
      </div>
      )}
    </div>
  );
};

export default ParentComponent;
