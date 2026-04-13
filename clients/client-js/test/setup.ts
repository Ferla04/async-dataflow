import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'http://localhost',
});

global.window = dom.window as any;
global.document = dom.window.document as any;

const navigatorDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
if (!navigatorDescriptor || navigatorDescriptor.writable || navigatorDescriptor.set) {
  (globalThis as any).navigator = dom.window.navigator as any;
}