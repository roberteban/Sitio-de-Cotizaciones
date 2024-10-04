# Sitio de Cotizaciones

Este proyecto es un sitio web que muestra las cotizaciones en tiempo real del dólar en relación con el euro, bitcoin y peso argentino. El sitio utiliza programación asíncrona para consultar APIs externas y mostrar los resultados de forma dinámica en la interfaz. Este proyecto busca proporcionar una herramienta fácil de usar para seguir el valor del dólar frente a otras monedas importantes.

## Tecnologías utilizadas

- **HTML**: Estructura básica del sitio.
- **CSS**: Estilos para el diseño y presentación de los elementos.
- **JavaScript**: Manejo de las solicitudes a las APIs mediante `fetch` y `async/await`.
  
## Funcionalidades

- Consulta las cotizaciones del dólar en tiempo real contra:
  - Euro
  - Bitcoin
  - Peso argentino
- Indicador de carga (gif) que se muestra mientras se procesan las cotizaciones.
- Actualización dinámica del contenido de la página con los datos obtenidos de las APIs.

## APIs utilizadas

- [Cotización Dólar-Euro](https://open.er-api.com/v6/latest/USD)
- [Cotización Dólar-Bitcoin](https://api.coindesk.com/v1/bpi/currentprice.json)
- [Cotización Dólar-Peso Argentino](https://open.er-api.com/v6/latest/ARS)

## Cómo utilizar

1. Clona este repositorio:
   ```bash
   git clone https://github.com/roberteban/Sitio-de-Cotizaciones.git
2. Abre el archivo index.html en tu navegador web.
