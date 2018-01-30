import TransitionGroup from 'react-transition-group/TransitionGroup';
import Transition from 'react-transition-group/Transition';
import styled from 'styled-components';

const CartCount = styled.div`
  padding: 10px;
  transition: all 0.5s;
  display: inline-block;
  background: white;
  background: linear-gradient(to bottom, #eeeeee 0%, #eeeeee 100%);
  transform: translateY(100%);
  z-index: 1;
  position: relative;
  &.cart-entering {
    background: green;
    transform: translateY(100%);
  }
  &.cart-entered {
    transform: translateY(0);
  }
  &.cart-exiting {
    position: absolute;
    z-index: 0;
    left: 0;
    transform: translateY(-100%);
  }
`;

const ChaChingStyles = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
`;

const ChaChing = ({ amount }) => (
  <ChaChingStyles>
    <TransitionGroup>
      <Transition
        in
        timeout={{
          enter: 0,
          exit: 500,
        }}
        key={amount}
      >
        {status => (
          <CartCount className={`cart-${status}`} key={`count-${amount}`}>
            {amount}
          </CartCount>
        )}
      </Transition>
    </TransitionGroup>
  </ChaChingStyles>
);

export default ChaChing;
