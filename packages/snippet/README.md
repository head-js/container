@head/container-snippet
==

1. 约定，用 `$$` 指向 `global`

```javascript
// app.js
import $http from '@head/http';
head.container.script('$$', 'http', $http);

// component-01.jsx
import { $script } from '@head/container';

export function Comp01() {
  useEffect(() => {
    const $http = $script('$$', 'http');
    $http.get().then();
  });

  return <div />;
}

// component-02.jsx
import $http from '@head/container/$$/http';

export function Comp01() {
  useEffect(() => {
    $http.get().then();
  });

  return <div />;
}
```

2. 用 `$` 指向 `currentPage`

```javascript
// page.js
head.container.script('$', 'session', function (update) {
  if (update) {
    useZustandStore.setState(update);
  } else {
    const { session } = useZustandStore.getState();
    return session;
  }
});

// component-01.jsx
// import $session from '@head/container/$/session';
import { $session } from '@head/container';

export function Comp01() {
  useEffect(() => {
    const { username } = $session();
  });

  return <div />;
}
```

3. 用 `id` 指向 `currentContainer`

```javascript
// contentless.jsx
import { $create } from '@head/container';

const $c = $create(options);
$c.script('onClick', () => {});

export function Contentless() {
  return <div />;
}

// contentful.jsx
function onClick(e) {
  const $c = $create(options); // if exist options.id, then return exist
  const fn = $c.script('onClick');
  fn(e);
}

export function Contentful() {
  return <div onClick={onClick} />;
}
```
