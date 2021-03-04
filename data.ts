export interface Data {
    type: string;
    image: any;
    title: string;
    description: string;
    key: string;
    color: string;
}

const data: Data[] = [
    {
        type: 'Humlan P',
        image: require('./assets/urbanears_blue.png'),
        title: 'Vibrant colors',
        description: 'Four on-trend colorways to seamlessly suit your style.',
        key: 'first',
        color: '#9dcdfa',
    },
    {
        type: 'Pampas',
        image: require('./assets/urbanears_pink.png'),
        title: 'Redefined sound',
        description: 'A bold statement tuned to perfection.',
        key: 'second',
        color: '#db9efa',
        
    },
    {
        type: 'Humlan P',
        image: require('./assets/urbanears_grey.png'),
        title: 'Great quality',
        description:
            'An Urbanears classic! Listen-all-day fit. Striking the perfect balance of effortless technology',
        key: 'third',
        color: '#999',  
    },
    {
        type: 'Humlan B',
        image: require('./assets/urbanears_mint.png'),
        title: 'From Sweden',
        description:
            'The “Plattan” in Plattan headphones is Swedish for “the slab.”',
        key: 'fourth',
        color: '#a1e3a1',
        
    },
];

export default data;