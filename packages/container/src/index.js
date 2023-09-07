import Http from './http';


export function $create(options) {
  const { head } = window;
  const $c = head.container.create(options);
  return $c;
}


export function $session() {
  const { head } = window;
  return head.container.session();
}


export function $dispatch(action) {
  const { head } = window;
  const fn = head.container.fn('$', 'dispatch');
  fn(action);
}


export const $http = new Http();
