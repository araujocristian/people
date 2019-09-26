import {createAppContainer, createStackNavigator} from 'react-navigation';
import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailsPage from './src/pages/PeopleDetailsPage';

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: PeoplePage,
    },
    PeopleDetails: {
      screen: PeopleDetailsPage,
      navigationOptions: ({
        navigation: {
          state: {
            params: {people},
          },
        },
      }) => {
        const {
          name: {first},
        } = people;
        return {
          title: first,
          headerTitleStyle: {
            color: '#fff',
            fontSize: 30,
            textTransform: 'capitalize',
          },
        };
      },
    },
  },
  {
    defaultNavigationOptions: {
      title: 'Pessoas',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5',
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 30,
        flexGrow: 1,
        textAlign: 'center',
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
