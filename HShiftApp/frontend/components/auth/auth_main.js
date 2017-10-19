import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';
import LogInNavigator from './login_navigator';
import SignUp from './signup';
import {StackNavigator} from 'react-navigation';

const MainNav = StackNavigator({
  LogIn: {screen: LogInNavigator},
  SignUp: {screen: SignUp}
});

class AuthMain extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <MainNav/>
    );
  }

};

export default AuthMain;
