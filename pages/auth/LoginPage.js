import { Animated, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import LinearButton from '../../components/buttons/LinearButton';
import Svg, { Text as SvgText, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';



const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const AnimatedGradient = ({ style, children }) => {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 7000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const interpolateColors = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['#8B61EB', '#D13297', '#8B61EB'],
  });

  return (
    <AnimatedLinearGradient
      colors={[interpolateColors, '#D13297']}
      start={{ x: 0.1, y: 0.1 }}
      end={{ x: 0.9, y: 0.9 }}
      style={style}
    >
      {children}
    </AnimatedLinearGradient>
  );
};

export default function LoginPage() {
  const navigation = useNavigation();

  return (
    <View style={styles.general}>
      <AnimatedGradient
        colors={['#8B61EB', '#D13297']}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.9, y: 0.9 }}
        style={styles.top}
      >
        <View style={styles.topContent}>
          <Image style={{ marginTop: 80 }} source={require('../../assets/icon.png')} />
          <View style={styles.topInputs}>
            <View style={{ width: '100%' }}>
              <View style={{ width: '100%', marginTop: 10, }}>
                <Text style={styles.topInputText}>Эл. почта/Номер телефона</Text>
                <TextInput style={styles.topInput} />
              </View>
              <View style={{ width: '100%', marginTop: 10, }}>
                <Text style={styles.topInputText}>Пароль</Text>
                <TextInput style={styles.topInput} />

              </View>
              <View style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Забыли пароль?</Text>
              </View>
            </View>
          </View>
        </View>


      </AnimatedGradient>
      <View style={styles.bottom}>
        <View style={{ width: '60%' }}>
          <LinearButton buttonText="Войти" />
        </View>
        <View style={{ width: '60%' }}>
          <LinearGradient
            colors={['#CB379F', '#8C61EB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.buttonContainer}
          >
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <View style={styles.button}>
                <Svg height="17" width="200">
                  <Defs>
                    <SvgLinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <Stop offset="0%" stopColor="#CB379F" />
                      <Stop offset="100%" stopColor="#8C61EB" />
                    </SvgLinearGradient>
                  </Defs>
                  <SvgText
                    fill="url(#grad)"
                    fontSize="20"
                    fontFamily="Raleway-Bold" 
                    fontWeight="bold"
                    x="100"
                    y="15"
                    textAnchor="middle"
                  >
                    Регистрация
                  </SvgText>
                </Svg>
              </View>
            </TouchableOpacity>
          </LinearGradient>
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
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
    borderColor: 'rgba(255, 255, 255, 0.45)',
    padding: 10,
    paddingLeft:20,
    color:"white",
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
  forgotPassword: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'end',
    width: '100%',
    height: 50,
  },
  forgotPasswordText: {
    fontSize: 12,
    fontWeight: '300',
    lineHeight: 12,
    fontFamily: 'Raleway-Light',
    color: 'white',
    textAlign: 'right',
    width: '100%',
  },
  bottom: {
    width: '100%',
    height: '13%',
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    padding: 2,
    borderRadius: 25,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
