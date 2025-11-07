// --- Lista de todos los componentes para la página de precios ---
// (id, Nombre descriptivo, unidad_de_precio)
// Las fórmulas de cantidad usarán el 'id' para buscar el precio.
const LISTA_COMPONENTES = [
    // Fijos (Cantidad = 1)
    { id: 'bandeja_porta_gabinete', nombre: 'Bandeja porta gabinete' },
    { id: 'capuchon_x', nombre: 'Capuchón X' },
    { id: 'capuchon_z', nombre: 'Capuchón Z' },
    { id: 'gabinete_roker_grande', nombre: 'Gabinete Roker Grande' },
    { id: 'gabinete_roker_pequeno', nombre: 'Gabinete Roker pequeño' },
    { id: 'cooler_220v', nombre: 'Cooler 220v' },
    { id: 'rejilla_cooler', nombre: 'Rejilla Cooler' },
    { id: 'filtro_aire', nombre: 'Filtro de aire' },
    { id: 'rejilla_porta_filtro', nombre: 'Rejilla porta filtro' },
    { id: 'horometro', nombre: 'Horómetro' },
    { id: 'teclado_industrial', nombre: 'Teclado industrial' },
    { id: 'boton_emergencia', nombre: 'Botón de emergencia' },
    { id: 'boton_pausa', nombre: 'Botón de pausa' },
    { id: 'boton_verde_pc', nombre: 'Botón verde PC' },
    { id: 'direccionamiento_manual', nombre: 'Direccionamiento manual' },
    { id: 'luz_testigo_220v', nombre: 'Luz testigo 220V' },
    { id: 'monitor', nombre: 'Monitor' },
    { id: 'porta_monitor', nombre: 'Porta Monitor' },
    { id: 'estructura_teclado', nombre: 'Estructura Teclado' },
    { id: 'usb_hembra', nombre: 'USB Hembra' },
    { id: 'usb_macho', nombre: 'USB Macho' },
    { id: 'procesador_pc', nombre: 'Procesador PC' },
    { id: 'motherboard', nombre: 'Motherboard' },
    { id: 'memoria_ram', nombre: 'Memoria RAM' },
    { id: 'fuente_550w', nombre: 'Fuente 550W' },
    { id: 'ssd', nombre: 'SSD' },
    { id: 'cable_sata', nombre: 'Cable SATA' },
    { id: 'gabinete_pc', nombre: 'Gabinete PC' },
    { id: 'contactor', nombre: 'Contactor' },
    { id: 'rieldin', nombre: 'Riel DIN' },
    { id: 'cable_canal', nombre: 'Cable Canal' },
    { id: 'tornillo_eje_z', nombre: 'Tornillo eje Z' },
    { id: 'fuente_24v_5a', nombre: 'Fuente 24V 5A' },
    { id: 'placa_102', nombre: 'Placa 102' },
    { id: 'placa_109', nombre: 'Placa 109' },
    { id: 'placa_111', nombre: 'Placa 111' },
    { id: 'placa_pci_105', nombre: 'Placa PCI 105' },
    { id: 'placa_113', nombre: 'Placa 113' },
    { id: 'cadena_thc', nombre: 'Cadena THC' },
    { id: 'sensor_antichoque', nombre: 'Sensor antichoque' },
    { id: 'porta_torcha', nombre: 'Porta torcha' },
    { id: 'placa_aluminio_plasma', nombre: 'Placa aluminio Plasma' },
    
    // Fijos (Cantidad > 1)
    { id: 'motores_paso', nombre: 'Motores paso a paso' },
    { id: 'reductores_motor', nombre: 'Reductores de motor' },
    { id: 'acople_reductor_motor', nombre: 'Acople reductor a motor' },
    { id: 'acople_reductor_pinon', nombre: 'Acople reductor a piñón' },
    { id: 'escuadras_gabinete', nombre: 'Escuadras gabinete' },
    { id: 'tapas_varias', nombre: 'Tapas varias' },
    { id: 'llave_1_posicion', nombre: 'Llave de 1 posición' },
    { id: 'drivers_motor', nombre: 'Drivers de motor' },
    { id: 'placa_108', nombre: 'Placa 108' },
    { id: 'placa_106', nombre: 'Placa 106' },
    { id: 'fin_carrera', nombre: 'Fin de carrera' },
    { id: 'pinon_helicoidal', nombre: 'Piñón helicoidal' },
    { id: 'imanes_grandes', nombre: 'Imanes grandes' },

    // Dependientes de Modelo o 'O'
    { id: 'patin_15', nombre: 'Patín 15' },
    { id: 'patin_20', nombre: 'Patín 20' },
    { id: 'patin_35', nombre: 'Patín 35' },
    { id: 'carrilera_compac', nombre: 'Carrilera COMPAC' },
    { id: 'carrilera_speed', nombre: 'Carrilera SPEED' },
    { id: 'rele_24vdc', nombre: 'Relé 24VDC' },
    { id: 'zocalo_rele_24vdc', nombre: 'Zócalo relé 24VDC' },
    { id: 'contactos_na', nombre: 'Contactos NA' },
    { id: 'contactos_nc', nombre: 'Contactos NC' },
    { id: 'micro_switches', nombre: 'Micro switches' },
    { id: 'patas', nombre: 'Patas' },
    { id: 'modulos_compac', nombre: 'Módulos COMPAC' },
    { id: 'modulos_speed', nombre: 'Módulos SPEED' },
    { id: 'motores_gr', nombre: 'Motores GR' },
    { id: 'polea_z', nombre: 'Polea Z' },
    { id: 'porta_polea_z', nombre: 'Porta polea Z' },
    { id: 'reguladoras_oxigeno', nombre: 'Reguladoras de oxígeno' },
    { id: 'reguladora_gas', nombre: 'Reguladora de gas' },
    { id: 'reguladora_oxigeno_alta', nombre: 'Reguladora de oxígeno alta presión' },
    { id: 'relojes_presion', nombre: 'Relojes de presión' },
    { id: 'porta_soplete_oxicorte', nombre: 'Porta soplete de oxicorte' },
    { id: 'electrovalvulas_24vdc', nombre: 'Electroválvulas 24VDC' },
    { id: 'botones_sube_baja', nombre: 'Botones pulsadores sube baja' },
    { id: 'pinones_motor_oxi', nombre: 'Piñones motor oxi' },
    { id: 'placas_aluminio_porta_oxi', nombre: 'Placas de aluminio porta oxi' },
    { id: 'poleas_x', nombre: 'Poleas X' },
    { id: 'porta_poleas_x', nombre: 'Porta poleas X' },
    { id: 'linga_oxi_x', nombre: 'Linga oxi X' },
    { id: 'flauta_repartidora', nombre: 'Flauta repartidora' },
    
    // Unidades en mm (Precio por mm)
    { id: 'guia_lineal_15_mm', nombre: 'Guía lineal 15 (precio por mm)' },
    { id: 'guia_lineal_20_mm', nombre: 'Guía lineal 20 (precio por mm)' },
    { id: 'guia_lineal_35_mm', nombre: 'Guía lineal 35 (precio por mm)' },
    { id: 'cremallera_mm', nombre: 'Metros de Cremallera (precio por mm)' },
    { id: 'portico_speed_mm', nombre: 'Pórtico SPEED (precio por mm)' },
    { id: 'portico_compac_mm', nombre: 'Pórtico COMPAC (precio por mm)' },
    
    // Unidades en Metros (Precio por Metro)
    { id: 'manguera_gas_oxigeno', nombre: 'Metros manguera gas/oxigeno (precio por metro)' },
    { id: 'cadena_chica', nombre: 'Metros cadena chica (precio por metro)' },

    // Fuentes de Plasma (Precio por unidad)
    { id: 'plasma_Power_45', nombre: 'Fuente Plasma: Power 45' },
    { id: 'plasma_Power_65_SYNC', nombre: 'Fuente Plasma: Power 65 SYNC' },
    { id: 'plasma_Power_85_SYNC', nombre: 'Fuente Plasma: Power 85 SYNC' },
    { id: 'plasma_Power_105_SYNC', nombre: 'Fuente Plasma: Power 105 SYNC' },
    { id: 'plasma_Power_125', nombre: 'Fuente Plasma: Power 125' },
    { id: 'plasma_XPR170', nombre: 'Fuente Plasma: XPR170' },
    { id: 'plasma_XPR300', nombre: 'Fuente Plasma: XPR300' },
    { id: 'plasma_XPR460', nombre: 'Fuente Plasma: XPR460' },
    { id: 'plasma_MaxPro200', nombre: 'Fuente Plasma: MaxPro200' },
    { id: 'plasma_HPR130XD', nombre: 'Fuente Plasma: HPR130XD' },
    { id: 'plasma_HPR260XD', nombre: 'Fuente Plasma: HPR260XD' },
    { id: 'plasma_HPR400XD', nombre: 'Fuente Plasma: HPR400XD' },
];

