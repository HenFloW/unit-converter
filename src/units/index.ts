// ./units/index.ts
export * from './time';
export * from './length';
export * from "./types";
import { timeUnits, lengthUnits, UnitMap, AliasMap } from '.';

export function generateAliasToUnitMap(units: UnitMap): AliasMap {
  const aliasMap: AliasMap = {};
  Object.keys(units).forEach(unit => {
    units[unit].forEach(alias => {
      aliasMap[alias] = unit;
    });
  });
  return aliasMap;
}

export type UnitValue = {
  unit: string;
  value: number;
};

export const timeAliases = generateAliasToUnitMap(timeUnits);
export const lengthAliases = generateAliasToUnitMap(lengthUnits);
