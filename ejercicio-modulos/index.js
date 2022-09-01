import chalk from "chalk"
import { suma, multiplicacion } from "./controller.js"

const resultado = multiplicacion(suma(1, 2), suma(4, 5))

console.log(chalk.green(`El resultado es: ${resultado}`))