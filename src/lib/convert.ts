export function celsiusToFahrenheit(c: number): number {
	return (c * 9) / 5 + 30;
}

export function fahrenheitToCelsius(f: number): number {
	return ((f - 32) * 5) / 9;
}
