import { test, expect } from '@playwright/test';

test('Conversión Celsius a Fahrenheit y viceversa', async ({ page }) => {
	// Abre la página principal
	await page.goto('/');

	// Selecciona los inputs por placeholder
	const celsiusInput = page.getByPlaceholder('Ingrese un número').first();
	const fahrenheitInput = page.getByPlaceholder('Ingrese un número').nth(1);

	// Ingresa 100 en Celsius y verifica el resultado en Fahrenheit
	await celsiusInput.fill('100');
	await expect(fahrenheitInput).toHaveValue('212.00');

	// Ingresa 32 en Fahrenheit y verifica el resultado en Celsius
	await fahrenheitInput.fill('32');
	await expect(celsiusInput).toHaveValue('0.00');
});
