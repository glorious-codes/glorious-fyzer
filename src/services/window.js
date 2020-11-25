const _public = {};

_public.listenChanges = callback => {
  ['scroll', 'resize', 'load'].forEach(listener => {
    window.addEventListener(listener, callback);
  });
};

_public.isElementAbovePageFold = element => {
  return element.offsetTop - (_public.getInnerHeight() + _public.getPageYOffset()) < 0;
};

_public.getInnerHeight = () => {
  return window.innerHeight;
};

_public.getPageYOffset = () => {
  return window.pageYOffset;
};

export default _public;
