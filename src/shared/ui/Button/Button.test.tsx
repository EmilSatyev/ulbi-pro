import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('classNames', () => {
  test('with only first param', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
  test('with class', () => {
    render(<Button className={ThemeButton.CLEAR}>Test2</Button>);
    expect(screen.getByText('Test2')).toHaveClass(ThemeButton.CLEAR);
    screen.debug();
  });
});
