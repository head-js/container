export function $create(options) {
  const { head } = window;
  const $c = head.container.create(options);
  return $c;
}


export function $id(id) {
  const { head } = window;
  const $c = head.container.id(id);
  return $c;
}


export function $script(id, name, fn) {
  const { head } = window;
  if (fn) {
    head.container.script(id, name, fn);
  } else {
    const fn1 = head.container.script(id, name);
    return fn1;
  }
}


// $ sugar
import $session from './$session'; // eslint-disable-line import/first
import $dispatch from './$dispatch'; // eslint-disable-line import/first

export { $session, $dispatch };
