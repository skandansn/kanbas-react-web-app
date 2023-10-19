import ImpliedReturn from "./ImpliedReturn";

function WorkingWithFunctions() {
    function add (a, b) {
        return a + b;
    }
    const twoPlusFour = add(2, 4);
    console.log(twoPlusFour);

    const subtract = (a, b) => {
        return a - b;
    }
    const threeMinusOne = subtract(3, 1);
    console.log(threeMinusOne);

    return (
        <>
            <h2>Functions</h2>
            <h3>Legacy ES5 functions</h3>
            twoPlusFour = { twoPlusFour }<br />
            add(2, 4) = { add(2, 4) }<br />

            <h3>New ES6 arrow functions</h3>
            threeMinusOne = {threeMinusOne}<br />
            subtract(3, 1) = {subtract(3, 1)}<br />

            <ImpliedReturn />
        </>

    )

}
export default WorkingWithFunctions