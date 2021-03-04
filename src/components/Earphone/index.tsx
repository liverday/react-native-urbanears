import React from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';

import { Data } from '../../../data';

interface EarphoneProps extends Data {
    scrollX: Animated.Value;
    index: number;
}

const { width, height } = Dimensions.get('window');

const Earphone: React.FC<EarphoneProps> = ({ 
    scrollX, 
    index, 
    title, 
    image, 
    description, 
 }) => {
    // inputRanges
    const inputRangeWidth = [(index - 1) * width, index * width, (index + 1) * width];
    const inputRangeOpacity = [(index - 0.3) * width, index * width, (index + 0.3) * width]

    const scale = scrollX.interpolate({
        inputRange: inputRangeWidth,
        outputRange: [0, 1, 0]
    });

    return (
        <Animated.View style={[
            styles.container,
        ]}>
            <Animated.Image source={image} style={[
                styles.image,
                {
                    transform: [{ scale }]
                }
            ]}/>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: width * 0.75,
        height: height * 0.75,
        resizeMode: 'contain',
        flex: 1
    }
})

export default Earphone;