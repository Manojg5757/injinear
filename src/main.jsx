import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store/store.js'
import AppWrapper from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <AppWrapper />
    </PersistGate>
 </Provider>
)
