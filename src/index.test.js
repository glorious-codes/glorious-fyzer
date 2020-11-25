import windowService from './services/window';
import fyzer from './index';

jest.useFakeTimers();

describe('Fyzer', () => {
  function stubAbovePageFold(isAbovePageFold){
    windowService.isElementAbovePageFold = jest.fn(() => isAbovePageFold);
  }

  function simulateWindowEvent(eventName){
    const evt = new Event(eventName);
    window.dispatchEvent(evt);
  }

  beforeEach(() => {
    stubAbovePageFold();
  });

  it('should execute show up callback when element gets above the page fold', () => {
    stubAbovePageFold(false);
    const element = {};
    const onShowUp = jest.fn();
    const id = fyzer.subscribe(element, onShowUp);
    jest.runOnlyPendingTimers();
    stubAbovePageFold(true);
    simulateWindowEvent('scroll');
    jest.runOnlyPendingTimers();
    expect(onShowUp).toHaveBeenCalled();
    fyzer.unsubscribe(id);
  });

  it('should execute show up callback immediately when element is already above the page fold on subscribe', () => {
    stubAbovePageFold(true);
    const element = {};
    const onShowUp = jest.fn();
    const id = fyzer.subscribe(element, onShowUp);
    jest.runOnlyPendingTimers();
    expect(onShowUp).toHaveBeenCalled();
    fyzer.unsubscribe(id);
  });

  it('should not execute show up callback when element is not above the page fold', () => {
    stubAbovePageFold(false);
    const element = {};
    const onShowUp = jest.fn();
    const id = fyzer.subscribe(element, onShowUp);
    jest.runOnlyPendingTimers();
    simulateWindowEvent('scroll');
    jest.runOnlyPendingTimers();
    expect(onShowUp).not.toHaveBeenCalled();
    fyzer.unsubscribe(id);
  });

  it('should no longer execute show up callback after element to get unsubscribed', () => {
    stubAbovePageFold(false);
    const element = {};
    const onShowUp = jest.fn();
    const id = fyzer.subscribe(element, onShowUp);
    jest.runOnlyPendingTimers();
    stubAbovePageFold(true);
    simulateWindowEvent('scroll');
    jest.runOnlyPendingTimers();
    expect(onShowUp).toHaveBeenCalledTimes(1);
    fyzer.unsubscribe(id);
    simulateWindowEvent('scroll');
    jest.runOnlyPendingTimers();
    expect(onShowUp).toHaveBeenCalledTimes(1);
  });

  it('should execute show up callback if element is above the page fold on window load', () => {
    const element = {};
    const onShowUp = jest.fn();
    const id = fyzer.subscribe(element, onShowUp);
    jest.runOnlyPendingTimers();
    stubAbovePageFold(true);
    simulateWindowEvent('load');
    jest.runOnlyPendingTimers();
    expect(onShowUp).toHaveBeenCalledTimes(1);
    fyzer.unsubscribe(id);
  });

  it('should execute show up callback if element is above the page fold on window resize', () => {
    const element = {};
    const onShowUp = jest.fn();
    const id = fyzer.subscribe(element, onShowUp);
    jest.runOnlyPendingTimers();
    stubAbovePageFold(true);
    simulateWindowEvent('resize');
    jest.runOnlyPendingTimers();
    expect(onShowUp).toHaveBeenCalledTimes(1);
    fyzer.unsubscribe(id);
  });
});
