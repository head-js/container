export default function $dispatch(action) {
  const { head } = window;
  const fn = head.container.script('$', 'dispatch');
  fn(action);
}
