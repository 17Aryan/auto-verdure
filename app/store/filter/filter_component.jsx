import React, { useState } from 'react';
import Filter from './page';
import ProductList from './ProductList';

const ParentComponent = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    plantType: [],
    potType: [],
    size: [],
    lightRequirement: [],
    priceRange: [],
    color: []
  });

  const handleApplyFilters = (filters) => {
    setSelectedFilters(filters);
    setIsFilterVisible(false);
  };

  const handleClearFilters = () => {
    setSelectedFilters({
      plantType: [],
      potType: [],
      size: [],
      lightRequirement: [],
      priceRange: [],
      color: []
    });
  };

  return (
    <div>
      <button onClick={() => setIsFilterVisible(!isFilterVisible)}>
        {isFilterVisible ? 'Close Filters' : 'Open Filters'}
      </button>
      {isFilterVisible && (
        <Filter
          selectedFilters={selectedFilters}
          onApplyFilters={handleApplyFilters}
          onClearFilters={handleClearFilters}
        />
      )}
      <ProductList filters={selectedFilters} />
    </div>
  );
};

export default ParentComponent;
