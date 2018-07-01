import { AppRegistry } from 'react-native'
import App6 from './App6/App6'
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings (
    [ 'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader' ]
)
AppRegistry.registerComponent('space_monkey', () => App6)
