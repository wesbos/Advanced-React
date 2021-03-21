import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({children}) {
  return ( 
    <div>
      <Header />
      <h3>HEY!!!PAGE COMPONENT HERE!!!!</h3>
      {children}
      
    </div>
  );
}

Page.propTypes = {
  cheese: PropTypes.string,
  children: PropTypes.any
};