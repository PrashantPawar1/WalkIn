import { StackNavigator, NavigationActions } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import { Dimensions } from 'react-native';



import SplashContainer from './SplashContainer';
import CafeListViewContainer from './CafeListViewContainer';
import CartListContainer from './CartListContainer'

const { width } = Dimensions.get('window');

const AppNavigator = StackNavigator(
    {
        Splash: { screen: SplashContainer },
        CafeList: { screen: CafeListViewContainer },
        CartList:{screen:CartListContainer}
    },
    {
        transitionConfig: getSlideFromRightTransition,
    },
);
export default AppNavigator;
