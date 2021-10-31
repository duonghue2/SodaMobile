/* eslint-disable prettier/prettier */
import React from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Image } from "react-native";
export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    back = () => {

    }
    render() {
        let { isBack, isSearch, isCart, isUser, isFilter } = this.props
        if (isBack === undefined) {
            isBack = true;
        }
        if (isSearch === undefined) {

        }
        return (

            <View style={styles.header}>

                <TouchableOpacity onPress={this.back()} display={this.props.isBack} >
                    <Image source={require('../../assets/icon/back.png')} style={{ height: 30, width: 35 }} />
                </TouchableOpacity>
                <TextInput style={styles.input} display={this.props.isSearch}
                    placeholder='T-shirt'
                    value={"ACDE"}
                    onChange={this.back()}
                />
                <TouchableOpacity onPress={this.back()} display={this.props.isFilter}>
                    <Image source={require('../../assets/icon/filter.png')} style={{ height: 30, width: 35 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.back()} display={this.props.isCart}>
                    <Image source={require('../../assets/icon/cart.png')} style={styles.icon} />

                </TouchableOpacity>
                <TouchableOpacity onPress={this.back()} style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }} display={this.props.isUser}>
                    <Image source={require('../../assets/icon/user.png')} style={{ height: 35, width: 30 }} />

                </TouchableOpacity>
            </View>

        );
    }

};

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    icon: { height: 50, width: 50 },
    input: {
        height: 30,
        margin: 12,
        flex: 2,
        borderWidth: 1,
        paddingLeft: 5,
        borderColor: '#585858',
        borderRadius: 5
    },
});
