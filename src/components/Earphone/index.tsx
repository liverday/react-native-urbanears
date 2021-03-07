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

    const translateXTitle = scrollX.interpolate({
        inputRange: inputRangeWidth,
        outputRange: [width * 0.5, 0, -width * 0.5]
    })

    const translateXDescription = scrollX.interpolate({
        inputRange: inputRangeWidth,
        outputRange: [width * 0.8, 0, -width * 0.8]
    })

    const opacity = scrollX.interpolate({
        inputRange: inputRangeOpacity,
        outputRange: [0, 1, 0]
    })

    return (
        <View style={[
            styles.container,
        ]}>
            <Animated.Image source={image} style={[
                styles.image,
                {
                    transform: [{ scale }]
                }
            ]}/>
            <View style={styles.textContainer}>
                <Animated.Text style={[
                    styles.title,
                    { 
                        opacity,
                        transform: [{ translateX: translateXTitle }]
                    },
                ]}>
                    {title}   
                </Animated.Text>
                <Animated.Text style={[
                    styles.description,
                    {
                        opacity,
                        transform: [{ translateX: translateXDescription }]
                    },
                ]}>
                    {description}
                </Animated.Text>
            </View>
        </View>
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
    },
    textContainer: {
        alignSelf: 'flex-end',
        flex: 0.5,
    },
    title: {
        color: '#333',
        textTransform: 'uppercase',
        fontSize: 24,
        fontWeight: '700',
        letterSpacing: 1.5,
    },
    description: {
        color: '#fafafa',
        fontWeight: '600',
        width: width * 0.75,
        marginRight: 10,
        fontSize: 16,
        lineHeight: 16 * 1.5,
        marginTop: 10
    }
})

export default Earphone;