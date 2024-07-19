// ./units/length.ts
export const lengthUnits = {
  millimeter: ["millimeter", "millimeters", "mm"],
  centimeter: ["centimeter", "centimeters", "cm"],
  meter: ["meter", "meters", "m"],
  kilometer: ["kilometer", "kilometers", "km"],
  inch: ["inch", "inches", "in"],
  foot: ["foot", "feet", "ft"],
  yard: ["yard", "yards", "yd"],
  mile: ["mile", "miles", "mi"]
} as const;

export const lengthUnitConversions = {
  millimeter: 0.001,
  centimeter: 0.01,
  meter: 1,
  kilometer: 1000,
  inch: 0.0254,
  foot: 0.3048,
  yard: 0.9144,
  mile: 1609.34
};
