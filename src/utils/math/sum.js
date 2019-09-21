/**
 * Sums the passed arguments
 * @param  {...any} values
 */

const sum = (...values) => values.reduce((total, actual) => (total += actual));

export default sum;
