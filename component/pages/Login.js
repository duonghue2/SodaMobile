import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    Text,
    StatusBar,
    TextInput,
    ScrollView,
    Button,
    ToastAndroid
} from "react-native";
export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: null,
            password: null,
            visible: false,
            icon: require('../../assets/icon/eyeclose.png')
        }
    }
    onChangeVisible = () => {
        this.state.visible = !this.state.visible;
        if (this.state.visible) {
            this.state.icon = require('../../assets/icon/eyesOpen.png');
        }
        else this.state.icon = require('../../assets/icon/eyeclose.png');
        this.setState(this.state);
    }
    render() {

        return (
            <SafeAreaView style={styles.container}>
                <StatusBar
                    animated={true}
                />

                <View style={{ justifyContent: 'center', flexDirection: 'row', marginBottom: 20 }}>
                    <Image source={require("../../assets/logo.png")} style={{ height: 91, width: 89 }} />
                </View>
                <View style={styles.SectionStyle}>
                    <Image
                        source={require('../../assets/icon/user.png')} //Change your icon image here
                        style={styles.ImageStyle}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={e => this.setState({ username: e })}
                        placeholder="Email or username"
                        keyboardType="default"
                    />
                </View>
                <View style={styles.SectionStyle}>
                    <Image
                        source={require('../../assets/icon/lock.png')} //Change your icon image here
                        style={styles.ImageStyle}
                    />
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={e => this.setState({ password: e })}
                        placeholder="Password"
                        keyboardType=""
                    />
                    <TouchableOpacity onPress={this.onChangeVisible}>
                        <Image
                            source={this.state.icon} //Change your icon image here
                            style={styles.ImageStyle}
                        />
                    </TouchableOpacity>
                    <Text>Forgot?</Text>
                </View>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={{ color: 'white' }}>Log in</Text>
                </TouchableOpacity>
                <Text style={{ color: '#1973C6', fontSize: 15 }}>Register</Text>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10, fontSize: 15 }}>
                        <Text>Or</Text>
                    </View>
                    <View style={styles.continueView}>
                        <Image source={require('../../assets/icon/google.png')} style={{ height: 30, width: 30 }}></Image>
                        <TouchableOpacity style={styles.continue}>
                            <Text style={{ color: 'white' }}>Continoues with Google</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.continueView}>
                        <Image source={require('../../assets/icon/facebook.png')} style={{ height: 30, width: 30 }}></Image>
                        <TouchableOpacity style={styles.continue}>
                            <Text style={{ color: 'white' }}>Continoues with facebook</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 20
    },
    center: {
        display: 'flex',
        justifyContent: 'center'
    },
    input: {
        flex: 1,
        fontSize: 12
    },
    ImageStyle: {
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
        marginRight: 10
    },
    SectionStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        marginBottom: 10,
        borderRadius: 5,
        paddingLeft: 10,

    },
    loginButton: {
        backgroundColor: '#82C8EF',
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    }, continue: {
        backgroundColor: '#82C8EF',

        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1
    },
    continueView: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#82C8EF',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        marginBottom: 10


    }
})