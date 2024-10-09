function createInt8TypedArray(length, position, value) {
    const buffer = new ArrayBuffer(length);
    const int8Array = new Int8Array(buffer);
    if (position < 0 || position >= length) {
        throw new Error('Position outside range');
    }
    int8Array[position] = value;
    return buffer;
}

try {
    const buffer = createInt8TypedArray(10, 2, 42);
    const int8Array = new Int8Array(buffer);
    console.log(int8Array);  
} catch (e) {
    console.log(e.message);

}
console.log(createInt8TypedArray(10, 2, 89));

