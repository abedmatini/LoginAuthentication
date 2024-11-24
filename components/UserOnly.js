import React, { useContext } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { AuthContext } from './AuthProvider';

function ProtectedScreen() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Text>Please log in to access this screen.</Text>;
  }

//   if (user.role === 'admin') {
//     return (
//       <View style={styles.container}>
//         <Text>Access Granted. Welcome Admin!</Text>
//       </View>
//     );
//   }

  if (user.role === 'user') {
    return (
      <View style={styles.container}>
        <Text>Welcome User jan!</Text>
      </View>
    );
  }

  return (
    <Text testID='accessDeniedMessage'>Access Denied. Only admins can view this screen.</Text>

  );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProtectedScreen;