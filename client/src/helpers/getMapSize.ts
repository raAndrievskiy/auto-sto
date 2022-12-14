export const getMapSize = (size: number) => {
    const width: number = 1450;
    const height: number = 623;

    if (size > 1450) {
        return {
            maxWidth: `${width}px`,
            height: `${623}px`,
            widthNum: size,
            heightNum: 623
        };
    }
    if (size >= 800) {
        return {
            maxWidth: `${size}`,
            height: `${520}px`,
            widthNum: size,
            heightNum: 520
        };
    }

    return {
        maxWidth: `${size}px`,
        height: `${625}px`,
        widthNum: size,
        heightNum: 625
    };
};
