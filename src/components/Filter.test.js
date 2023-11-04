import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Filter from './Filter';
import { TypeContext } from '../App';

describe('Filter component', () => {
  it('type filter selected option is empty', () => {
    const { container } = render(
      <TypeContext.Provider value={''}>
        <Filter />
      </TypeContext.Provider>
    );
    const select = container.querySelector('select');
    expect(select.value).toBe('');
  });

  it('type filter selected option is MAP', () => {
    let result = '';

    const props = {
      selectedType: '',
      setSelectedType: (type) => {
        result = type;
      },
    };
    render(
      <TypeContext.Provider value={props}>
        <Filter />
      </TypeContext.Provider>
    );
    const filter = screen.getByTestId('type-filter');

    userEvent.selectOptions(filter, 'MAP');
    expect(result).toBe('MAP');
  });
});
