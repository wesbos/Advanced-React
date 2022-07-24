import { render } from '@testing-library/react';

import wait from 'waait';
import CartCount from '../components/CartCount';

describe('<CartCount>', () => {
  it('Renders', () => {
    render(<CartCount count={10} />);
  });

  it('Renders', () => {
    const { container } = render(<CartCount count={11} />);

    expect(container).toMatchSnapshot();
  });

  it('Update via props', async () => {
    const { container, rerender, debug } = render(<CartCount count={11} />);

    expect(container.textContent).toBe('11');

    // Update the props
    rerender(<CartCount count="12" />);

    // React CSS transtion group will temporarily have both numbers on the screen. The old and new one.
    expect(container.textContent).toBe('1211');

    // wait for __ ms. We can use the react-testing-library API for this.
    await wait(400);
    expect(container.textContent).toBe('12');

    expect(container).toMatchSnapshot();
  });
});