// --- Variables Globales ---
let dbPreciosRef;
let localPrecios = {}; // Mantiene una copia local de los precios de Firebase

// --- Lógica Principal al Cargar la Página ---
document.addEventListener("DOMContentLoaded", () => {
    
    // --- Lógica de Contraseña ---
    const CORRECT_PASSWORD = "16720";
    const passwordInput = document.getElementById("password_input");
    const loginButton = document.getElementById("login_button");
    const errorMessage = document.getElementById("error_message");
    const passwordScreen = document.getElementById("password_screen");

    loginButton.addEventListener("click", () => {
        if (passwordInput.value === CORRECT_PASSWORD) {
            passwordScreen.classList.add("hidden"); 
            inicializarCotizador(); // Inicia la aplicación principal
        } else {
            errorMessage.innerText = "Contraseña incorrecta.";
            errorMessage.style.display = "block";
            passwordInput.value = "";
            passwordInput.focus();
        }
    });
    passwordInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") loginButton.click();
    });
});

/**
 * Inicia la aplicación después del login.
 */
function inicializarCotizador() {
    // Muestra la vista principal
    document.getElementById("cotizador_view").classList.remove("hidden");
    
    // Genera la tabla de precios en la vista de configuración
    generarTablaDePrecios();
    
    // Configura los listeners de Firebase
    setupFirebaseListener();
    
    // Carga los parámetros guardados (Modelo, Ancho, etc.)
    loadLocalParams();
    
    // Configura todos los botones y eventos
    setupEventListeners();
}

