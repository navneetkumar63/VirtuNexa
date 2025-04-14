document.getElementById('factorialForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const numberInput = document.getElementById('number').value;
    const number = parseInt(numberInput);

    if (isNaN(number) || number < 0) {
        document.getElementById('result').innerText = 'Please enter a valid positive integer.';
        return;
    }

    const iterativeResult = factorialIterative(number);
    const recursiveResult = factorialRecursive(number);

    document.getElementById('result').innerHTML = `
        <p>Iterative Method: ${iterativeResult}</p>
        <p>Recursive Method: ${recursiveResult}</p>
    `;
});

function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function factorialRecursive(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}