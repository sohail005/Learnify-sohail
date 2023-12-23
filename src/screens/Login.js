import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'

const Login = ({ navigation }) => {
    const { height, width, fontScale } = useWindowDimensions();
    const [mobile, setMobile] = useState("")
    return (
        <View style={styles.container}>
            <Text style={styles.screenName}>Log in</Text>

            <Image source={require('../Assets/LoginImage.jpg')} style={[styles.image, { width: width, height: height / 2 }]} />

            <View style={[styles.textInputContainer, { width: width - 50 }]}>
                <View style={styles.countrycodeContainer}>
                    <Text style={styles.countrycode}>+91</Text>
                    <Image source={require('../Assets/down-arrow.png')} style={[styles.image, { width: 15, height: 15, paddingRight: 5, tintColor: 'gray' }]} />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    placeholderTextColor={'gray'}
                    value={mobile}
                    maxLength={10}
                    keyboardType='number-pad'
                    onChangeText={(text) => setMobile(text)}
                />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('OTPScreen')} activeOpacity={0.6} style={[styles.btn, { width: width - 50 }]}>
                <Text style={styles.btntext}>Get OTP</Text>
            </TouchableOpacity>

            <Text style={[styles.suggetiontext, { width: width - 50 }]}>By signing up, you agree with our Terms and conditions</Text>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center'
    },
    screenName: {
        color: '#000',
        fontSize: 26,
        textAlign: 'center',
        fontWeight: '900',
        marginTop: 30
    },
    image: {
        alignSelf: 'center',

    },
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 100 / 2,
        backgroundColor: '#f7f7f7'
    },
    input: {
        padding: 12,
        width: '80%',
        color: '#000',
        fontSize: 14
    },
    countrycode: {
        color: 'gray',
        fontSize: 14,
        width: 30
    },
    countrycodeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15
    },
    btn: {
        backgroundColor: '#ab3807',
        borderRadius: 100 / 2,
        marginVertical: 35
    },
    btntext: {
        padding: 16,
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '700'

    },
    suggetiontext: {
        color: 'gray',
        textAlign: 'center'
    }
})