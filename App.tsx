import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, Text, View, Animated, Image, Dimensions } from 'react-native';

import data from './data';
import Earphone from './src/components/Earphone';

const { width, height } = Dimensions.get('window');

export default function App() {
  const scrollX = useRef(new Animated.Value(0)).current

  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden />

      {data.map((data, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width
        ]

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0]
        })

        return (
          <Animated.View key={index} style={[
            StyleSheet.absoluteFillObject,
            {
              backgroundColor: data.color,
              opacity
            }
          ]} />
        )
      })}

      <Animated.FlatList
        keyExtractor={({ key }) => key}
        data={data}
        renderItem={({ item, index }) => (
          <Earphone
            {...item}
            index={index}
            scrollX={scrollX}
          />
        )}
        pagingEnabled={true}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      />

      <Image
        style={styles.logo}
        source={require('./assets/ue_black_logo.png')}
      />
    </View>
  );
}

const LOGO_WIDTH = 220;
const LOGO_HEIGHT = 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    position: 'absolute',
    opacity: 0.9,
    resizeMode: 'contain',
    left: 10,
    bottom: 10,
    width: LOGO_WIDTH,
    height: LOGO_HEIGHT,
    transform: [
      { translateX: -LOGO_WIDTH / 2, },
      { translateY: -LOGO_HEIGHT / 2, },
      { rotateZ: '-90deg' },
      { translateX: LOGO_WIDTH / 2, },
      { translateY: LOGO_HEIGHT / 2, },
    ]
  }
});
