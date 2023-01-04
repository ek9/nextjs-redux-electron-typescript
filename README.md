# Next.js Electron Redux TypeScript

Develop an [Electron](https://electronjs.org) app using [Next.js][nextjs],
[React][reactjs], [Redux][redux] and [Electron Store][electron-store].

You will have an advantage of having a global state for your app using
[react-redux][react-redux], while also having an ability to persist your state
using [redux-persist][redux-persist] in [Electron Store][electron-store] or
(optionally) local storage.

This template is a combination of 2 example templates from [next.js][nextjs]:
- [with-electron-typescript](https://github.com/vercel/next.js/tree/canary/examples/with-electron-typescript)
- [with-redux-persist](https://github.com/vercel/next.js/tree/canary/examples/with-redux-persist)

## Features

This is an example project for creating an [Electron][electron] app using:

- [Next.js][nextjs]
- [Redux][redux] with [React Redux][react-redux], [redux-persis][redux-persist]
  and [Electron Store][electron-store] integrated.
- TypeScript

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/ek9/nextjs-electron-redux-typescript
```

```bash
yarn create next-app --example https://github.com/ek9/nextjs-electron-redux-typescript
```

```bash
pnpm create next-app --example https://github.com/ek9/nextjs-electron-redux-typescript
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes

In this example, we are going to use the Next.js example [with-redux](https://github.com/vercel/next.js/tree/canary/examples/with-redux-persist) to see how you can add a layer of persistence for one of the state from global redux state. To know more about how to create a Next.js project with Redux, you can browse the example project [with-redux](https://github.com/vercel/next.js/tree/canary/examples/with-redux) to know more about its implementation.

The Redux Persist has been initialized in `store.js`. You can modify the `redux-persist` configuration (In this example, we are persisting only one state termed `exampleData` which is added in the `persist configuration`) if you need something more with `redux-persist` by following their [docs](https://github.com/rt2zz/redux-persist/blob/master/README.md). To wrap out our component in the `Persist Gate` which rehydrates the global state with combining the persisted values and global state values, we'll have to make some modifications in the implementation of Redux in `pages/_app.js`.

The example under `components/data-list.js`, shows a simple component that fetches data after being mounted and then dispatches an action to populate the redux state `exampleData` with the fetched data. And in `store.js`, since we have included the `exampleData` state to be persisted, So once the redux state receives the persisted data from browser's local storage, it will be then updated to the global redux state. So if you open the app next time and there is no Internet connection or whatsoever condition, the app will load the persisted data and will render it on the screen.

For simplicity and readability, Reducers, Actions, Redux Persist configuration, and Store creators are all in the same file: `store.js`

[nextjs]: https://nextjs.org
[reactjs]: https://reactjs.org
[redux]: https://redux.js.org/
[redux-persist]: https://github.com/rt2zz/redux-persist
[react-redux]: https://react-redux.js.org/
[electron-store]: https://github.com/sindresorhus/electron-store

