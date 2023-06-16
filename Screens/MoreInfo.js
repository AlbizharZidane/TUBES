import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from 'react';
import { Alert, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Button from '../components/Button';
import COLORS from '../constants/color';

const MoreInfo = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
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
    useEffect(() => {
        if (buttonClicked) {
            const navigateToHomePage = setTimeout(() => {
                navigation.navigate('MainMenu');
            }, 2000); // 2000 milliseconds = 2 seconds

            return () => clearTimeout(navigateToHomePage);
        }
    }, [navigation, buttonClicked]);

    const handleButtonClick = () => {
        setButtonClicked(true);
        navigation.navigate('Welcome');
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
                        WELCOME !!!
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black
                    }}>Please provide us with few more details</Text>
                </View>
                <View style={{
                    flexDirection: "row",

                }}>
                    <View style={{ width: "50%", paddingRight: 10 }}>
                        <Text style={{
                            fontSize: 12,
                            color: COLORS.black
                        }}>First Name</Text>
                        <View style={{

                            height: 48,
                            borderColor: COLORS.black,
                            borderWidth: 1,
                            borderRadius: 8,
                            alignItems: "center",
                            alignSelf: 'flex-start',
                            flexDirection: "row",
                            paddingHorizontal: 22
                        }}>
                            <TextInput
                                placeholderTextColor={COLORS.black}
                                placeholder='Nopal'
                                fontSize={18}
                                fontWeight='bold'
                                style={{
                                    width: "100%",
                                    borderLeftColor: COLORS.grey,
                                    height: "100%"
                                }}

                            />
                        </View>
                    </View>
                    <View style={{ width: "50%" }}>
                        <Text style={{
                            fontSize: 12,
                            color: COLORS.black
                        }}>Last Name</Text>
                        <View style={{

                            height: 48,
                            borderColor: COLORS.black,
                            borderWidth: 1,
                            borderRadius: 8,
                            alignItems: "center",
                            alignSelf: 'flex-start',
                            flexDirection: "row",
                            paddingHorizontal: 22
                        }}>
                            <TextInput
                                placeholder='Konteng'
                                fontSize={18}
                                fontWeight='bold'
                                placeholderTextColor={COLORS.black}
                                style={{
                                    width: "100%",
                                    borderLeftColor: COLORS.grey,
                                    height: "100%"
                                }}

                            />
                        </View>
                    </View>
                </View>

                <Text style={{
                    fontSize: 12,
                    color: COLORS.black
                }}>Email</Text>
                <View style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22,

                }}>
                    <TextInput
                        placeholder='Nopalkonteng88@google.com'
                        fontSize={18}
                        fontWeight='bold'
                        placeholderTextColor={COLORS.black}
                        keyboardType='email-address'
                        style={{
                            width: "100%",
                            color: COLORS.black
                        }}
                    />
                </View>

                <Text style={{
                    fontSize: 12,
                    color: COLORS.black
                }}>Password</Text>
                <View style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22
                }}>
                    <TextInput
                        fontSize={18}
                        fontWeight='bold'
                        placeholderTextColor={COLORS.black}
                        secureTextEntry={isPasswordShown}
                        style={{
                            width: "100%",
                            color: COLORS.black
                        }}
                    />

                    <TouchableOpacity
                        onPress={() => setIsPasswordShown(!isPasswordShown)}
                        style={{
                            position: "absolute",
                            right: 12

                        }}
                    >
                        {
                            isPasswordShown == true ? (
                                <Ionicons name="lock-closed-outline" size={24} color={COLORS.black} />
                            ) : (
                                <Ionicons name="lock-open-outline" size={24} color={COLORS.black} />
                            )
                        }
                    </TouchableOpacity>
                </View>


                <Button
                    title="Continue"
                    onPress={handleButtonClick}
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

export default MoreInfo