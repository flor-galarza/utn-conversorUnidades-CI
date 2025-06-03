<script lang="ts">
	let celsius = '';
	let fahrenheit = '';

	function convertToFahrenheit() {
		const c = parseFloat(celsius);
		if (!isNaN(c)) {
			fahrenheit = ((c * 9) / 5 + 32).toFixed(2);
		} else {
			fahrenheit = '';
		}
	}

	function convertToCelsius() {
		const f = parseFloat(fahrenheit);
		if (!isNaN(f)) {
			celsius = (((f - 32) * 5) / 9).toFixed(2);
		} else {
			celsius = '';
		}
	}
</script>

<h1>Conversor de Temperatura</h1>

<div style="display: flex; flex-direction: column; gap: 1rem; max-width: 300px;">
	<label>
		Celsius:
		<input type="number" bind:value={celsius} on:input={convertToFahrenheit} />
	</label>

	<label>
		Fahrenheit:
		<input type="number" bind:value={fahrenheit} on:input={convertToCelsius} />
	</label>
</div>
