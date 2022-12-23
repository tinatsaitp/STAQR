import React from 'react';
import {AuthProvider} from './src/context/AuthContext';
import AppNavigator from './src/screens/appNavigator';


const App = () => {
  return (
      <AuthProvider>
          <AppNavigator style={{height: '100%'}}/>
      </AuthProvider>
  );
};

export default App;
