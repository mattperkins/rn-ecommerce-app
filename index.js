import { AppRegistry } from 'react-native'
import App5 from './App5/App5'
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings (
    [ 'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader' ]
)
AppRegistry.registerComponent('space_monkey', () => App5)
