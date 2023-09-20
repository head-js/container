export default function $session(update) {
  const { head } = window;
  const fn = head.container.script('$', 'session');
  if (update) {
    fn(update);
  } else {
    return fn(update);
  }
}
