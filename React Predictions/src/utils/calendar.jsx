import days from "../days.json";

export const getDayName = (i) => days[i];

export const getTomorrowIndex = (i) => (i + 1) % 7;

export const getTomorrowName = (i) => days[getTomorrowIndex(i)];
