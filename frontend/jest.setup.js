import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

expect.extend({
  toBeCalledWithVariables(received, argument) {
    const receivedVariables = received.mock.calls[0][0].variables;
    const pass = this.equals(receivedVariables, argument);
    const message = () =>
      `expected ${this.utils.printExpected(argument)}

to match ${this.utils.printReceived(receivedVariables)}`;

    return { message, pass };
  },
});
