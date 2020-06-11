import shortid from 'shortid';

const _public = {};

_public.init = () => {
  setValidChars(buildValidChars());
};

_public.generate = () => {
  return shortid.generate();
};

function buildValidChars(){
  return '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$_';
}

function setValidChars(chars){
  shortid.characters(chars);
}

_public.init();

export default _public;
