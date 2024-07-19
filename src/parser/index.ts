// ./parser/index.ts
import { AliasMap, UnitValue } from '../units';

export function parseUnitString(input: string, aliasMap: AliasMap): UnitValue[] {
  const regex = /(\d+(?:\.\d+)?)(\s*[^0-9\s]+)/g;
  const matches = input.matchAll(regex);

  const values: UnitValue[] = [];
  for (const match of matches) {
    const value = parseFloat(match[1]);
    const alias = match[2].trim();
    const unit = aliasMap[alias]; // Use the alias map to translate alias to unit
    if (unit) {
      values.push({ unit, value });
    }
  }
  return values;
}
