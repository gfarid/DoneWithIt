import React , { useContext, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup';
import { AppForm , AppFormField , SubmitButton , ErrorMessage } from '../components/forms'
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
});

function LoginScreen(props) {
    const [loginFailed , setLoginFailed] = useState(false);
    const { login } = useAuth();

    const handleSubmit = async({email, password}) => {
        const res = await authApi.login(email ,password);
        if(!res.ok) return setLoginFailed(true);
        setLoginFailed(false);
        login(res.data);
    }

    return (
        <Screen style={styles.container}>
            <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
            <AppForm 
            initialValues={{email: '' , password: ''}} 
            onSubmit={handleSubmit} 
            validationSchema={validationSchema}
            >

                <ErrorMessage error='Invalid email and/or Password!' visible={loginFailed} />

                <AppFormField 
                    name='email'
                    icon='email' 
                    placeholder='Email' 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    keyboardType='email-address'
                    textContentType='emailAddress'
                />
                <AppFormField
                    name='password'
                    icon='lock'
                    placeholder='password' 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    textContentType='password'
                    secureTextEntry
                />
                <SubmitButton title='Login'/>
            </AppForm>
        </Screen>
    );
}

export default LoginScreen;


const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        marginTop: 50,
        marginBottom: 20,
        alignSelf: 'center'
    },
    container: {
        padding: 10
    }
})