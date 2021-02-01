# movies-api-app
> This is an app to practice using API calls, React hooks, React Router, styled components and atomic design.\
It shows a list of movies fetched from an API and does a lot of things with the data.

[View demo](https://dreamy-knuth-149f0e.netlify.app/)

## What does the code do?
### Home page
- Fetches data from [`/movies.json`](https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json).
- Displays the list of movies (dynamically creates `Movie` components).

### Favorites movies page
- Place an 'Add to Favorites' button on each `Movie` component (on click, the movie is added the favorites list).
- Displays all the favorite movies (dynamically creates the `Movie` components by filtering the data).
- Places a 'Remove from Favorites' button on each `Movie` component (on click, it removes the movie from the list).

### Picker
- Places a `Pick a random movie` button in the favorites page (on click, a random movie from the favorites is displayed in a different page, carrying the data with a React Router method).

### Bonus 
- Places a dropdown to filter movies by `genres`.
- The `genres` are not hardcoded but taken from the fetched data.
 
### To do
- Add an id package like [Nano ID](https://www.npmjs.com/package/nanoid/v/2.1.8) to fix the warnings:
    ```
    Warning: Each child in a list should have a unique "key" prop.
    ```
