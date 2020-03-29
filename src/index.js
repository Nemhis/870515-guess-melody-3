import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/app/app.jsx';
import questions from './mocks/questions';
import {reducer} from './reducer';

const Settings = {
  ERRORS_COUNT: 3,
};
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App questions={questions} errorsCount={Settings.ERRORS_COUNT}/>
    </Provider>,
    document.getElementById(`root`)
);
