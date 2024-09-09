import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [userID, setUserID] = useState('');

  const validateInputs = () => {
    if (!username || !userID) {
      Alert.alert('Validation Error', 'Both fields are required.');
      return;
    }

    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(username)) {
      Alert.alert('Validation Error', 'Username must contain only alphabets.');
      return;
    }

    const idRegex = /^\d{4}$/;
    if (!idRegex.test(userID)) {
      Alert.alert('Validation Error', 'ID must be a 4-digit number.');
      return;
    }

    Alert.alert('Success', 'Both username and ID are valid!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          value={username}
          onChangeText={text => setUsername(text)}
        />
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.label}>User ID:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter 4-digit User ID"
          value={userID}
          onChangeText={text => setUserID(text)}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={validateInputs}>
        <Text style={styles.buttonText}>Validate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
    backgroundColor: '#a8a39d',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    flex: 1,
    textAlignVertical: 'center',
    color: '#2b2b2b',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#fa6900',
    borderRadius: 8,
    borderWidth: 2,
    flex: 2,
    marginLeft: 10,
    paddingHorizontal: 10,
    backgroundColor: '#e2ddd9',
  },
  button: {
    backgroundColor: '#fa6900',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#f8f1e9',
    fontSize: 18,
  },
});

export default App;
