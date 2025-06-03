import { describe, it, expect } from 'vitest';
import { celsiusToFahrenheit, fahrenheitToCelsius } from './convert';

describe('Conversor de temperatura', () => {
	it('convierte Celsius a Fahrenheit correctamente', () => {
		expect(celsiusToFahrenheit(0)).toBe(32);
		expect(celsiusToFahrenheit(100)).toBe(212);
		expect(celsiusToFahrenheit(-40)).toBe(-40);
	});

	it('convierte Fahrenheit a Celsius correctamente', () => {
		expect(fahrenheitToCelsius(32)).toBe(0);
		expect(fahrenheitToCelsius(212)).toBe(100);
		expect(fahrenheitToCelsius(-40)).toBe(-40);
	});
});
