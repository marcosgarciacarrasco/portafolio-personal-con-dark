const modoBtn = document.getElementById("modoBtn");
const root = document.documentElement;

// Cargar preferencia guardada
if (localStorage.getItem("modo") === "oscuro") {
  root.classList.add("dark");
  modoBtn.textContent = "Cambiar a modo claro";
}

modoBtn.addEventListener("click", () => {
  if (root.classList.contains("dark")) {
    root.classList.remove("dark");
    modoBtn.textContent = "Cambiar a modo oscuro";
    localStorage.setItem("modo", "claro");
  } else {
    root.classList.add("dark");
    modoBtn.textContent = "Cambiar a modo claro";
    localStorage.setItem("modo", "oscuro");
  }
});
