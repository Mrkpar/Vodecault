# Vodecault

A full-stack programming documentation platform built from scratch.

The goal of this project is to learn web development by creating an interactive documentation website containing explanations, examples, exercises, and coding playgrounds.

Built with:

- HTML
- CSS
- JavaScript
- Node.js
- Express

Future plans:

- Search engine
- Interactive code examples
- Theme customization
- User accounts
- Quiz system
- REST API

Need to know for test

To deploy:


firebase deploy --only hosting


The page loads and loadBooks() is called. The frontend uses fetch() to send a GET request to /books on the backend. fetch() immediately gives JavaScript a Promise representing the future result. The Express server receives the request, finds the /books route and uses res.json() to send the books back as JSON. Once the response arrives, await gives us the Response object. We then use response.json() to parse the JSON body into JavaScript data. We call setBooks(data), which changes the React state. React notices the state change and re-renders the component. The map() goes through the books and creates a <p> for each one, so the user sees Dune and 1984.

- filter, sort map,
= req res
= hol van network tab, hol a consol , azaz debuggolni kell tudni
- cliens server kommunikacio fontos
- CRUD
- mi az a callback function + pelda hol hasznos
 - data driven rendering
 - 

 - prop drilling
 - This workflow uses npm and requires module bundlers or JavaScript framework tooling because the modular API is optimized to work with module bundlers to eliminate unused code (tree-shaking) and decrease SDK size.
         1 immutable
        2 destructuring
        3 ### 11. State management; state vs props