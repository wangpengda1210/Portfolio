async function rockBand(name) {
    if (name === 'Linkin Park') {
        return Promise.resolve('Chester, we miss you!');
    } else {
        return Promise.reject('No matter the band we miss him anyway!');
    }
}