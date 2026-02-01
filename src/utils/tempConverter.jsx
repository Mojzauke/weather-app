export const displayTemp = (celsius, unit) => {
  if (unit === 'F') return `${Math.round(celsius * 1.8 + 32)}°F`;
  if (unit === 'K') return `${Math.round(celsius + 273.15)}K`;
  return `${celsius}°C`;
};