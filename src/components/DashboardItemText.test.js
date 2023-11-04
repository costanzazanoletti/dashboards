import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DashboardItemText from './DashboardItemText';

const { dashboardItems } = require('../testData');

describe('DashboardItemText component', () => {
  it('dashboard item displays the item map name when type is MAP', () => {
    const { getByTestId } = render(
      <DashboardItemText item={dashboardItems[3]} />
    );

    expect(getByTestId('item-text').textContent).toEqual(
      'ANC: LLITN coverage district and facility'
    );
  });
});

describe(DashboardItemText, () => {
  it('dashboard item displays item text when type is TEXT', () => {
    const { getByTestId } = render(
      <DashboardItemText item={dashboardItems[2]} />
    );
    expect(getByTestId('item-text').textContent).toEqual(
      '*ANC Overview*\n\nThe ANC dashboard provides a _comprehensive_ overview of ANC activity.\n\nClick on the *arrow* next to each item to explore the data further.\n\nYou can switch between visualization types by clicking on the table/chart/map icons for each item.'
    );
  });
});

describe(DashboardItemText, () => {
  it('dashboard item displays the text Messages when type is MESSAGES', () => {
    const { getByTestId } = render(
      <DashboardItemText item={dashboardItems[0]} />
    );
    expect(getByTestId('item-text').textContent).toEqual('Messages');
  });
});

describe(DashboardItemText, () => {
  it('dashboard item displays item visualization name when type is VISUALIZATION', () => {
    const { getByTestId } = render(
      <DashboardItemText item={dashboardItems[1]} />
    );
    expect(getByTestId('item-text').textContent).toEqual(
      'Reporting rates: Morbidity by orgunit last year'
    );
  });
});
