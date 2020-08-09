import React from "react";
import ReactDOM from "react-dom";
import { store } from './app/lib/store'
import { Provider } from 'react-redux'
import { AppContainer  } from './app/views/containers'

// Log initialState
// console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()));
unsubscribe()

ReactDOM.render(
    <Provider store={store}>
        {/* <App /> */}
        <AppContainer/>
    </Provider>
    , document.getElementById("root")
);


