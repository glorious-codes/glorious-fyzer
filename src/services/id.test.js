import shortid from 'shortid';
import idService from './id';

describe('Id Service', () => {
  beforeEach(() => {
    shortid.characters = jest.fn();
    shortid.generate = jest.fn();
  });

  it('should config valid chars on initialize', () => {
    const validChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$_';
    idService.init();
    expect(shortid.characters).toHaveBeenCalledWith(validChars);
  });

  it('should generate some id', () => {
    idService.generate();
    expect(shortid.generate).toHaveBeenCalled();
  });
});
