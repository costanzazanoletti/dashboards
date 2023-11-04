import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DashboardItemsList from './DashboardItemsList';
const { dashboardItems } = require('../testData');

describe('DashboardItemsList component', () => {
  it('dashboard items list displays 4 div with class list-group-item', () => {
    const { container } = render(<DashboardItemsList items={dashboardItems} />);
    const divs = container.getElementsByClassName('list-group-item');
    expect(divs.length).toBe(4);
  });

  it('dashboard items list displays the empty message when there are no items', () => {
    const { container } = render(<DashboardItemsList items={[]} />);
    const divs = container.getElementsByClassName('alert alert-info');
    expect(divs.length).toBe(1);
  });
});
