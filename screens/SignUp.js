
import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, View, Text, ScrollView } from 'react-native';
import { Formik } from 'formik';
import Logo from '../components/Logo';
import { RadioButton } from 'react-native-paper';
import * as yup from 'yup';


export default function SignUp({ navigation }) {
    const [value, setValue] = React.useState('student');
    //validations
    const reviewformschema = yup.object({
        Firstname: yup.string()
            .required()
            .min(4),
        Lastname: yup.string()
            .required()
            .min(4),
        Email: yup.string()
            .required()
            .email(),
        Mobile: yup.string()
            .required()
            .min(10)
            .max(10),
        password: yup.string()
            .required()
            .min(8),
        confirm_password: yup.string()
            .required()
            .min(8)
            .test('passwords-match', 'Passwords must match ', function (value) {
                return this.parent.password === value;
            })
    });

    return (
        //Sign Up form
        <ScrollView >
            <View style={styles.container}>
                <Logo />

                <View style={{ marginTop: 1 }}>
                    <Text style={styles.title}>Sign Up </Text>


                    <Formik
                        initialValues={{ Firstname: '', Lastname: '', Email: '', Mobile: '', password: '', confirm_password: '' }}
                        validationSchema={reviewformschema}
                        onSubmit={(values, actions) => {
                            console.log(values);
                            actions.resetForm();
                        }}>

                        {(props) => (

                            <View>
                                <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                                    <View style={{ flexDirection: 'row', paddingLeft: 180 }}>
                                        <RadioButton value='Student'></RadioButton><Text style={{ marginTop: 6 }}>I am student</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingLeft: 180 }}>
                                        <RadioButton value='Teacher'></RadioButton><Text style={{ marginTop: 6 }}>I am Teacher</Text>
                                    </View>
                                </RadioButton.Group>

                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter First name'
                                    onChangeText={props.handleChange('Firstname')}
                                    value={props.values.Firstname}
                                    onBlur={props.handleBlur('Firstname')}
                                />
                                <Text style={styles.errorText}>{props.touched.Firstname && props.errors.Firstname}</Text>

                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter Last name'
                                    onChangeText={props.handleChange('Lastname')}
                                    value={props.values.Lastname}
                                    onBlur={props.handleBlur('Lastname')}
                                />
                                <Text style={styles.errorText}>{props.touched.Lastname && props.errors.Lastname}</Text>

                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter e-mail id'
                                    onChangeText={props.handleChange('Email')}
                                    value={props.values.Email}
                                    onBlur={props.handleBlur('Email')}
                                />
                                <Text style={styles.errorText}>{props.touched.Email && props.errors.Email}</Text>

                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter mobile no.'
                                    onChangeText={props.handleChange('Mobile')}
                                    value={props.values.Mobile}
                                    keyboardType='numeric'
                                    onBlur={props.handleBlur('Mobile')}
                                />
                                <Text style={styles.errorText}>{props.touched.Mobile && props.errors.Mobile}</Text>

                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter password'
                                    onChangeText={props.handleChange('password')}
                                    value={props.values.password}
                                    onBlur={props.handleBlur('password')}
                                />
                                <Text style={styles.errorText}>{props.touched.password && props.errors.password}</Text>

                                <TextInput
                                    style={styles.input}
                                    placeholder='Confirm Password'
                                    onChangeText={props.handleChange('confirm_password')}
                                    value={props.values.confirm_password}
                                    onBlur={props.handleBlur('confirm_password')}
                                />
                                <Text style={styles.errorText}>{props.touched.confirm_password && props.errors.confirm_password}</Text>

                                <View style={styles.btn}>
                                    <Button title="Create Account" onPress={props.handleSubmit} />
                                </View>

                            </View>

                        )}

                    </Formik>
                </View>

            </View >
        </ScrollView>

    );
}

//styling
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',

    },
    input: {
        backgroundColor: '#ddd',
        borderRadius: 10,
        color: 'black',
        fontSize: 15,
        paddingTop: 5,
        padding: 5,
        margin: 5,
        height: 50,
        width: 300,
    },
    title: {
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: 25,
        color: '#2196F3',
        marginTop:10

    },
    btn: {
        padding: 18,
        color: 'blue',
        width: '80%',
        borderRadius: 10,
        height: '15%',
        margin: 5,
        alignContent: 'center',
        paddingLeft: 80
    },
    errorText: {
        color: 'crimson',
        fontWeight: "bold",
        marginBottom: 3,
        marginTop: 3,
        textAlign: "center"
    }

})

