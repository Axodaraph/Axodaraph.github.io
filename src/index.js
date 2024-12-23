//usamos un alias para las rutas configurada por webpack

import Template from "@templates/Template.js";
import "@styles/main.css";
import "@styles/vars.styl";

(async function App() {
  const main = null || document.getElementById("main");
  main.innerHTML = await Template();
})();
