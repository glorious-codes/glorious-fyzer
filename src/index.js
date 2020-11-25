import idService from './services/id';
import windowService from './services/window';

const _public = {};

let subscribers = [];

_public.subscribe = (element, onShowUp) => {
  handleShowUpCallback(element, onShowUp);
  return addSubscriber(element, onShowUp);
};

_public.unsubscribe = subscriberId => {
  subscribers = subscribers.filter(subscriber => subscriber.id !== subscriberId);
};

function addSubscriber(element, onShowUp){
  const id = idService.generate();
  subscribers.push({ id, element, onShowUp });
  return id;
}

function onWindowChange(){
  subscribers.forEach(({ element, onShowUp }) => handleShowUpCallback(element, onShowUp));
}

function handleShowUpCallback(element, callback){
  setTimeout(() => windowService.isElementAbovePageFold(element) && callback());
}

windowService.listenChanges(onWindowChange);

export default _public;
