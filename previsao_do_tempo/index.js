const q = 'Itu'
const appid = 'e5a136dfc1bd74ac503a3ed86f631d08'
const cnt = '2'
const units = 'metric'
const lang = 'pt_br'
const baseURL = 'api.openweathermap.org/data/2.5/forecast'
const url = `https://${baseURL}?q=${q}&appid=${appid}&cnt=${cnt}&units=${units}&lang=${lang}`
console.log(url)