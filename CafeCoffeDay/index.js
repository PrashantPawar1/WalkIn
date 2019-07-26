/**
 * @format
 */

import {AppRegistry} from 'react-native';
import CafeDayAppContainer from './src/mobile/container/CafeDayAppContainer';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => CafeDayAppContainer);
