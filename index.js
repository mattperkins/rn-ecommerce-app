import { AppRegistry } from 'react-native'
import App7 from './App7/App7'
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings (
    [ 'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader' ]
)
AppRegistry.registerComponent('space_monkey', () => App7)
