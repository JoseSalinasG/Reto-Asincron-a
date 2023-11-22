// Obtención de datos de la API.
async function obtenerDatosDeAPI() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        throw error;
    }
}

// Impresión de los Datos Obtenidos de la API.
async function impresionDeDatos(datos) {
    setTimeout(() => {
        console.log('Datos obtenidos de la API:', datos);
    }, 5000);
}

// Inicio del pedido a la API.
async function inicioPedido() {
    console.log('Iniciando solicitud a la API...');

    try {
        const datos = await obtenerDatosDeAPI();
        impresionDeDatos(datos);
    } catch (error) {
        // Manejar errores si es necesario
    }
}

// Impresión del pedido
setTimeout(() => {
    inicioPedido();
}, 3000);
