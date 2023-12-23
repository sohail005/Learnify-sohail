import { Alert, Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useRef, useState } from 'react'

const OTPScreen = () => {
    const { height, width, fontScale } = useWindowDimensions();

    const [otp, setOtp] = useState('');
    const [otpDigits, setOtpDigits] = useState(Array(4).fill(''));

    const handleChange = (index, value) => {
        const newDigits = otpDigits.map((digit, i) => (i === index ? value : digit));
        setOtpDigits(newDigits);
        setOtp(newDigits.join(''));

        if (value.length === 1) {
            Keyboard.dismiss();
            const nextIndex = index + 1;
            if (nextIndex < otpDigits.length) {
                const nextInputRef = refs.current[nextIndex];
                nextInputRef.focus();
            }
        }
    };

    const refs = useRef(Array(6).fill(null));



    return (
        <View style={styles.conatiner}>
            <Text style={styles.screenName}>OTP Verify</Text>
            <Image source={require('../Assets/LoginImage.jpg')} style={[styles.image, { width: width, height: height / 2 }]} />

            <Text style={styles.otpsentto}>OTP Sent to</Text>
            <Text style={styles.number}>+92 8777654676</Text>

            <View style={styles.otpinputContainer}>
                {otpDigits.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => refs.current[index] = ref}
                        style={styles.otpInput}
                        value={digit}
                        onChangeText={(value) => handleChange(index, value)}
                        keyboardType="numeric"
                        maxLength={1}
                        autoFocus={index === 0}
                    />
                ))}
            </View>

            <TouchableOpacity onPress={() => Alert.alert('“Your details has been submitted”')} activeOpacity={0.6} style={[styles.btn, { width: width - 50 }]}>
                <Text style={styles.btntext}>Verify OTP</Text>
            </TouchableOpacity>

            <Text style={[styles.suggetiontext, { width: width - 50 }]}>By signing up, you agree with our Terms and conditions</Text>

        </View>
    )
}

export default OTPScreen

const styles = StyleSheet.create({
    conatiner: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center'
    },
    otpinputContainer: {
        flexDirection: 'row',
    },
    otpInput: {
        backgroundColor: '#f7f7f7',
        flexDirection: 'row',
        padding: 10,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 15,
        textAlign: 'center',
        margin: 8,
        width: 60,
        color: '#000'
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
    },
    otpsentto:{
        color:'gray',
        fontSize:16,
        width:'100%',
        textAlign:'center',
            },
    number:{
        color:'#000',
        fontSize:18,
        width:'100%',
        textAlign:'center',
        fontWeight:'900',
        marginBottom:15
    }

})