// Assuming your createTaggedTemplateLiteral is correctly returning the functions
import { timeUnitConversions, timeAliases, lengthUnitConversions, lengthAliases } from './units';
import { createTaggedTemplateLiteral } from './templateLiterals';

const timeFunctions = createTaggedTemplateLiteral(timeAliases, timeUnitConversions);
const lengthFunctions = createTaggedTemplateLiteral(lengthAliases, lengthUnitConversions);

// Destructure directly from the object returned by the function
export const {
  millisecond, second, minute, hour, day, week, month, year
} = timeFunctions;

export const {
  millimeter, centimeter, meter, kilometer, inch, foot, yard, mile
} = lengthFunctions;
