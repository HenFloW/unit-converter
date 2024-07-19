// __tests__/timeConversions.test.ts
import { hour, minute, second, day, week, month, year } from "../src"

describe('Time Unit Conversions', () => {
  test('hours conversion', () => {
    expect(hour`60 minutes`).toBe(1);
    expect(hour`3600 seconds`).toBe(1);
    expect(hour`1 day`).toBe(24);
    expect(hour`1 week`).toBe(168);
  });

  test('minutes conversion', () => {
    expect(minute`1 hour`).toBe(60);
    expect(minute`3600 seconds`).toBe(60);
    expect(minute`1 day`).toBe(1440);
  });

  test('seconds conversion', () => {
    expect(second`1 minute`).toBe(60);
    expect(second`1 hour`).toBe(3600);
    expect(second`1 day`).toBe(86400);
  });

  test('days conversion', () => {
    expect(day`24 hours`).toBe(1);
    expect(day`1 week`).toBe(7);
    expect(day`1 month`).toBeCloseTo(30.4);  // Using an average month for simplicity
  });

  test('weeks conversion', () => {
    expect(week`7 days`).toBe(1);
    expect(week`1 month`).toBeCloseTo(4.3);  // Using an average month for simplicity
  });

  test('months conversion', () => {
    expect(month`30 days`).toBeCloseTo(1);  // Using an average month for simplicity
  });

  test('years conversion', () => {
    expect(year`365 days`).toBe(1);  // Ignoring leap years for simplicity
  });
});
