import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DashboardItemText from './DashboardItemText';
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

describe('DashboardItemText Component', () => {
  it('displays the item map name when type is MAP', () => {
    const mockData = {
      map: {
        id: 'ZBjCfSaLSqD',
        name: 'ANC: LLITN coverage district and facility',
      },
      type: 'MAP',
      id: 'OiyMNoXzSdY',
    };
    const { getByTestId } = render(<DashboardItemText item={mockData} />);

    expect(getByTestId('item-text').textContent).toEqual(
      'ANC: LLITN coverage district and facility'
    );
  });

  it('displays item text when type is TEXT', () => {
    const mockData = {
      text: '*ANC Overview*\n\nThe ANC dashboard provides a _comprehensive_ overview of ANC activity.\n\nClick on the *arrow* next to each item to explore the data further.\n\nYou can switch between visualization types by clicking on the table/chart/map icons for each item.',
      type: 'TEXT',
      id: 'ILRTXgXvurM',
    };
    const { getByTestId } = render(<DashboardItemText item={mockData} />);
    expect(getByTestId('item-text').textContent).toEqual(
      '*ANC Overview*\n\nThe ANC dashboard provides a _comprehensive_ overview of ANC activity.\n\nClick on the *arrow* next to each item to explore the data further.\n\nYou can switch between visualization types by clicking on the table/chart/map icons for each item.'
    );
  });

  it('displays the text Messages when type is MESSAGES', () => {
    const mockData = {
      messages: true,
      type: 'MESSAGES',
      id: 'w0NbkJBeGLP',
    };
    const { getByTestId } = render(<DashboardItemText item={mockData} />);
    expect(getByTestId('item-text').textContent).toEqual('Messages');
  });

  it('displays item visualization name when type is VISUALIZATION', () => {
    const mockData = {
      visualization: {
        type: 'COLUMN',
        id: 'hlzEdAWPd4L',
        name: 'Reporting rates: Morbidity by orgunit last year',
      },
      type: 'VISUALIZATION',
      id: 'elpvfPYiyA0',
    };
    const { getByTestId } = render(<DashboardItemText item={mockData} />);
    expect(getByTestId('item-text').textContent).toEqual(
      'Reporting rates: Morbidity by orgunit last year'
    );
  });
});
