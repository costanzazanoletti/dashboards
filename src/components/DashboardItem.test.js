import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DashboardItem from './DashboardItem';
const mockData = {
  map: {
    id: 'ZBjCfSaLSqD',
    name: 'Mock name',
  },
  id: 'OiyMNoXzSdY',
  type: 'MAP',
};

describe('DashboardItem Component', () => {
  it('displays the item name', () => {
    const { getByText } = render(<DashboardItem item={mockData} />);
    expect(getByText('Mock name')).toBeInTheDocument();
  });
});
