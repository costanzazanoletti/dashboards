import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DashboardItemIcon from './DashboardItemIcon';

describe(DashboardItemIcon, () => {
  it('DashboardItemIcon displays map icon when type is MAP', () => {
    const { getByTitle } = render(<DashboardItemIcon type={'MAP'} />);
    expect(getByTitle('icon-map')).toBeInTheDocument();
  });
});

describe(DashboardItemIcon, () => {
  it('DashboardItemIcon displays text icon when type is TEXT', () => {
    const { getByTitle } = render(<DashboardItemIcon type={'TEXT'} />);
    expect(getByTitle('icon-text')).toBeInTheDocument();
  });
});

describe(DashboardItemIcon, () => {
  it('DashboardItemIcon displays message icon when type is MESSAGES', () => {
    const { getByTitle } = render(<DashboardItemIcon type={'MESSAGES'} />);
    expect(getByTitle('icon-message')).toBeInTheDocument();
  });
});

describe(DashboardItemIcon, () => {
  it('DashboardItemIcon displays chart icon when type is VISUALIZATION', () => {
    const { getByTitle } = render(<DashboardItemIcon type={'VISUALIZATION'} />);
    expect(getByTitle('icon-chart')).toBeInTheDocument();
  });
});

describe(DashboardItemIcon, () => {
  it('DashboardItemIcon displays default icon when type is not recognized', () => {
    const { getByTitle } = render(<DashboardItemIcon type={''} />);
    expect(getByTitle('icon-default')).toBeInTheDocument();
  });
});
