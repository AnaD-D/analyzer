// Import required modules
const fs = require('fs'); // File system module
const csv = require('csv-parser'); // CSV parser module
const math = require('mathjs'); // Math module

// Initialize an empty array to store the data from the CSV file
let datos = [];

// Read the CSV file and load the data into the array
fs.createReadStream('datos.csv')
   .pipe(csv())
   .on('data', (row) => {
        // Convert the 'Tiempo' and 'Temperatura' values to integers
        row.Tiempo = parseInt(row.Tiempo);
        row.Temperatura = parseInt(row.Temperatura);

        // Push the row data into the 'datos' array
        datos.push(row);
    })
   .on('end', () => {
        // Log the loaded data
        console.log('Datos cargados correctamente:', datos);

        // Calculate the mean temperature
        const temperaturas = datos.map(dato => dato.Temperatura);
        const mediaTemperatura = math.mean(temperaturas);
        console.log('Media de temperatura:', mediaTemperatura);

        // Calculate the median temperature
        const medianaTemperatura = math.median(temperaturas);
        console.log('Mediana de temperatura:', medianaTemperatura);

        // Calculate the temperature range
        const rangoTemperatura = math.max(temperaturas) - math.min(temperaturas);
        console.log('Rango de temperatura:', rangoTemperatura);

        // Calculate the standard deviation of the temperature
        const desviacionEstandarTemperatura = math.std(temperaturas);
        console.log('Desviación estándar de temperatura:', desviacionEstandarTemperatura);
    });