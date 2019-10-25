import windowService from './services/window';
import fyzer from './index';

describe('Page Fold Service', () => {
  function stubAbovePageFold(isAbovePageFold){
    windowService.isElementAbovePageFold = jest.fn(() => isAbovePageFold);
  }

  function simulateWindowScroll(){
    fyzer.init();
  }

  beforeEach(() => {
    windowService.onScroll = jest.fn(callback => callback());
  });

  it('should execute show up callback when element gets above the page fold', () => {
    stubAbovePageFold(false);
    const element = {};
    const onShowUp = jest.fn();
    const id = fyzer.subscribe(element, onShowUp);
    stubAbovePageFold(true);
    simulateWindowScroll();
    expect(onShowUp).toHaveBeenCalled();
    fyzer.unsubscribe(id);
  });

  it('should execute show up callback immediately when element is already above the page fold on subscribe', () => {
    jest.useFakeTimers();
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
    simulateWindowScroll();
    expect(onShowUp).not.toHaveBeenCalled();
    fyzer.unsubscribe(id);
  });

  it('should no longer execute show up callback after element to get unsubscribed', () => {
    stubAbovePageFold(false);
    const element = {};
    const onShowUp = jest.fn();
    const id = fyzer.subscribe(element, onShowUp);
    stubAbovePageFold(true);
    simulateWindowScroll();
    expect(onShowUp).toHaveBeenCalled();
    fyzer.unsubscribe(id);
    simulateWindowScroll();
    expect(onShowUp.mock.calls.length).toEqual(1);
  });
});
