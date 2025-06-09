export function celsiusToFahrenheit(c: number): number {
	return (c * 9) / 5 + 32; 
}

export function fahrenheitToCelsius(f: number): number {
	return ((f - 32) * 5) / 9;
}
// export function celsiusToKelvin(c: number): number {
//     return c + 273.15;
// }
// export function kelvinToCelsius(k: number): number {
//     return k - 273.15;