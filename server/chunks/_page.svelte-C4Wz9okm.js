import { e as escape_html } from './escaping-CqgfEcN3.js';
import { p as push, c as pop } from './index-CjZscN-l.js';

const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function _page($$payload, $$props) {
  push();
  let celsius = "";
  let fahrenheit = "";
  $$payload.out += `<div class="container svelte-1a7613f"><h1 class="svelte-1a7613f">Hola, bienvenido!</h1> <div class="desc svelte-1a7613f">Este es un proyecto de la UTN para la materia <b>Ingeniería y Calidad de Software</b>,<br/> con el objetivo de aprender a crear un pipeline de <b>Integración Continua</b>.</div> <div class="subtitle svelte-1a7613f">Conversor de Temperatura</div> <div class="input-row svelte-1a7613f"><div><div class="input-label svelte-1a7613f">Celsius</div> <div class="input-box svelte-1a7613f"><input type="number"${attr("value", celsius)} placeholder="Ingrese un número" class="svelte-1a7613f"/></div></div> <div><div class="input-label svelte-1a7613f">Fahrenheit</div> <div class="input-box svelte-1a7613f"><input type="number"${attr("value", fahrenheit)} placeholder="Ingrese un número" class="svelte-1a7613f"/></div></div></div></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-C4Wz9okm.js.map
