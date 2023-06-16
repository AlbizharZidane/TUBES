import { Ionicons } from "@expo/vector-icons";
import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Button from '../components/Button';
import COLORS from '../constants/color';

const Register = ({ navigation }) => {
    const backAction = () => {
        Alert.alert(
            "Confirmation",
            "Are you sure you want to go back?",
            [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => navigation.goBack() }
            ]
        );
    };


    const [inputsContainerY, setInputsContainerY] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownLayout, setDropdownLayout] = useState({});
    const [phoneNumber, setPhoneNumber] = useState('');

    const closeDropdown = (pageX, pageY) => {
        if (isDropdownOpen) {
            if (
                pageX < dropdownLayout?.x ||
                pageX > dropdownLayout?.x + dropdownLayout?.width ||
                pageY < dropdownLayout?.y ||
                pageY > dropdownLayout?.y + dropdownLayout?.height
            ) {
                setIsDropdownOpen(false);
            }
        }
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Pressable style={{ paddingLeft: 10, marginTop: 22 }}
                onPress={backAction}>
                <Ionicons name="chevron-back" size={24} color={COLORS.black} />
            </Pressable>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black
                    }}>
                        Enter your phone number
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black
                    }}>Login or sign up to place your order</Text>
                </View>
                <View style={{ marginBottom: 12 }}>
                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='+62'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={{
                                width: "12%",
                                borderRightWidth: 1,
                                borderLeftColor: COLORS.grey,
                                height: "100%"
                            }}
                            onChangeText={text =>
                                setPhoneNumber(text)
                            }
                        />

                        <TextInput
                            placeholder='Enter your phone number'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={{
                                width: "80%"
                            }}
                        />
                    </View>
                </View>

                <Button
                    title="Continue"
                    onPress={() =>
                        navigation.navigate('Verify', { phoneNumber })
                    }
                    filled
                    style={{
                        fontWeight: "bold",
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({


    inputsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 50,
    },
    countryListContainer: {
        backgroundColor: COLORS.LIGHT_GREY,
        width: 22,
        marginRight: 10,
        borderRadius: 8,
        height: 6,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: COLORS.LIGHT_GREY2,
        flexDirection: 'row',
    },
    phoneInputContainer: {
        backgroundColor: COLORS.LIGHT_GREY,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: COLORS.LIGHT_GREY2,
        justifyContent: 'center',
        flex: 1,
    },
    flatIcon: {
        height: 20,
        width: 20,
    },
    countryCodeText: {
        fontSize: 14,
        lineHeight: 14 * 1.4,
        color: COLORS.DEFAULT_BLACK,
    },
    inputText: {
        fontSize: 18,
        textAlignVertical: 'center',
        padding: 0,
        height: 6,
        color: COLORS.DEFAULT_BLACK,
    },
    countryDropdown: {
        backgroundColor: COLORS.LIGHT_GREY,
        position: 'absolute',
        width: 80,
        height: 50,
        marginLeft: 20,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: COLORS.LIGHT_GREY2,
        zIndex: 3,
    },
});
export default Register