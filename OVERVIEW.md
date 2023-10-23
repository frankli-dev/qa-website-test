# Overview

The application is built using React (create-react-app) and utilizes Tailwind CSS as the UI toolkit. It operates in suspense mode for efficient data loading.

Axios and React Query are used for fetching APIs, caching data, and handling errors. The use of React Query's onError callback eliminates the need for cumbersome try/catch blocks.

Tailwind CSS enables mobile-responsive design and supports error notifications through toasts.

The code is formatted using Prettier for consistent and readable formatting.

## Setup

To run the application with full access to GitHub APIs (to overcome rate limits), you can obtain a personal access token from GitHub and add it as an environment variable:

```
REACT_APP_GITHUB_TOKEN=<YOUR TOKEN>
```

If the token is not provided, the application will still work but may be subject to API rate limits.

## Future implementation

The future implementation plans include:

1. Implementing pagination for infinite scrolling or a "Load More" button to fetch paginated users and repositories. This can be achieved by leveraging React Query further and adding appropriate UI components.

2. Adding integration and end-to-end tests using Jest or Cypress to ensure the application's functionality is thoroughly tested and robust.
