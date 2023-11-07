### Deploy

The app is deployed on Netlify via Github at this url:
https://voluble-treacle-da7456.netlify.app/

### Tools and frameworks

The app is implemented in React Javascript, with the help of the following libraries:

- [Bootstrap](https://getbootstrap.com/) css framework
- [React Icons](https://react-icons.github.io/react-icons/) to render [Font Awesome icons](https://fontawesome.com/icons)
- [Axios](https://axios-http.com/) to perform HTTP requests
- [Jest](https://jestjs.io/) as testing tool

### Design choices

I broke down the requested features into small single purpose components, in order to make them easier to test and mantain.

I used React Context to share the value of the selected item type, which is set inside the Filter component and is used to filter the items inside the Dashboard component. The Context is created in the App component, which is the common ancestor of both components.

To store the starred state of the dashboards and mantain it on reload I used the localStorage window property, managed directly inside the StarToggle component, in order to avoid an unnecessary re-render of the parent component

Each component has its own test file. I mocked the external dependencies of the components: api calls, localStorage setItem and getItem functions and the context value.
