// Named exports
const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;

// Default export (only one per file)
export default function multiply(a, b) {
    return a * b;
}

export { addition as add, subtraction as subtract };