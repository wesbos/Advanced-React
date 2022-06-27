import '@testing-library/jest-dom';

// since we using headless mode - which means, not opening an actual browser, using js-dom under the hood -
// we don't actualy have access to the window object
window.alert = console.log;
