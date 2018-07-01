import { AppRegistry } from 'react-native'
import App4 from './App4/App4'
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings (
    [ 'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader' ]
)
AppRegistry.registerComponent('space_monkey', () => App4)
