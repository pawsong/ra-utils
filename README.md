# ra-utils

[react-admin](https://github.com/marmelab/react-admin) utils

## createDataProvider

Manually create a `react-admin` data-provider for each resource.

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
