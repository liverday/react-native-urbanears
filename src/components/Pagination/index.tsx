import React from 'react';
import { View, Animated, Dimensions, StyleSheet } from 'react-native';

import { Data } from '../../../data';
interface PaginationProps {
    data: Data[];
    scrollX: Animated.Value;
}

const SIZE = 30;

const { width } = Dimensions.get('window')

const Pagination: React.FC<PaginationProps> = ({ scrollX, data }) => {
    const inputRange = [-width, 0, width];
    const outputRange = [-SIZE, 0, SIZE];

    const translateX = scrollX.interpolate({
        inputRange,
        outputRange
    })

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.indicator,
                    {
                        position: 'absolute',
                        transform: [{ translateX }]
                    }
                ]}
            />

            {data.map((item) => (
                <View key={item.key} style={styles.dotContainer}>
                    <View style={styles.dot} />
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexDirection: 'row',
        right: 20,
        bottom: 40,
        height: SIZE
    },
    dotContainer: {
        width: SIZE,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dot: {
        width: SIZE * 0.45,
        height: SIZE * 0.45,
        borderRadius: SIZE / 2,
        backgroundColor: '#fafafa',
    },
    indicator: {
        width: SIZE,
        height: SIZE,
        backgroundColor: '#333',
        opacity: 0.15,
        borderRadius: SIZE / 2,
    }
})

export default Pagination;