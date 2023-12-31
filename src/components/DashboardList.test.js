import React from 'react';
import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import DashboardList from './DashboardList';
import { getDashboardList, getDashboardDetail } from '../api';
import { TypeContext } from '../App';
// Mock the API function
jest.mock('../api');

describe('DashboardList Component', () => {
  it('displays a list of dashboards with the first expanded', async () => {
    const mockData = [
      {
        displayName: 'Antenatal Care',
        id: 'nghVC4wtyzi',
        starred: true,
      },
      {
        displayName: 'Cases Malaria',
        id: 'JW7RlN5xafN',
        starred: false,
      },
    ];

    const mockItemsData = [
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

    // Mock both list and details api functions
    getDashboardList.mockResolvedValue(mockData);
    getDashboardDetail.mockResolvedValue(mockItemsData);

    const { getByText } = render(
      <TypeContext.Provider value={{ selectedType: '' }}>
        <DashboardList />
      </TypeContext.Provider>
    );

    await act(async () => {
      // Wait for the data to be loaded
    });
    // Dashboard names
    expect(getByText('Antenatal Care')).toBeInTheDocument();
    expect(getByText('Cases Malaria')).toBeInTheDocument();
    // First dashboard items names
    expect(getByText('Mock name')).toBeInTheDocument();
    expect(getByText('Mock text')).toBeInTheDocument();
  });

  it('renders a "No dashboards" message when there is no data', async () => {
    getDashboardList.mockResolvedValue([]);

    const { getByText } = render(
      <TypeContext.Provider value={{ selectedType: '' }}>
        <DashboardList />
      </TypeContext.Provider>
    );

    await act(async () => {
      // Wait for the data to be loaded
    });

    expect(getByText('No dahboards')).toBeInTheDocument();
  });
});
