const catchError = function(fn) {
  return (...args) =>
    fn(...args).catch(error => {
      this.setState({ error });
    });
};

export default catchError;
