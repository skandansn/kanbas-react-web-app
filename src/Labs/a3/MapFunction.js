function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = a => a * a;

    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);

    return (
        <div>
            <h4>Map Function</h4>
            squares = {squares}<br/>
            cubes = {cubes}<br/>
        </div>
    );

}

export default MapFunction