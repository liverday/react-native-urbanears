import React from 'react';
import { StyleSheet, View, Text, Animated, Dimensions } from 'react-native';
import { Data } from '../../../data';

interface TickerProps {
    scrollX: Animated.Value;
    data: Data[];
}

const HEIGHT = 40;

const { width } = Dimensions.get('window');

const TickerList: React.FC<TickerProps> = ({ data, scrollX }) => {
    const inputRange = [-width, 0, width];
    const outputRange = [HEIGHT, 0, -HEIGHT];

    const translateY = scrollX.interpolate({
        inputRange,
        outputRange
    })

    return (
        <View style={styles.container}>
            <Animated.View style={{ transform: [{ translateY }]}}>
                {data.map(({ type, color2 }, index) => (
                    <Text key={index} style={[
                        styles.text,
                        { color: color2 }
                    ]}>
                        {type}
                    </Text>
                ))}
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        left: 15,
        overflow: 'hidden',
        height: HEIGHT,
    },
    text: {
        fontWeight: '700',
        textTransform: 'uppercase',
        fontSize: HEIGHT,
        lineHeight: HEIGHT,
        letterSpacing: 1.5,
    }
})

export default TickerList;