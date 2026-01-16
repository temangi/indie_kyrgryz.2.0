import { render, screen, fireEvent } from '@testing-library/react';
import Tours from '../src/widgets/Tours/ui/Tours';

describe('Click for btns', () => {
  test('switches active tab correctly', () => {
    const setActiveTab = jest.fn();

    render(<Tours />);

    const bestBtn = screen.getByTestId('best-tab');
    const groupBnt = screen.getByTestId('group-tab');

    expect(bestBtn).toHaveClass('active');
    expect(groupBnt).not.toHaveClass('active');

    fireEvent.click(groupBnt);

    expect(groupBnt).toHaveClass('active');
    expect(groupBnt).not.toHaveClass('active');
  });
});
