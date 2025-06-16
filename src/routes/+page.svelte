<script lang="ts">
	let celsius: string = '';
	let fahrenheit: string = '';

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

<div class="container">
	<h1>Hola, bienvenido!</h1>
	<div class="desc">
		Este es un proyecto de la UTN Resistemcia para la materia <b>Ingeniería y Calidad de Software</b
		>,<br />
		con el objetivo de aprender a crear un pipeline de <b>Integración Continua</b>.
	</div>
	<div class="subtitle">Conversor de Temperatura</div>
	<div class="input-row">
		<div>
			<div class="input-label">Celsius</div>
			<div class="input-box">
				<input
					type="number"
					bind:value={celsius}
					placeholder="Ingrese un número"
					on:input={convertToFahrenheit}
				/>
			</div>
		</div>
		<div>
			<div class="input-label">Fahrenheit</div>
			<div class="input-box">
				<input
					type="number"
					bind:value={fahrenheit}
					placeholder="Ingrese un número"
					on:input={convertToCelsius}
				/>
			</div>
		</div>
	</div>
</div>

<style>
	:global(body) {
		background: #e6ffb3; /* verde lima pastel */
		min-height: 100vh;
		margin: 0;
		font-family: 'Inter', Arial, sans-serif;
	}
	.container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	h1 {
		color: #222;
		font-size: 2.2rem;
		margin-bottom: 1.2rem;
		text-align: center;
		font-weight: 700;
		letter-spacing: 1px;
	}
	.desc {
		color: #333;
		background: rgba(255, 255, 255, 0.7);
		border-radius: 12px;
		padding: 1.2rem 2rem;
		margin-bottom: 2.5rem;
		font-size: 1.1rem;
		text-align: center;
		box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.04);
		max-width: 500px;
	}
	.subtitle {
		color: #222;
		font-size: 1.5rem;
		margin-bottom: 1.5rem;
		font-weight: 600;
		text-align: center;
	}
	.input-row {
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
		width: 320px;
		margin: 0 auto;
	}
	.input-label {
		color: #444;
		font-size: 1.1rem;
		margin-bottom: 0.3rem;
		font-weight: 500;
	}
	.input-box {
		background: #fff;
		border-radius: 10px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.06);
		padding: 1.1rem 1.2rem;
		display: flex;
		align-items: center;
		margin-bottom: 0.5rem;
	}
	input {
		border: none;
		outline: none;
		font-size: 1.2rem;
		background: transparent;
		width: 100%;
		color: #222;
	}
	input::placeholder {
		color: #bbb;
		font-style: italic;
		opacity: 1;
	}
</style>
