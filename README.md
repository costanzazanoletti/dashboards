## Deployed app: https://voluble-treacle-da7456.netlify.app/

## Components structure

I broke down the requested features into small single purpose components, in order to make them easier to test and mantain.

I used React Context to share the value of the selected dashboard items type, which is modified inside the Filter component and is used to filter the items inside the Dashboard component. The Context is created in the App component, which is the common ancestor of both components.

To store the starred states of the dashboard on reload I used localStorage, managed directly inside the StarToggle component, in order to avoid an unnecessary re-render of the parent component. The id of the dashboard is used as key in the localStorage map.

I used Jest as testing tool. Each component has its own test file. When needed by the component I mocked the functions which perform api calls, the localStorage setItem and getItem functions and the context value.
