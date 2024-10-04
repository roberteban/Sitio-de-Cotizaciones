// Función principal que inicia la carga del contenido
function cargarContenido() {
    // Mostrar los elementos (logo y textos)
    cargarElementos();

    // Cargar las cotizaciones
    cargarCotizaciones();

    // Cargar los textos de las divs
    cargarTextos();
}

// Cargar las cotizaciones de las APIs
async function cargarCotizaciones() {
    try {
        // Mostrar el GIF de carga
        document.getElementById('imgEspera').style.visibility = 'visible';

        // Esperar 2.5 segundos antes de empezar la carga (simulación de espera)
        await delay(2500);

        // Cargar las cotizaciones en paralelo
        const [bitcoin, usdEur, usdToArs] = await Promise.all([
            fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then(res => res.json()),
            fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json()),
            fetch('https://open.er-api.com/v6/latest/ARS').then(res => res.json())
        ]);

        // Comprobar que las respuestas son válidas
        if (bitcoin.bpi && bitcoin.bpi.USD && usdEur.rates && usdToArs.rates) {
            document.getElementById('UsdEur').innerHTML = "EUR a USD: " + usdEur.rates.EUR.toFixed(2);
            document.getElementById('BitcoinUsd').innerHTML = "Bitcoin a USD: " + bitcoin.bpi.USD.rate_float.toFixed(2);

            // Asegúrate de que la tasa de ARS a USD está disponible
            if (usdToArs.rates.USD) {
                document.getElementById('UsdArs').innerHTML = "ARS a USD: " + usdToArs.rates.USD.toFixed(2);
            } else {
                document.getElementById('UsdArs').innerHTML = "Error al cargar ARS";
            }
        } else {
            throw new Error("Datos de cotización no válidos");
        }

    } catch (error) {
        // Manejo de errores
        console.error('Error al cargar las cotizaciones:', error);
        document.getElementById('UsdEur').innerHTML = "Error al cargar EUR";
        document.getElementById('UsdArs').innerHTML = "Error al cargar ARS";
        document.getElementById('BitcoinUsd').innerHTML = "Error al cargar Bitcoin";
    } finally {
        // Ocultar el GIF de carga
        document.getElementById('imgEspera').style.visibility = 'hidden';
    }
}

// Mostrar los elementos iniciales (logo, título y GIF de carga)
function cargarElementos() {
    document.getElementById('imgLogo').setAttribute('src', 'logo.png'); 
    document.getElementById('titulo').textContent = "Cotizaciones del Dólar en Tiempo Real";
    document.getElementById('imgEspera').setAttribute('src', 'loading.gif');
    document.getElementById('imgEspera').style.visibility = 'visible';
}

// Añadir texto inicial a las divs de cotizaciones
function cargarTextos() {
    document.getElementById('UsdEur').innerHTML = "Cargando EUR a USD...";
    document.getElementById('UsdArs').innerHTML = "Cargando ARS a USD...";
    document.getElementById('BitcoinUsd').innerHTML = "Cargando Bitcoin a USD...";
}

// Función para simular una espera de un tiempo determinado (en ms)
function delay(ms) {
    return new Promise(res => setTimeout(res, ms));
}
