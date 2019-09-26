import naturalValue from "./naturalValue";
import sum from "./sum";

/**
 * Sums the passed arguments ​​and returns zero if the final sum is negative.
 * @param  {...any} values
 */
const naturalSum = (...values) => naturalValue(sum(...values));

export default naturalSum;
