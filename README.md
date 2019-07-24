ATS test-7

Advanced Frontend Technical Test

libraries:
- create-react-app with typescript
- redux
- redux-sagas
- connected-react-router
- reselect
- immutable.js
- material-ui
- formik

features:
- add users (synchronous)
- add todos for users (synchronous)
- add todo from api if input left blank (asynchronous)

added features from test-6:
- ability to delete user
- ability to delete tasks
- ability to complete tasks (strike-through on list)
- ability to complete subtasks
- ability to create subtasks

todo:
- error messages and validation for input / add (e.g. user without name)

advanced tasks:
- fix displaying of todo values on todo card - don't put a delimiter if no value or empty values (;;; looks bad!)
- subtodo doesn't seem to work (redux-form) fix it
- fix edit fields (should load values when selecting card... but isn't!! what's wrong??)
- have todo edits update selected todo onChange instead of after clicking 'INPUT TODO'

how it should look:
![It was working](/test-7.gif?raw=true "Working")


=====================

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
