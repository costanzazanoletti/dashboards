import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import StarToggle from './StarToggle';

describe('StarToggle component', () => {
  beforeEach(() => {
    // Mock localStorage methods
    Storage.prototype.getItem = jest.fn();
    Storage.prototype.setItem = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('displays a full star icon', () => {
    Storage.prototype.getItem.mockReturnValue('true');
    const { getByTitle } = render(<StarToggle id="ZBjCfSaLSqD" />);
    expect(getByTitle('full-star')).toBeInTheDocument();
  });

  it('displays an empty star icon', () => {
    Storage.prototype.getItem.mockReturnValue('false');
    const { getByTitle } = render(<StarToggle id="OiyMNoXzSdY" />);
    expect(getByTitle('empty-star')).toBeInTheDocument();
  });

  it('toggles the star on button click', () => {
    const { getByRole } = render(<StarToggle id="ILRTXgXvurM" />);
    const button = getByRole('button');
    fireEvent.click(button);

    expect(Storage.prototype.setItem).toHaveBeenCalledWith(
      'dashboard-ILRTXgXvurM-starred',
      true
    );

    fireEvent.click(button);

    expect(Storage.prototype.setItem).toHaveBeenCalledWith(
      'dashboard-ILRTXgXvurM-starred',
      false
    );
  });
});
