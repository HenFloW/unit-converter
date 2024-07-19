// __tests__/lengthConversions.test.ts
import { millimeter, centimeter, meter, kilometer, inch, foot, yard, mile } from "../src"

describe('Length Unit Conversions', () => {
  test('millimeters conversion', () => {
    expect(millimeter`10 centimeters`).toBe(100);
    expect(millimeter`1 meter`).toBe(1000);
  });

  test('centimeters conversion', () => {
    expect(centimeter`10 millimeters`).toBe(1);
    expect(centimeter`1 meter`).toBe(100);
  });

  test('meters conversion', () => {
    expect(meter`100 centimeters`).toBe(1);
    expect(meter`1000 millimeters`).toBe(1);
  });

  test('kilometers conversion', () => {
    expect(kilometer`1000 meters`).toBe(1);
  });

  test('inches conversion', () => {
    expect(inch`12 inches`).toBe(12);
    expect(inch`1 foot`).toBe(12);
  });

  test('feet conversion', () => {
    expect(foot`12 inches`).toBe(1);
    expect(foot`1 yard`).toBe(3);
  });

  test('yards conversion', () => {
    expect(yard`3 feet`).toBe(1);
    expect(yard`36 inches`).toBe(1);
  });

  test('miles conversion', () => {
    expect(mile`5280 feet`).toBe(1);
    expect(mile`1760 yards`).toBe(1);
  });

  test('metric and imperial conversion', () => {
    expect(centimeter`15 inches`).toBeCloseTo(38.1)
    expect(centimeter`3 feet`).toBeCloseTo(91.4)
  })
});
