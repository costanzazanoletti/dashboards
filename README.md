# DHIS2 Frontend Task - Option 2

## Build a React application that fetches and renders the list of dashboards available to a DHIS2 user.

### The API

To get the list of dashboards, call:
https://gist.githubusercontent.com/kabaros/da79636249e10a7c991a4638205b1726/raw/fa044f54e7a5493b06bb51da40ecc3a9cb4cd3a5/dashboards.json

To get a specific dashboard’s details, call
https://gist.githubusercontent.com/kabaros/da79636249e10a7c991a4638205b1726/raw/fa044f54e7a5493b06bb51da40ecc3a9cb4cd3a5/{id}.json - replacing {id} with the dashboard id from the list of dashboards.

### The specs

1. Show the dashboards in a list of collapsible cards

- The first dashboard card is expanded on load by default
- When the user clicks on another dashboard, expand that dashboard card to show its details and collapse the other dashboards

2. When a dashboard is expanded, then show all the dashboard items in that dashboard

- Show an icon based on the item type (visualization, map, text, etc.)
- Show the dashboard item name (For text types, show the text of the dashboard item in place of its name)

3. Ability to “star” a dashboard and persist the starred states on reload.
4. Ability to filter dashboard items of a certain type, so if the user selects “visualization”, only the visualization dashboard items are displayed.

- Keep the filter selected when the user expands and collapses dashboard cards
- Some dashboard items (like visualization and map) are expensive to render, so make sure there are no unnecessary re-renders