/**
 * Genera la tabla de inputs de precio en la vista de Configuración.
 */
function generarTablaDePrecios() {
    const tbody = document.getElementById("tabla_precios");
    tbody.innerHTML = ""; // Limpia la tabla por si acaso
    
    LISTA_COMPONENTES.forEach(item => {
        const tr = document.createElement("tr");
        
        const tdNombre = document.createElement("td");
        tdNombre.innerText = item.nombre;
        
        const tdPrecio = document.createElement("td");
        const input = document.createElement("input");
        input.type = "number";
        input.className = "price";
        input.id = `price_${item.id}`; // ID único (ej: price_motores_paso)
        input.value = "0";
        input.step = "0.01";
        tdPrecio.appendChild(input);
        
        tr.appendChild(tdNombre);
        tr.appendChild(tdPrecio);
        tbody.appendChild(tr);
    });
}

/**
 * Configura el listener de Firebase para los precios.
 */
function setupFirebaseListener() {
    dbPreciosRef = firebase.database().ref('precios');
    
    // Se activa una vez al cargar y luego cada vez que un precio cambia en la nube.
    dbPreciosRef.on('value', (snapshot) => {
        const preciosDeFirebase = snapshot.val();
        if (preciosDeFirebase) {
            localPrecios = preciosDeFirebase; // Guarda la copia local
            actualizarInputsDePrecios(preciosDeFirebase);
        }
    });
}

