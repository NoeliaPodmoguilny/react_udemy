/*  pruebas unitarias: enfocadas en pequeñas funcionalidades (son las principales)
*   pruebas de integración: enfocadas en cómo reaccionan vrias piezas en conjunto
* 
*   PASOS AAA:
*       - Arrange => "arreglar", preparamos el estado inicial
*       - Act => "actuar", aplicamos acciones o estimulos (llamar metodos, simular clicks, etc) 
*       - Assert => "afirmar", observar el comportamiento resultante (resultados esperados)

1) descargo libreria para test, por ej jest npm i --save-dev jest
2) agrego script "test": "jest" en package.jason
3) npm test
4) armo mi primera prueba en una carpeta llamada "tests" fuera de src
5) armo los archivos "espejos" (es decir si tengo un componente llamado "index.jsx" en test voy a tener un archivo "index.test.js")
6) agrego el --watchAll a jest en package.json
7) descargo npm install --save-dev @types/jest
8) instalar babel npm install --save-dev babel-jest @babel/core @babel/preset-env
9) añadir el archivo babel.config.js al root del proyecto y el script de babel: module.exports = {presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
}; 
*/