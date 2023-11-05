import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filter from './Filter';
import { TypeContext } from '../App';

describe('Filter Component', () => {
  it('displays the select element with options and selects the correct value', () => {
    const selectedType = 'MAP';

    // Mock the context value
    const contextValue = {
      selectedType,
      setSelectedType: jest.fn(),
    };

    // Render the component within the context provider
    const { getByTestId, getByDisplayValue } = render(
      <TypeContext.Provider value={contextValue}>
        <Filter />
      </TypeContext.Provider>
    );

    // Verify that the select element is rendered with the correct options
    expect(getByTestId('type-filter')).toBeInTheDocument();
    expect(getByDisplayValue(selectedType)).toBeInTheDocument();

    // Simulate changing the select value
    const newType = 'VISUALIZATION';
    fireEvent.change(getByTestId('type-filter'), {
      target: { value: newType },
    });

    // Verify that the context function is called with the new type
    expect(contextValue.setSelectedType).toHaveBeenCalledWith(newType);
  });
});
