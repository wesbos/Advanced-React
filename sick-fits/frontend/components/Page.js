import PropTypes from 'prop-types';

export default function Page({children, cheese}) {
  return ( 
    <div>
      <h3>HEY!!!PAGE COMPONENT HERE!!!!</h3>
      {children}
      {cheese}
    </div>
  );
}

Page.propTypes = {
  cheese: PropTypes.string,
  children: PropTypes.any
};