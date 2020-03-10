function errorHandler(error){
  console.error(error)
   throw new Error(`Fallo en la operacion ${error}`)
}
module.exports = errorHandler