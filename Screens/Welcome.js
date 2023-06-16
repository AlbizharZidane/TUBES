import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/color';

const Welcome = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 300
            }}>
                <Text
                    style={{
                        fontSize: 32,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.primary
                    }}>
                    Hello, Teng
                </Text>
                <Text style={{
                    fontSize: 22,
                    fontWeight: 'semibold',
                    marginVertical: 12,
                    color: COLORS.primary
                }}>
                    Thanks For Joining!
                </Text>
            </View>


        </SafeAreaView>
    )
}

export default Welcome