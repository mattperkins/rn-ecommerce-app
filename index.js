import { AppRegistry } from 'react-native'
import App from './App/App'
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings (
    [ 'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader' ]
)
AppRegistry.registerComponent('space_monkey', () => App)
