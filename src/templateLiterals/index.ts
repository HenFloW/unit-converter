// ./templateLiterals/index.ts
import { parseUnitString } from '../parser';
import { AliasMap } from '../units';  // Make sure to define/export UnitValue appropriately

// Define the function type here
type TemplateLiteralFunction = (strings: TemplateStringsArray, ...values: string[]) => number;

export function createTaggedTemplateLiteral<U extends Record<string, number>>(
  aliasMap: AliasMap,
  unitConversions: U,
  precision = 2,
): { [K in keyof U]: TemplateLiteralFunction } {
  const result: { [K in keyof U]: TemplateLiteralFunction } = {} as { [K in keyof U]: TemplateLiteralFunction };
  (Object.keys(unitConversions) as Array<keyof U>).forEach(unit => {
    result[unit] = (strings: TemplateStringsArray, ...values: string[]): number => {
      const input = strings.reduce((acc, str, i) => acc + str + (values[i] || ''), '');
      const parsed = parseUnitString(input, aliasMap);
      const total = parsed.reduce((total, { unit: parsedUnit, value }) => {
        // Ensure parsedUnit is a valid key of U, otherwise it could lead to runtime errors
        if (parsedUnit in unitConversions) {
          return total + value * unitConversions[parsedUnit as keyof U];
        }
        return total;
      }, 0);
      return Math.round((total / unitConversions[unit]) * (10^precision-1)) / (10^precision-1);
    };
  });
  return result;
}