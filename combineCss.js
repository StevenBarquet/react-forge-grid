const fs = require('fs')
const path = require('path')

const srcDir = path.join(__dirname, 'src')
const outputFile = path.join(__dirname, 'css/index.css')

// Función para buscar archivos CSS de forma recursiva en un directorio
function findCssFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const fileStat = fs.statSync(filePath)

    if (fileStat.isDirectory()) {
      // Si es un directorio, busca de forma recursiva dentro de él
      findCssFiles(filePath, fileList)
    } else if (filePath.endsWith('.css')) {
      // Si es un archivo .css, añádelo a la lista
      fileList.push(filePath)
    }
  })

  return fileList
}

// Función para concatenar el contenido de los archivos CSS y escribirlos en main.css
function concatenateAndWriteCssFiles(files) {
  let combinedCss = ''

  files.forEach((file) => {
    const cssContent = fs.readFileSync(file, 'utf8')
    combinedCss += cssContent + '\n'
  })

  fs.writeFileSync(outputFile, combinedCss, 'utf8')
  console.log(
    `main.css has been created with the content of ${files.length} CSS files.`
  )
}

// Ejecutar las funciones
const cssFiles = findCssFiles(srcDir)
concatenateAndWriteCssFiles(cssFiles)
