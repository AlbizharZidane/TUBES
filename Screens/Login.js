import { Ionicons } from "@expo/vector-icons";
import React, { useState } from 'react';
import { Alert, Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Button from '../components/Button';
import COLORS from '../constants/color';

const Login = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        const validEmail = 'admin@gmail.com';
        const validPassword = 'password';
        if (email === validEmail && password === validPassword) {
            setTimeout(() => {
                navigation.navigate("MainMenu");
            }, 2000);
        } else {
            Alert.alert('Invalid Credentials', 'Please enter a valid email and password.');
        }
    };


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <View style={{ flex: 1 }}>
                <View>
                    <Image
                        source={require("../assets/brew-logo-1.png")}
                        style={{
                            height: 400,
                            width: 400,
                            borderRadius: 0,
                            position: "absolute",
                            top: 100,
                        }}
                    />

                </View>
                {/* Input */}
                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 400,
                    width: "100%"
                }}>
                    <View style={{
                        marginTop: 12,
                    }}>
                        <View style={{
                            width: "100%",
                            height: 48,
                            borderColor: COLORS.white,
                            borderWidth: 1,
                            borderRadius: 8,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingLeft: 22

                        }}>
                            <TextInput
                                placeholder='EMAIL.ID'
                                placeholderTextColor={COLORS.white}
                                keyboardType='email-address'
                                style={{
                                    width: "100%",
                                    color: COLORS.white
                                }}
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>
                    </View>

                    <View style={{ marginTop: 12 }}>


                        <View style={{
                            width: "100%",
                            height: 48,
                            borderColor: COLORS.white,
                            borderWidth: 1,
                            borderRadius: 8,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingLeft: 22
                        }}>
                            <TextInput
                                placeholder='PASSWORD'
                                placeholderTextColor={COLORS.white}
                                secureTextEntry={isPasswordShown}
                                style={{
                                    width: "100%",
                                    color: COLORS.white
                                }}
                                value={password}
                                onChangeText={setPassword}
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
                                        <Ionicons name="lock-closed-outline" size={24} color={COLORS.white} />
                                    ) : (
                                        <Ionicons name="lock-open-outline" size={24} color={COLORS.white} />
                                    )
                                }

                            </TouchableOpacity>
                        </View>
                    </View>
                    <Button
                        onPress={handleLogin}
                        title="LOGIN"
                        style={{
                            marginTop: 18,
                            marginBottom: 4,
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        marginVertical: 22
                    }}>
                        <Pressable
                            onPress={() => navigation.navigate("Register")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.white,
                                fontWeight: "bold",
                                marginLeft: 6
                            }}>Register</Text>
                        </Pressable>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Login