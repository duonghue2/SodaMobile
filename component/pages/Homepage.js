/* eslint-disable prettier/prettier */
import React from 'react'
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
    Button
} from "react-native";
import ProductItemList from '../base/productItemList';
import Header from '../base/header'

var list = [1, 1, 1, 1, 1, 1, 1, 1]
export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: null,
            errorText: null,
            showConnect: false,
            isValid: true
        }
    }
    back = () => {

    }
    goToMenu = (i) => {
        switch (i) {
            case 0: ;
            case 1: ;
            case 2: ;
            case 3: ;
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar
                    animated={true}
                />
                <ScrollView >
                    <Header isBack={false} />
                    <Image source={require("../../assets/image/female.jpg")} style={styles.banner} />
                    <View style={styles.menu}>
                        <TouchableOpacity style={styles.menuItem} onPress={this.goToMenu(0)}>

                            <Image source={require('../../assets/icon/home.png')} style={{ height: 40, width: 40 }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItem} onPress={this.goToMenu(1)}>
                            <Text>Man</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem} onPress={this.goToMenu(2)}>
                            <Text>Women</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem} onPress={this.goToMenu(3)}>
                            <Text>Accessory</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.itemList}>
                        {list.map((data, index) => <ProductItemList key={index} />)}
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
        //  paddingTop: StatusBar.currentHeight,
    },
    banner: {
        width: '100%',
        height: 203
    },
    menu: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 10
    },
    menuItem: {
        width: 100,
        fontSize: 12,


    },
    itemList: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        backgroundColor: "#D6D6D6"
    }
});