const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const fetch = require("node-fetch")

enzyme.configure({ adapter: new Adapter() });

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body><div id="app-root"></div></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document =  window.document;
global.fetch = fetch;

Object.defineProperty(global.window, 'getComputedStyle', {
  value: () => {
    return {
      'padding-left': 20,
      'padding-right': 20
    }
  }
});

global.navigator = {
  userAgent: 'node.js',
};
global.requestAnimationFrame = function (callback) {
  return setTimeout(callback, 0);
};
global.cancelAnimationFrame = function (id) {
  clearTimeout(id);
};
copyProps(window, global);