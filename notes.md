## Link

Before we use next-routes, our links look like this:

```js
      <Link
        href={{
          pathname: 'item',
          query: {
            slug: slugify(item.title),
            itemId: item.id,
          },
        }}
      >
```

Once we switch to next routes, our links look like this:

```js
import { Link } from '../routes';

<Link
  route="item"
  params={{
    slug: slugify(item.title),
    itemId: item.id,
  }}
>
```


## Commonly Used Terms

Enhancer - These are just high order components that "infuse" the data we want into our components via props

Mutation

Query


