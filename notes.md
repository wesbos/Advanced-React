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

Scalar - this means that it's an acutal value and not a relationship. A scalar type of ID might be ABC123, a scalar type of String might be "Wes Bos". These are the default scalar types:

Int: A signed 32‐bit integer.
Float: A signed double-precision floating-point value.
String: A UTF‐8 character sequence.
Boolean: true or false.
ID

## The process for adding a new field:

1. First we need to add the field to our type in datamodel.graphql
2. Then, we need to add it to our schema.graphql file, which is how we define our GraphQL API. Here we will only include the fields that we want to be query-able
3. Now the database needs to know about the new field, so we run `prisma deploy`

## The process for adding a new type

1. First we need to add it to the database. Edit datamodel.graphql:

```js
type Item {
  id: ID! @unique
  title: String!
  description: String!
  price: Int!
}
```

2. Now we need to either re-define it in our client-side schema, or import it carte blanche

## The process for adding new queries or mutations
