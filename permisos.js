
// script.js
const input = document.getElementById("permInput");
const owner = document.getElementById("owner");
const group = document.getElementById("group");
const others = document.getElementById("others");
const error = document.getElementById("error");

const permisosMap = {
    0: "--- (Sin permisos)",
    1: "--x (Ejecutar)",
    2: "-w- (Escribir)",
    3: "-wx (Escribir + Ejecutar)",
    4: "r-- (Leer)",
    5: "r-x (Leer + Ejecutar)",
    6: "rw- (Leer + Escribir)",
    7: "rwx (Todos los permisos)"
};

function llenarSelect(select, label) {
    select.innerHTML = "";
    for (let i = 0; i <= 7; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = `${label}: ${permisosMap[i]}`;
        select.appendChild(option);
    }
}

llenarSelect(owner, "Propietario");
llenarSelect(group, "Grupo");
llenarSelect(others, "Otros");

input.addEventListener("input", () => {
    let val = input.value;
    error.textContent = "";

    if (/[^0-7]/.test(val)) {
        error.textContent = "Solo números del 0 al 7";
        input.value = val.replace(/[^0-7]/g, "");
        return;
    }

    if (val.length > 3) {
        error.textContent = "Máximo 3 dígitos";
        input.value = val.slice(0,3);
        return;
    }

    let padded = val.padEnd(3, "0");

    owner.value = padded[0];
    group.value = padded[1];
    others.value = padded[2];
});
