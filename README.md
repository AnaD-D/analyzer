# Temperature Data Analysis

This code is designed to analyze temperature data from a CSV file named datos.csv. It calculates various statistical measures such as mean, median, range, and standard deviation of the temperature data.

## Requirements
- Node.js installed
- `csv-parser` and `mathjs` Node.js modules installed

## Usage
1. Make sure you have Node.js installed on your system.
2. Install the required modules csv-parser and mathjs by running the following command in the terminal:

```javascript 
npm install csv-parser mathjs
```
3. Place your `'datos.csv'` file in the same directory as the code.
4. Run the code using the following command:
```
node index.js
```
5. The code will output the calculated statistical measures in the terminal.

## Code Overview
The code consists of the following main parts:

1. Importing required modules:
- `fs`: File system module for reading the CSV file.
- `csv`: CSV parser module for parsing the CSV file.
- `math`: Math module for performing mathematical operations.

2. Initializing an empty array datos to store the data from the CSV file.

3. Reading the CSV file and loading the data into the datos array using the `'fs.createReadStream()'` and `'csv()'` functions.

4. Converting the `'Tiempo'` and `'Temperatura'` values to integers.

5. Calculating the mean temperature using the `math.mean()` function.

6. Calculating the median temperature using the `math.median()` function.

7. Calculating the temperature range using the `math.max()` and `math.min()` functions.

8. Calculating the standard deviation of the temperature using the `math.std()` function.

9. Logging the calculated statistical measures in the terminal.

## Code Comments
The code includes comments explaining each step of the process, making it easy to understand and follow.