/**
 * Pone los precios de Firebase en los inputs de la vista de Configuración.
 * @param {object} precios - El objeto de precios de Firebase.
 */
function actualizarInputsDePrecios(precios) {
    LISTA_COMPONENTES.forEach(item => {
        const input = document.getElementById(`price_${item.id}`);
        if (input) {
            // Usa el precio de Firebase, o 0 si no existe
            input.value = precios[`price_${item.id}`] || 0;
        }
    });
}

/**
 * Lee todos los inputs de precio y los sube a Firebase.
 */
function guardarPreciosEnFirebase() {
    const preciosAGuardar = {};
    
    LISTA_COMPONENTES.forEach(item => {
        const input = document.getElementById(`price_${item.id}`);
        if (input) {
            preciosAGuardar[input.id] = parseFloat(input.value) || 0;
        }
    });
    
    dbPreciosRef.set(preciosAGuardar)
        .then(() => {
            alert("¡Precios guardados en la nube con éxito!");
            // Vuelve a la vista del cotizador
            document.getElementById('cotizador_view').classList.remove('hidden');
            document.getElementById('precios_view').classList.add('hidden');
        })
        .catch((error) => {
            alert("Error al guardar precios: " + error.message);
        });
}

/**
 * Carga los parámetros de la máquina (Modelo, Ancho, etc.) desde localStorage.
 */
function loadLocalParams() {
    document.querySelector(`input[name="modelo"][value="${localStorage.getItem('cotizador_modelo') || 'COMPAC'}"]`).checked = true;
    document.getElementById('ancho_util').value = localStorage.getItem('cotizador_ancho') || '1500';
    document.getElementById('longitud_util').value = localStorage.getItem('cotizador_longitud') || '3000';
    document.getElementById('O_sopletes').value = localStorage.getItem('cotizador_O') || '1';
    document.getElementById('fuente_plasma').value = localStorage.getItem('cotizador_plasma') || 'Ninguna';
    document.getElementById('margen_ganancia').value = localStorage.getItem('cotizador_margen') || '30';
}

/**
 * Guarda los parámetros de la máquina en localStorage.
 */
function saveLocalParams() {
    localStorage.setItem('cotizador_modelo', document.querySelector('input[name="modelo"]:checked').value);
    localStorage.setItem('cotizador_ancho', document.getElementById('ancho_util').value);
    localStorage.setItem('cotizador_longitud', document.getElementById('longitud_util').value);
    localStorage.setItem('cotizador_O', document.getElementById('O_sopletes').value);
    localStorage.setItem('cotizador_plasma', document.getElementById('fuente_plasma').value);
    localStorage.setItem('cotizador_margen', document.getElementById('margen_ganancia').value);
}

/**
 * Configura todos los botones y eventos de la aplicación.
 */
function setupEventListeners() {
    const cotizadorView = document.getElementById('cotizador_view');
    const preciosView = document.getElementById('precios_view');

    // Botones de navegación
    document.getElementById('goto_precios_btn').addEventListener('click', () => {
        cotizadorView.classList.add('hidden');
        preciosView.classList.remove('hidden');
    });
    document.getElementById('goto_cotizador_btn').addEventListener('click', () => {
        cotizadorView.classList.remove('hidden');
        preciosView.classList.add('hidden');
    });
    
    // Botón de Guardar Precios
    document.getElementById('btn_guardar_precios').addEventListener('click', guardarPreciosEnFirebase);
    
    // Botón de Calcular Cotización
    document.getElementById('btn_calcular').addEventListener('click', calcularCotizacionCompleta);
    
    // Guardar parámetros en localStorage automáticamente al cambiarlos
    document.querySelectorAll('#cotizador_view input, #cotizador_view select').forEach(input => {
        input.addEventListener('change', saveLocalParams);
    });
}

