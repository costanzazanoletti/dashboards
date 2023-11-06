import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DashboardItemList from './DashboardItemList';

const mockData = [
  {
    users: [],
    messages: true,
    shape: 'NORMAL',
    x: 0,
    y: 0,
    type: 'MESSAGES',
    id: 'w0NbkJBeGLP',
    reports: [],
    resources: [],
    h: 20,
    w: 29,
  },
  {
    visualization: {
      type: 'COLUMN',
      id: 'hlzEdAWPd4L',
      name: 'Reporting rates: Morbidity by orgunit last year',
    },
    users: [],
    shape: 'NORMAL',
    x: 29,
    y: 0,
    type: 'VISUALIZATION',
    id: 'elpvfPYiyA0',
    reports: [],
    resources: [],
    h: 20,
    w: 29,
  },
  {
    text: '*ANC Overview*\n\nThe ANC dashboard provides a _comprehensive_ overview of ANC activity.\n\nClick on the *arrow* next to each item to explore the data further.\n\nYou can switch between visualization types by clicking on the table/chart/map icons for each item.',
    users: [],
    x: 0,
    y: 0,
    type: 'TEXT',
    id: 'ILRTXgXvurM',
    reports: [],
    resources: [],
    h: 20,
    w: 9,
  },
  {
    map: {
      id: 'ZBjCfSaLSqD',
      name: 'ANC: LLITN coverage district and facility',
    },
    users: [],
    shape: 'NORMAL',
    x: 34,
    y: 0,
    type: 'MAP',
    id: 'OiyMNoXzSdY',
    reports: [],
    resources: [],
    h: 20,
    w: 24,
  },
];
describe('DashboardItemsList Component', () => {
  it('displays 4 div with class list-group-item', () => {
    const { container } = render(<DashboardItemsList items={mockData} />);
    const divs = container.getElementsByClassName('list-group-item');
    expect(divs.length).toBe(4);
  });

  it('displays the empty message when there are no items', () => {
    const { container } = render(<DashboardItemsList items={[]} />);
    const divs = container.getElementsByClassName('alert alert-info');
    expect(divs.length).toBe(1);
  });
});
