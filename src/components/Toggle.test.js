import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Toggle from './Toggle';

describe(Toggle, () => {
  it('displays the arrow up icon when expanded', () => {
    const { getByTitle } = render(<Toggle expanded={true} />);
    expect(getByTitle('caret-up')).toBeInTheDocument();
  });
});
describe(Toggle, () => {
  it('displays the arrow down icon when collapsed', () => {
    const { getByTitle } = render(<Toggle expanded={false} />);
    expect(getByTitle('caret-down')).toBeInTheDocument();
  });
});