/**
 * Función principal que calcula el costo total.
 */
function calcularCotizacionCompleta() {
    // 1. Guardar los últimos parámetros (por si acaso)
    saveLocalParams();
    
    // 2. Obtener parámetros de la máquina
    const modelo = localStorage.getItem('cotizador_modelo');
    const ancho_util = parseInt(localStorage.getItem('cotizador_ancho'));
    const longitud_util = parseInt(localStorage.getItem('cotizador_longitud'));
    const O = parseInt(localStorage.getItem('cotizador_O')) || 0;
    const fuente_plasma = localStorage.getItem('cotizador_plasma');
    const margen = parseFloat(localStorage.getItem('cotizador_margen')) || 0;
    
    // 3. Calcular cantidades
    const cantidades = calcularCantidades(modelo, ancho_util, longitud_util, O);
    
    // 4. Calcular costo total
    let costoTotal = 0;
    
    // Itera sobre la lista de componentes para asegurar que tenemos todos
    LISTA_COMPONENTES.forEach(item => {
        const id_componente = item.id;
        const id_precio = `price_${item.id}`; // ej: "price_motores_paso"
        
        // Busca la cantidad calculada. Si no está en 'cantidades', su cantidad es 0.
        const cantidad = cantidades[id_componente] || 0;
        
        // Busca el precio en nuestra copia local de Firebase
        const precio = localPrecios[id_precio] || 0;
        
        costoTotal += (cantidad * precio);
    });
    
    // 5. Añadir costo del plasma seleccionado
    if (fuente_plasma !== 'Ninguna') {
        const id_precio_plasma = `price_plasma_${fuente_plasma}`;
        costoTotal += (localPrecios[id_precio_plasma] || 0);
    }
    
    // 6. Calcular precio de venta
    const multiplicadorMargen = 1 + (margen / 100);
    const precioVenta = costoTotal * multiplicadorMargen;
    
    // 7. Mostrar resultados
    document.getElementById('display_costo_total').innerText = `$ ${costoTotal.toFixed(2)}`;
    document.getElementById('display_margen').innerText = margen;
    document.getElementById('display_precio_venta').innerText = `$ ${precioVenta.toFixed(2)}`;
}

/**
 * Calcula las cantidades de todos los componentes basado en los parámetros.
 * @returns {object} Un objeto con las cantidades (ej: { motores_paso: 4, patin_15: 8, ... })
 */
