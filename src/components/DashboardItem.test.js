import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DashboardItem from './DashboardItem';
const { dashboardItems } = require('../testData');

describe('DashboardItem component', () => {
  it('dashboard item displays 2 div with className p-3', () => {
    const { container } = render(<DashboardItem item={dashboardItems[0]} />);
    const divs = container.getElementsByClassName('p-3');
    expect(divs.length).toBe(2);
  });
});
