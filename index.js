import React from 'react'
import { AppRegistry } from 'react-native'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'

import reducers from './Store/reducers'

import App7 from './App7/App7'
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings (
    [ 'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader' ]
)

const createStoreWithMiddleWare = applyMiddleware(promiseMiddleware)(createStore)

const AppRedux = () => (
    <Provider store={createStoreWithMiddleWare(reducers)}>
        <App7 />
    </Provider>
)



AppRegistry.registerComponent('space_monkey', () => AppRedux)
