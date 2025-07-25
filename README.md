# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Parcel

- Dev Build
- Local Server
- HMR Hot Module Replacement
- File Watching Algorithm = written in C++
- Caching Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code splitting
- Differential Bundling ==> Support older browsers, other browser, screens

> package.lock.json ==> It stores the exact version the App is using

> ~ ==> Fetches the Major updates [~4.5]

> ^ ==> Fetches the Minor updates [^2.8.3]

### Babel ~ JavaScript Compiler

JSX transpiled to JS Engine standard code

##Types of Components:

- Class-based Components
- Functional Components - A function which returns a React Element/ JSX.

  const AppComponent = () => {
  return <h2>Namaste React</h2>;
  }

  root.render(<AppComponent />);

## Git

git remote add origin git@github.com:alpha-shri/namaste-react.git

How to generate new SSH key

> ssh-keygen -t ed25519 -C "shrijeetkumarpanda@gmail.com"

Upload to Remote Git

> git remote add origin https://github.com/alpha-shri/namaste-react.git

> git push origin

## Config driven UI

- Big Tech company uses config coming from the backend

### React.Map

resList.map(res => <RestaurantCard key={res.data} resData={res} />)

- React will not re-render the entire list, it will just pick the card with unique id and render that part only.

* Always use uniqueId as the key.

* React performance enhances.

* React says never use the key as 'index'

#### Index as a key is an anti-pattern

    resList.map((res, index) => <RestaurantCard key={index} resData={res} />)

- React is really super fast because of efficient DOM manipulation.

### Hooks

     useState() ==> normal JS function with Super-powerful.

- React AUTOMAGICALLY updates the DOM

- React uses **Virtual DOM**, which the a normal JS Object

- It uses the **React Fiber and Diff Algorithm** to see the change and update the UI

- React never touches the DOM, it gets the React.createElement object from JSX

- The entire JSX is converted to React.createElement

#### useEffect( () => {}, [])

- The purpose is, if you want to **perform something after the render** is completed, then useEffect
- After the component rendered, then `useEffect()` will be called
- This has two arguments
  - 1. Callback function
  - 2. Dependency array

# Code Splitting | Dynamic Bundling | Chunking | Lazy Loading

### Code splitting, bundle size should be reduced.

### Bundle should be logical splits

`Application Swiggy Bundles`

    - Swiggy Instamart
    - Grocery
    - Swiggy Genie
    - Liquor

## useContext and Context Provider

- This holds the value which shared by multiple components
- ex: loggedInUserInfo is required across the application, so we can create UserContext and can be shared.

`<UserContext.Provider value={{ loggedInUser: userName }}> <RouterProvider router={appRouter} />`

`</UserContext.Provider>`

### Can also make this dynamic

`<UserContext.Provider value={{ loggedInUser: userName, setUserName }}>`

**Pretty Cool feature**

_get the setUserName and make this dynamic, this will change the value across the App._

- const { loggedInUser, setUserName } = useContext(UserContext);
- My state variable [user-name] is tied to global state value

# REDUX TOOLKIT (RTK)

- Install @reduxjs/toolkit and react-redux
- Build Our Store [Database]
- Connect our application to the store
- `<Provider store={appstore}> </Provider>`
- Create slice [cart-slice] ==> Logical separation (Image a table inside a database, say cart-table, user-table)
- dispatch (Action) ==> Controller layer, you can trigger actions using this
- Selector



## Testing in React
- **Unit Testing**: Test your component in isolation (Just test my Header Component)
- **Integration Testing**: Testing the integration of different components.
- **E2E Testing**
- [React-testing-library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest Delightful library](https://jestjs.io/)
- 