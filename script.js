// 1. Esperar a que toda la página se cargue
document.addEventListener("DOMContentLoaded", () => {
    
    // --- LÓGICA DE CONTRASEÑA (Sin cambios) ---
    const CORRECT_PASSWORD = "16720";
    const passwordInput = document.getElementById("password_input");
    const loginButton = document.getElementById("login_button");
    const errorMessage = document.getElementById("error_message");
    const passwordScreen = document.getElementById("password_screen");
    const cotizadorContainer = document.getElementById("cotizador_container");

    loginButton.addEventListener("click", () => {
        if (passwordInput.value === CORRECT_PASSWORD) {
            passwordScreen.classList.add("hidden"); 
            cotizadorContainer.classList.remove("hidden");
            
            // --- NUEVO: Inicializar la lógica de Firebase ---
            inicializarCotizador(); 
            // -----------------------------------------------

        } else {
            errorMessage.innerText = "Contraseña incorrecta. Inténtalo de nuevo.";
            errorMessage.style.display = "block";
            passwordInput.value = "";
            passwordInput.focus();
        }
    });

    passwordInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            loginButton.click();
        }
    });
    // --- FIN LÓGICA DE CONTRASEÑA ---

    // --- LÓGICA DEL COTIZADOR (Sin cambios) ---
    const botonCalcular = document.getElementById("btn_calcular");
    botonCalcular.addEventListener("click", calcularCotizacionCompleta);
});


// --- LÓGICA PRINCIPAL DE FIREBASE Y COTIZADOR ---

// Variable global para la referencia a la base de datos
let dbPreciosRef;

/**
 * Función que se llama después del login.
 * Configura todos los listeners de Firebase.
 */
function inicializarCotizador() {
    // Apuntamos a un "nodo" (una carpeta) en la base de datos llamado 'precios'
    dbPreciosRef = firebase.database().ref('precios');

    // 1. CONFIGURAR EL "OYENTE" (LISTENER)
    // Esto se ejecuta 1 vez al cargar, y luego CADA VEZ que alguien cambie un dato.
    dbPreciosRef.on('value', (snapshot) => {
        const precios = snapshot.val(); // Obtiene los precios de la nube
        if (precios) {
            // console.log("Datos recibidos de Firebase:", precios);
            actualizarInputsConPrecios(precios); // Pone los precios en los inputs
            calcularCotizacionCompleta(); // Recalcula el total
        }
    });

    // 2. CONFIGURAR EL "GUARDADO"
    // Hacemos que cada vez que se cambie un input de precio, se guarde en Firebase.
    const allPriceInputs = document.querySelectorAll(".price");
    allPriceInputs.forEach(input => {
        // Usamos el evento 'change' (se dispara cuando el valor cambia y se pierde el foco)
        input.addEventListener('change', guardarPreciosEnFirebase);
    });
}

/**
 * Pone los precios de la base de datos en los campos de la página.
 * @param {object} precios - El objeto de precios de Firebase.
 */
function actualizarInputsConPrecios(precios) {
    // console.log("Actualizando inputs...");
    for (const id in precios) {
        // (ej: id = "price_sopletes")
        const input = document.getElementById(id);
        if (input && input.value !== precios[id]) {
            // Solo actualiza si el valor es diferente, para no interrumpir al usuario
            input.value = precios[id];
        }
    }
}

/**
 * Lee todos los inputs de precio de la página y los sube a Firebase.
 */
function guardarPreciosEnFirebase() {
    const preciosAGuardar = {};
    const allPriceInputs = document.querySelectorAll(".price");
    
    allPriceInputs.forEach(input => {
        // (ej: input.id = "price_sopletes", input.value = "150.50")
        preciosAGuardar[input.id] = input.value;
    });
    
    // console.log("Guardando precios en Firebase:", preciosAGuardar);
    // .set() sobrescribe TODOS los precios con la nueva lista.
    // Esto asegura que todo esté sincronizado.
    dbPreciosRef.set(preciosAGuardar);
}

/**
 * Función principal de cálculo.
 * YA NO GUARDA NADA, solo calcula con lo que hay en pantalla.
 */
function calcularCotizacionCompleta() {
    
    // --- PASO A: OBTENER EL VALOR DE 'n' ---
    const n = parseInt(document.getElementById("n_sopletes").value) || 0;

    if (n <= 0) {
        // Ya no mostramos alerta para no ser molestos en tiempo real
        if (document.activeElement.id !== "n_sopletes") { // No molestar si lo está escribiendo
             document.getElementById("n_sopletes").value = 1;
        }
        return; 
    }

    // --- PASO B: CALCULAR LAS CANTIDADES (Sin cambios) ---
    const cantidades = {};
    cantidades.reg_oxigeno = 2;
    cantidades.reg_gas = 1;
    cantidades.reg_oxi_alta = 1;
    cantidades.relojes = 4;
    // ... (todas las demás fórmulas van aquí) ...
    cantidades.sopletes = n;
    cantidades.guias_15 = n;
    cantidades.motores_12v = n;
    cantidades.patines_15 = n;
    cantidades.porta_soplete = n;
    cantidades.patines_20 = n - 1;
    cantidades.polea_z = n * 2;
    cantidades.porta_polea_z = n * 2;
    cantidades.reles_24 = 2 + n;
    cantidades.zocalo_reles_24 = 2 + n;
    cantidades.electrovalvulas = 3 + n;
    cantidades.contactos_na = 4 * n;
    cantidades.contactos_nc = 4 * n;
    cantidades.pulsadores = 2 * n;
    cantidades.pinones_z = 2 * n;
    cantidades.manguera = 6 + (6 * n);
    cantidades.placas_aluminio = n - 1;
    cantidades.cadena_chica = (n - 1) * 2;
    cantidades.poleas_x = (n > 1) ? 2 : 0;
    cantidades.porta_poleas_x = (n > 1) ? 2 : 0;
    cantidades.linga_x = (n > 1) ? 1 : 0;
    cantidades.flauta = (n > 2) ? 1 : 0;

    // --- PASO C: PROCESAR CADA FILA (Sin cambios) ---
    let totalGeneral = 0;
    
    for (const id_base in cantidades) {
        const cantidad = cantidades[id_base];
        totalGeneral += procesarFila(id_base, cantidad);
    }

    // --- PASO D: MOSTRAR EL TOTAL GENERAL (Sin cambios) ---
    document.getElementById("total_cost").innerText = totalGeneral.toFixed(2);
}

/**
 * Función auxiliar para actualizar una sola fila de la tabla. (Sin cambios)
 */
function procesarFila(id_base, cantidad) {
    const inputPrecio = document.getElementById(`price_${id_base}`);
    const precio = parseFloat(inputPrecio.value) || 0;
    const subtotal = cantidad * precio;
    const celdaQty = document.getElementById(`qty_${id_base}`);
    if (celdaQty) {
        celdaQty.innerText = Math.max(0, cantidad); 
    }
    const celdaSub = document.getElementById(`sub_${id_base}`);
    if (celdaSub) {
        celdaSub.innerText = subtotal.toFixed(2);
    }
    return subtotal;
}