function calcularCantidades(modelo, ancho, largo, O) {
    const cantidades = {};
    const esCompac = (modelo === 'COMPAC');
    const esSpeed = (modelo === 'SPEED');
    
    // --- Fórmulas de ayuda (1 - 0^O) ---
    // (1 si O > 0, 0 si O = 0)
    const siHayOxi = (O > 0) ? 1 : 0; 
    // (1 si O > 1, 0 si O <= 1)
    const siMasDeUnOxi = (O > 1) ? 1 : 0;
    // (1 si O > 2, 0 si O <= 2)
    const siMasDeDosOxi = (O > 2) ? 1 : 0;

    // --- Variables Intermedias (Patas, Módulos, Pórticos) ---
    let patas = 0;
    let modulos_compac = 0;
    let modulos_speed = 0;
    let portico_compac_mm = 0;
    let portico_speed_mm = 0;
    
    if (esCompac) {
        if (largo === 3000) { patas = 6; modulos_compac = 4; }
        else if (largo === 6000) { patas = 10; modulos_compac = 8; }
        else if (largo === 9000) { patas = 12; modulos_compac = 10; }
        else if (largo === 12000) { patas = 16; modulos_compac = 14; }
        
        portico_compac_mm = ancho + 900 + (siHayOxi * ((O - 1) * 150));
    }
    
    if (esSpeed) {
        if (largo === 3000) { modulos_speed = 4; }
        else if (largo === 6000) { modulos_speed = 8; }
        else if (largo === 9000) { modulos_speed = 10; }
        else if (largo === 12000) { modulos_speed = 14; }
        
        portico_speed_mm = ancho + 900 + (siHayOxi * ((O - 1) * 150));
    }
    
    const total_modulos = modulos_compac + modulos_speed;
    const total_portico = portico_compac_mm + portico_speed_mm;

    // --- Asignación de Cantidades (usando los IDs de LISTA_COMPONENTES) ---
    
    // Fijos
    cantidades['motores_paso'] = 4;
    cantidades['reductores_motor'] = 4;
    cantidades['acople_reductor_motor'] = 4;
    cantidades['acople_reductor_pinon'] = 4;
    cantidades['bandeja_porta_gabinete'] = 1;
    cantidades['escuadras_gabinete'] = 2;
    cantidades['tapas_varias'] = 8;
    cantidades['capuchon_x'] = 1;
    cantidades['capuchon_z'] = 1;
    cantidades['gabinete_roker_grande'] = 1;
    cantidades['gabinete_roker_pequeno'] = 1;
    cantidades['cooler_220v'] = 1;
    cantidades['rejilla_cooler'] = 1;
    cantidades['filtro_aire'] = 1;
    cantidades['rejilla_porta_filtro'] = 1;
    cantidades['horometro'] = 1;
    cantidades['teclado_industrial'] = 1;
    cantidades['boton_emergencia'] = 1;
    cantidades['boton_pausa'] = 1;
    cantidades['llave_1_posicion'] = 2;
    cantidades['boton_verde_pc'] = 1;
    cantidades['direccionamiento_manual'] = 1;
    cantidades['luz_testigo_220v'] = 1;
    cantidades['monitor'] = 1;
    cantidades['porta_monitor'] = 1;
    cantidades['estructura_teclado'] = 1;
    cantidades['usb_hembra'] = 1;
    cantidades['usb_macho'] = 1;
    cantidades['procesador_pc'] = 1;
    cantidades['motherboard'] = 1;
    cantidades['memoria_ram'] = 1;
    cantidades['fuente_550w'] = 1;
    cantidades['ssd'] = 1;
    cantidades['cable_sata'] = 1;
    cantidades['gabinete_pc'] = 1;
    cantidades['drivers_motor'] = 4;
    cantidades['contactor'] = 1;
    cantidades['rieldin'] = 1;
    cantidades['cable_canal'] = 1; // (Asumo 1, la fórmula no estaba especificada)
    cantidades['tornillo_eje_z'] = 1;
    cantidades['fuente_24v_5a'] = 1;
    cantidades['placa_102'] = 1;
    cantidades['placa_108'] = 2;
    cantidades['placa_109'] = 1;
    cantidades['placa_106'] = 2;
    cantidades['placa_111'] = 1;
    cantidades['placa_pci_105'] = 1;
    cantidades['placa_113'] = 1;
    cantidades['fin_carrera'] = 3;
    cantidades['pinon_helicoidal'] = 4;
    cantidades['cadena_thc'] = 1;
    cantidades['sensor_antichoque'] = 1;
    cantidades['porta_torcha'] = 1;
    cantidades['imanes_grandes'] = 4;
    cantidades['placa_aluminio_plasma'] = 1;

    // Patines
    cantidades['patin_15'] = 7 + O;
    cantidades['patin_20'] = esCompac ? (7 + (((O-1) * 2) * siHayOxi)) : (3 + (((O-1) * 2) * siHayOxi));
    cantidades['patin_35'] = esSpeed ? 4 : 0;
    
    // Carrileras
    cantidades['carrilera_compac'] = esCompac ? 2 : 0;
    cantidades['carrilera_speed'] = esSpeed ? 2 : 0;
    
    // Componentes Oxi-dependientes
    cantidades['rele_24vdc'] = 3 + (siHayOxi * 2) + O;
    cantidades['zocalo_rele_24vdc'] = 3 + (siHayOxi * 2) + O;
    cantidades['contactos_na'] = 4 + (4 * O);
    cantidades['contactos_nc'] = 1 + (4 * O);
    cantidades['micro_switches'] = 2 + (2 * O);
    cantidades['motores_gr'] = O;
    cantidades['polea_z'] = O * 2;
    cantidades['porta_polea_z'] = O * 2;
    cantidades['reguladoras_oxigeno'] = 2 * siHayOxi;
    cantidades['reguladora_gas'] = 1 * siHayOxi;
    cantidades['reguladora_oxigeno_alta'] = 1 * siHayOxi;
    cantidades['relojes_presion'] = 4 * siHayOxi;
    cantidades['porta_soplete_oxicorte'] = 0; // (La fórmula dice 0)
    cantidades['electrovalvulas_24vdc'] = (3 + O) * siHayOxi;
    cantidades['botones_sube_baja'] = (2 * O) * siHayOxi;
    cantidades['pinones_motor_oxi'] = (2 * O) * siHayOxi;
    cantidades['placas_aluminio_porta_oxi'] = (O - 1) * siHayOxi; // Corregí tu fórmula (1-O) que daba negativo
    
    // (1 - 0^(O * (O - 1))) es una forma de decir "si O > 1"
    cantidades['poleas_x'] = 2 * siMasDeUnOxi;
    cantidades['porta_poleas_x'] = 2 * siMasDeUnOxi;
    cantidades['linga_oxi_x'] = 1 * siMasDeUnOxi;
    
    // (1 - 0^(O * (O - 1) * (O - 2))) es una forma de decir "si O > 2"
    cantidades['flauta_repartidora'] = 1 * siMasDeDosOxi;
    
    // Unidades de Longitud (mm y metros)
    cantidades['guia_lineal_15_mm'] = 1100 + (250 * O);
    
    if (esCompac) {
        cantidades['guia_lineal_20_mm'] = (total_modulos * 2000) + ((total_portico - 400) * 2) + 280;
        cantidades['guia_lineal_35_mm'] = 0;
    } else { // esSpeed
        cantidades['guia_lineal_20_mm'] = ((total_portico - 400) * 2) + 280;
        cantidades['guia_lineal_35_mm'] = (total_modulos * 2000);
    }
    
    cantidades['cremallera_mm'] = (total_modulos * 2000) + (total_portico - 400);
    cantidades['portico_speed_mm'] = portico_speed_mm;
    cantidades['portico_compac_mm'] = portico_compac_mm;
    
    // OJO: tu fórmula dice (6+(6*n)) * (1 - 0^(O)). Asumo que 'n' debía ser 'O'.
    cantidades['manguera_gas_oxigeno'] = (6 + (6 * O)) * siHayOxi; 
    cantidades['cadena_chica'] = ((O - 1) * 2) * siHayOxi; // Corregí tu fórmula
    
    // Componentes que ya calculamos
    cantidades['patas'] = patas;
    cantidades['modulos_compac'] = modulos_compac;
    cantidades['modulos_speed'] = modulos_speed;

    // Soplete (cantidad O)
    cantidades['soplete_oxicorte'] = O; // Necesitamos un precio para 'soplete_oxicorte'
    
    // Añadimos 'soplete_oxicorte' a la lista si no está
    if (!LISTA_COMPONENTES.find(item => item.id === 'soplete_oxicorte')) {
        LISTA_COMPONENTES.push({ id: 'soplete_oxicorte', nombre: 'Soplete de Oxicorte' });
        // Habría que regenerar la tabla, pero para el cálculo funciona
    }

    return cantidades;
}