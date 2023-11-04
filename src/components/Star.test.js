import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Star from './Star';

describe('Star component', () => {
  it('display full star icon when full is true', () => {
    const { getByTitle } = render(<Star full={true} />);
    expect(getByTitle('full-star')).toBeInTheDocument();
  });

  it('display empty star icon when full is false', () => {
    const { getByTitle } = render(<Star full={false} />);
    expect(getByTitle('empty-star')).toBeInTheDocument();
  });
});
