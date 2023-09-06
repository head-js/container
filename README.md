@head/container
==

```javascript
// page-factory.js
head.container.session({ username: 'current' });

// c-01-script.js
const options = {
  id: 'c01',
  materials: {
    'i18n.click': '点击',
  },
};
const $c = head.container.create(options);

$c.script('onClick', (e) => {
  console.log(e);
});

// c-01.jsx
import { $create, $session } from '@head/container';


const $c = $create(options);


export default function Container() {
  const label = $c.material('i18n.click', 'Click');

  const onClick = useCallback($c.fn('onClick'), []);

  useEffect(() => {
    const { username } = $session();
    $http.get('/api/info', { username });
  }, []);

  return <Button onClick={onClick}>{label}</Button>;
};
```
