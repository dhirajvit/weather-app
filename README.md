#Weather app

#setup:
npm install
npm start

Test:
npm test

#Decision:

1. redux is for state management. For a one page or simple page application, it is actually not required. Context would be a better choice here. but I chosed redux for demo.

2. Sass is chosen for styling. I consider styled-component as better options these days.

3. Create-react-app is used for scaffolding. I consider webpack as better option to start a production type project because it gives more control over changes. I used cra to save time.

#Assumptions:

1. The default user location is sydney. In Real, this data would be in users profile who has logged in.

#Defects:

1. The date is coming to be 1970's which needs to be debugged.

#Enhancement:

1. Increase test coverage to include redux
