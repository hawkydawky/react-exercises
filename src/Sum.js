export function Sum({numbers = [1, 2, 3, 4, 5]}) {
    return (
        <h1>Sum is: {numbers.reduce((a,b) => a+b, 0)}</h1>
    )
}