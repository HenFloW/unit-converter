export const timeUnitConversions = {
  millisecond: 1 / 1000,
  second: 1,
  minute: 60,
  hour: 3600,
  day: 86_400,
  week: 604_800,
  month: 2_629_743.83, // Approximate value
  year: 31_556_926 // Approximate value
} as const;

export const timeUnits = {
  millisecond: ["millisecond", "milliseconds", "ms"],
  second: ["second", "seconds", "sec", "s"],
  minute: ["minute", "minutes", "min", "m"],
  hour: ["hour", "hours", "h"],
  day: ["day", "days", "d"],
  week: ["week", "weeks", "w"],
  month: ["month", "months", "mo"],
  year: ["year", "years", "y"]
} as const;

export type TimeUnit = keyof typeof timeUnits;
export type TimeUnitAlias = typeof timeUnits[TimeUnit][number];