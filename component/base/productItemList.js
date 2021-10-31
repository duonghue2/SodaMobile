import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Image, Text } from "react-native";
export default class ProductItemList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.product}>
                <Image style={styles.imageProduct}
                    source={require('../../assets/image/2-11.jpg')}
                ></Image>
                <Text style={{ fontSize: 12 }}> Áo sơ mi</Text>
                <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', }}>
                    <View><Text style={{ fontSize: 12 }}> $200</Text></View>
                    <View><Text style={{ fontSize: 12 }}>Đã bán 200</Text></View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    product: {

        width: '48%',
        borderBottomColor: 'black',
        marginBottom: 10
    },
    imageProduct: {
        height: 161,
        width: 'auto'
    }

})