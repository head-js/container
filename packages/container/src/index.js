export function create(options) {
  const { head } = window;
  const $c = head.container.create(options); // eslint-disable-line no-unused-vars
  // console.log($c);
}


export function on(id, name) { // eslint-disable-line import/prefer-default-export
  return function (...args) {
    const { head } = window;
    const $c = head.container.id(id);
    const fn = $c.fn(name);
    fn.apply(null, args); // eslint-disable-line prefer-spread
  };
}
