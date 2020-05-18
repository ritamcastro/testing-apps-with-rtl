# Testing React Applications (with React Testing Application)

This repository contains a simple React application of a Calculator and it's history can be used as a guided 'how-to' on the [React testing library](https://testing-library.com/docs/react-testing-library/intro).


### Available npm commands:
- Run all tests: `npm run test`
- Run all tests in watch mode: `npm run test:watch`
- Start development environment: `npm run start`


## Outline

This repository contains a simple application that consists in 3 different screens, where each one will support several points from the key topics to be demonstrated:

- basics
- elementar form testing with use of mocked functions
- prefer [userEvent](https://github.com/testing-library/user-event) over of [fireEvent](https://testing-library.com/docs/dom-testing-library/api-events)
- avoid implementation details
- mocking modules
- [useContext](https://reactjs.org/docs/hooks-reference.html), [render](https://testing-library.com/docs/react-testing-library/api#render) and custom render for tests
- mocking HTTP requests


### Welcome
A brief introduction to the queries provided by [React Testing Library}(https://testing-library.com/docs/react-testing-library/cheatsheet) and the extended assertions of [Testing Library](https://github.com/testing-library/jest-dom) is covered in the `welcome` component. The `welcome` screen is also used to showcase the usage of mocked functions and a simple way to test forms. 

### Calculator
The `calculator` component is used to show how implementation details can be avoided by going throuh a refactoring that introduces the concepts of `display` and `keyboard` from [this](https://github.com/ritamcastro/testing-apps-with-rtl/tree/b418cab1e1ff87e0c0649ccbf379f47a32cc8be0) until [this](https://github.com/ritamcastro/testing-apps-with-rtl/tree/0a86f0665962340216873552b8df5e0d9610166b) commit. 
Having a `math` "service" available in the `calculator` is the way found to represent how mocking entire modules can be done. 
The `calculator` is also the place where testing a component created with a context is showncased. The `button` component has been styled with a dark and light theme and the tests show how that is done.

### Goodbye
The `goodbye` screen is used to wrap up our app. Not only it says a nice farewell to the user, but it also allows us to demostrate how to mock HTTP requests via the [icanhazdadjoke api](https://icanhazdadjoke.com/api). 

Finally, all three screens are connected and the app is put together on [your machine](localhost:8080).
Enjoy!


For comments, questions and suggestions, feel free to contact [me](mailto:ritamcastro@gmail.com)!
