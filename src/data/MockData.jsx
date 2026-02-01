export const citiesData = [
  {
    id: 1,
    name: "Warszawa",
    current: { temp: 15, condition: "☁️", conditionText: "Pochmurno", wind: 20, rainChance: 10, rainAmount: 0.5, pressure: 1015, clouds: 60 },
    forecast: [
      { day: "Pn", temp: 16, condition: "☁️" },
      { day: "Wt", temp: 14, condition: "🌧️" },
      { day: "Śr", temp: 18, condition: "☀️" },
      { day: "Cz", temp: 19, condition: "☀️" },
      { day: "Pt", temp: 15, condition: "⛅" },
    ]
  },
  {
    id: 2,
    name: "Kraków",
    current: { temp: 18, condition: "☀️", conditionText: "Słonecznie", wind: 5, rainChance: 0, rainAmount: 0, pressure: 1010, clouds: 10 },
    forecast: [
      { day: "Pn", temp: 19, condition: "☀️" },
      { day: "Wt", temp: 20, condition: "☀️" },
      { day: "Śr", temp: 17, condition: "☁️" },
      { day: "Cz", temp: 16, condition: "🌧️" },
      { day: "Pt", temp: 18, condition: "⛅" },
    ]
  },
  {
    id: 3,
    name: "Gdańsk",
    current: { temp: 12, condition: "🌧️", conditionText: "Deszcz", wind: 35, rainChance: 80, rainAmount: 5.2, pressure: 1005, clouds: 90 },
    forecast: [
      { day: "Pn", temp: 13, condition: "🌧️" },
      { day: "Wt", temp: 12, condition: "🌧️" },
      { day: "Śr", temp: 14, condition: "☁️" },
      { day: "Cz", temp: 15, condition: "⛅" },
      { day: "Pt", temp: 16, condition: "☀️" },
    ]
  },
  {
    id: 4,
    name: "Wrocław",
    current: { temp: 20, condition: "🌤️", conditionText: "Przejaśnienia", wind: 10, rainChance: 5, rainAmount: 0, pressure: 1012, clouds: 30 },
    forecast: [
      { day: "Pn", temp: 21, condition: "☀️" },
      { day: "Wt", temp: 22, condition: "☀️" },
      { day: "Śr", temp: 19, condition: "⛈️" },
      { day: "Cz", temp: 18, condition: "🌧️" },
      { day: "Pt", temp: 20, condition: "🌤️" },
    ]
  },
  {
    id: 5,
    name: "Zakopane",
    current: { temp: 8, condition: "🌨️", conditionText: "Śnieg z deszczem", wind: 40, rainChance: 60, rainAmount: 2.0, pressure: 1000, clouds: 80 },
    forecast: [
      { day: "Pn", temp: 7, condition: "🌨️" },
      { day: "Wt", temp: 6, condition: "❄️" },
      { day: "Śr", temp: 5, condition: "❄️" },
      { day: "Cz", temp: 8, condition: "☁️" },
      { day: "Pt", temp: 9, condition: "🌤️" },
    ]
  },
];