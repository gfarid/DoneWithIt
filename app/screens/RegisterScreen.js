import React , { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm , AppFormField , ErrorMessage, SubmitButton } from '../components/forms'
import authApi from '../api/auth';
import useAuth from "../auth/useAuth";
import usersApi from "../api/users";
import ActivityIndicator from "../components/ActivityIndicator";
import LogBoxInspectorContainer from "react-native/Libraries/LogBox/LogBoxInspectorContainer";
import useApi from "../hooks/useApi";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const [error , setError] = useState(false);
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const { login } = useAuth();

  const handleSubmit  = async (userInfo)=>{
        const res = await registerApi.request(userInfo);
    console.log(userInfo)
        if(!res.ok) {
          if(res.data) setError(res.data.error);
          else {
            setError('An unexpected error occured.');
            console.log(res);
          }
          return;
        }

        const { data : authToken } = await loginApi.request(
          userInfo.email,
          userInfo.password
        );
        login(authToken);
  }
  return (
    <>
    <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />

        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register"/>
      </AppForm>
    </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;