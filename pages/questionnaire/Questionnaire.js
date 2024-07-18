import React, { useEffect } from 'react';
import { View, StyleSheet, Animated, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LinearButton from '../../components/buttons/LinearButton';
import { useNavigation } from '@react-navigation/native';
import AnimatedGradient from '../../components/gradient/AnimatedLinearGradient';
import { SelectList } from 'react-native-dropdown-select-list';

import AntDesign from '@expo/vector-icons/AntDesign';


export default function Questionnaire() {
    const navigation = useNavigation();
    const [selected, setSelected] = React.useState("");

    const data = [
        { key: '1', value: 'Мужской' },
        { key: '2', value: 'Женский' },
    ]
    return (
        <View style={styles.general}>
            <AnimatedGradient style={styles.top}>
                <View style={styles.topContent}>
                    <Image style={{ marginTop: 80 }} source={require('../../assets/icon.png')} />
                    <View style={styles.topInputs}>
                        <View style={{ width: '100%' }}>
                            <View style={{ width: '100%', marginTop: 10 }}>
                                <Text style={styles.topInputText}>Ваше имя</Text>
                                <TextInput style={styles.topInput} />
                            </View>
                            <View style={{ width: '100%', marginTop: 10 }}>
                                <Text style={styles.topInputText}>Ваш возраст</Text>
                                <TextInput
                                    keyboardType="numeric"
                                    style={styles.topInput} />
                            </View>

                            <View style={{ width: '100%', marginTop: 10 }}>
                                <Text style={styles.topInputText}>Ваш пол</Text>
                                <SelectList
                                    setSelected={(val) => setSelected(val)}
                                    data={data}
                                    search={false}
                                    save="value"
                                    boxStyles={{ ...styles.topInput, color: "white", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} e
                                    dropdownStyles={{
                                        borderWidth: 1,
                                        borderColor: 'rgba(255, 255, 255, 0.45)',
                                        borderRadius: 10,
                                        width: "100%",
                                    }}
                                    defaultOption={{ key: '1', value: 'Мужской' }}
                                    arrowicon={<AntDesign name="down" size={13} color="white" />}
                                    inputStyles={{ color: "white" }}
                                    dropdownItemStyles={{ borderColor: "white" }}
                                    dropdownTextStyles={{ color: "white" }}

                                    style={styles.topInput}
                                />

                            </View>
                        </View>
                    </View>
                </View>
            </AnimatedGradient>
            <View style={styles.bottom}>
                <View style={{ width: '60%' }}>
                    <TouchableOpacity>
                        <LinearButton buttonText="Вперед" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    general: {
        height: '100%',
        backgroundColor: 'white',
    },
    top: {
        width: '100%',
        height: '70%',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
    },
    topContent: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '90%',
    },
    topInputs: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    topInput: {
        width: '100%',
        height: 50,
        borderRadius: 60,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.45)',
        color: 'white',
        padding: 10,
        paddingLeft: 20,
    },
    topInputText: {
        color: 'rgba(250, 250, 250, 1)',
        fontFamily: 'Raleway-Light',
        fontSize: 12,
        fontWeight: '300',
        lineHeight: 12,
        marginLeft: 20,
        marginBottom: 5,
    },
    bottom: {
        width: '100%',
        height: '13%',
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
