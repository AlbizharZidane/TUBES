import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/color';

const Homepage = () => {
    const navigation = useNavigation();

    const handleButtonPress = () => {
        navigation.navigate('AnotherScreen');
    };


    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{
                marginTop: 12,
            }}>
                <View style={{
                    height: 48,
                    borderColor: COLORS.grey,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingLeft: 12,
                    marginHorizontal: 12
                }}>
                    <Ionicons name="search" size={24} color={COLORS.black} />

                    <TextInput

                        placeholderTextColor={COLORS.black}
                        keyboardType='numeric'
                        style={{
                            width: "100%",
                            paddingLeft: 12,
                        }}
                    />
                </View>

            </View>
            <Text style={{
                fontSize: 22,
                fontWeight: 'bold',
                marginVertical: 12,
                color: COLORS.black
            }}>
                WELCOME !!!

            </Text>
            <Button title="Go to Another Screen" onPress={handleButtonPress} />

        </SafeAreaView>
    )
}

export default Homepage