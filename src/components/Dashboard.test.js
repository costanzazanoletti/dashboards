import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from './Dashboard';
const { dashboard } = require('../testData');

jest.mock('../api', () => ({
  getDashboardDetail: jest.fn(() =>
    Promise.resolve([
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
    ])
  ),
}));

describe('Dashboard component', () => {
  it('Dashboard displays name', () => {
    const { container } = render(
      <Dashboard
        item={dashboard}
        expanded={false}
        selectedType={''}
        handleClick={() => {}}
      ></Dashboard>
    );
    expect(container.querySelector('h5').textContent).toBe('Cases Malaria');
  });

  it('Dashboard is collapsed', () => {
    const { container } = render(
      <Dashboard
        item={dashboard}
        expanded={false}
        selectedType={''}
        handleClick={() => {}}
      ></Dashboard>
    );
    expect(container.getElementsByClassName('list-group-item').length).toBe(0);
  });

  //   it('Dashboard has 4 dashboard items', () => {
  //     const { container } = render(
  //       <Dashboard
  //         item={dashboard}
  //         expanded={true}
  //         selectedType={''}
  //         handleClick={() => {}}
  //       ></Dashboard>
  //     );

  //     expect(container.getElementsByClassName('list-group-item').length).toBe(4);
  //   });

  // it('Dashboard displays filtered dashboard items', () => {
  //   jest.mock('../api', async () => mockDashboardItems);
  //   const { container } = render(
  //     <Dashboard
  //       item={dashboard}
  //       expanded={true}
  //       selectedType={'MAP'}
  //       handleClick={() => {}}
  //     ></Dashboard>
  //   );

  //   expect(container.getElementsByClassName('card').length).toBe(1);
  // });
});
