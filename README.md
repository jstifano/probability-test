# Probability App - Descripción

Aplicación web desarrollada bajo el framework Angular versión 5 que permite a los usuarios resolver bajo una interfaz, que posibilidad tiene de convertirse en millonario luego de lanzar determinadas veces (1000) una moneda.

## Instalación 

1. Clonar el proyecto desde el repositiorio público creado [Repositorio](https://github.com/jstifano/probability-test.git)

2. Luego ubicarse en la carpeta root del proyecto y colocar el comando `npm install` para instalar todas las dependencias del proyecto

3. Levantar el servidor web con el comando `ng serve`

## Detalles de la aplicación 

* La vista muestra un input con un botón para calcular la posibilidad de ser millonario.

* El campo verifica si se coloca un proporción fija válida en forma de fracción. Ejm: 1/4, /2, 4/5, etc.

* Al presionar el botón "CALCULAR", se mostrará el resultado de la posibilidad por 4 segundos en conjunto con una animación de Ladda colocada en el botón, la animación se la coloqué de esa manera debido a que la función se realiza muy rápido impidiendo que se vea.

* Luego de los 4 segundos de haber mostrado la información, estará disponible de nuevo el input para colocar una nueva proporción y calcular la posibilidad.



