import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from './Dashboard';

// Mock the API function
import { getDashboardDetail } from '../api';

jest.mock('../api');

describe('Dashboard Component', () => {
  const mockItem = {
    displayName: 'Cases Malaria',
    id: 'JW7RlN5xafN',
    starred: false,
  };

  it('renders correctly when not expanded', () => {
    const { getByText } = render(
      <Dashboard
        item={mockItem}
        expanded={false}
        handleClick={() => {}}
        selectedType=""
      />
    );

    expect(getByText(mockItem.displayName)).toBeInTheDocument();
  });

  it('renders correctly when expanded', async () => {
    const mockData = [
      {
        map: {
          id: 'ZBjCfSaLSqD',
          name: 'Mock name',
        },
        id: 'OiyMNoXzSdY',
        type: 'MAP',
      },
      {
        text: 'Mock text',
        type: 'TEXT',
        id: 'ILRTXgXvurM',
      },
    ];

    getDashboardDetail.mockResolvedValue(mockData);

    const { getByText, getByTestId } = render(
      <Dashboard
        item={mockItem}
        expanded={true}
        handleClick={() => {}}
        selectedType=""
      />
    );

    expect(getByText(mockItem.displayName)).toBeInTheDocument();

    // Simulate an API request and wait for it to resolve
    await act(async () => {
      fireEvent.click(getByTestId('dashboard-card'));
    });

    expect(getByText('Mock name')).toBeInTheDocument();
    expect(getByText('Mock text')).toBeInTheDocument();
  });

  it('calls handleClick when card is clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Dashboard
        item={mockItem}
        expanded={false}
        handleClick={handleClick}
        selectedType=""
      />
    );

    fireEvent.click(getByTestId('dashboard-card'));

    expect(handleClick).toHaveBeenCalled();
  });

  it('filters dashboard items by selected type', async () => {
    const mockData = [
      {
        map: {
          id: 'ZBjCfSaLSqD',
          name: 'Mock map',
        },
        id: 'OiyMNoXzSdY',
        type: 'MAP',
      },
      {
        text: 'Mock text',
        type: 'TEXT',
        id: 'ILRTXgXvurM',
      },
    ];

    getDashboardDetail.mockResolvedValue(mockData);

    const { getByText, getByTestId, queryByText } = render(
      <Dashboard
        item={mockItem}
        expanded={true}
        handleClick={() => {}}
        selectedType="MAP"
      />
    );

    // Simulate an API request and wait for it to resolve
    await act(async () => {
      fireEvent.click(getByTestId('dashboard-card'));
    });

    expect(getByText('Mock map')).toBeInTheDocument();
    expect(queryByText('Mock text')).toBeNull();
  });
});
