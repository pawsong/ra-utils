# ra-utils

[react-admin](https://github.com/marmelab/react-admin) utils

## createDataProvider

Write `react-admin` data-provider per each resource manually.

```ts
import { createDataProvider, Resource } from 'ra-utils'

const posts: Resource = {
  getList: () => {
    return getPostListSomehow()
  }
  // ...
}

const users: Resource = {
  // ...
}

const provider = createDataProvider({
  posts,
  users,
})
```

## License

MIT
