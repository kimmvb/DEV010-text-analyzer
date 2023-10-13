# Analizador de texto

## Descripción
Este proyecto tiene como objetivo contar las palabras y números de un texto en específico, ya se cortado y pegado o escrito directamente sobre el área de texto. Este analizador podría ser de ayuda para alguien que necesite contar ciertos parámetros dentro de un texto. A continuación se muestra que puede contar este proyecto:
 - Palabras
 - Caracteres con y sin espacios
 - Números
 - Suma de números
 - Longitud promedio de las palabras

![Captura de pantalla 2023-07-24 120056](https://github.com/kimmvb/DEV010-text-analyzer/assets/137528066/be4f2265-5252-4ad6-a090-b48c65c88457)

## Funcionamiento
Para el funcionamiento correcto de la página se utilizan cuatro archivos:
- index.html: Tiene la estructura básica de la página.
- style.css: Contiene el estilo, tanto de la lista, como del la página en general.
- analyzer.js: Contiene los métodos para crear el conteo de palabras, caracteres y números.
- index.js: Conecta los métodos del analyzer con los DOM y los selectores de CSS.

![Analizador de texto](https://github.com/kimmvb/DEV010-text-analyzer/assets/137528066/36217fff-fa4a-48fd-9ca1-bae039ddba43)

## Primer boceto
Para empezar, cree mi primer boceto de como quería que se viera la página una vez terminada.

![Primer boceto](https://github.com/kimmvb/DEV010-text-analyzer/assets/137528066/61f99a57-a8da-4262-a138-b7aa16bb3730)

## Base de la página:
Empecé, teniendo en mente que quería que la página tuviera algo de funcionalidad al final del primer sprint. Por ello, me centré en tener la base en HTML y luego algo de CSS. Luego de eso, empecé a crear los métodos para poder contra palabras, caracteres y caracteres sin espacio.


https://github.com/kimmvb/DEV010-text-analyzer/assets/137528066/c1c66702-7eff-4fc9-90ec-7fa46f9f21e4

## Segundo boceto:
En base en el boceto anterior, cree el otro, está vez más colorido y completo.

![Segundo boceto](https://github.com/kimmvb/DEV010-text-analyzer/assets/137528066/118493eb-41e1-4eb7-bf27-32d22a47360b)

## Terminando la página:
Ajusté lo que quedaba de CSS y terminé los últimos métodos del analyzer. Al final, pude contar la cantidad de números, la suma de esos números y el promedio de la longitud de las palabras.

- Resultado final del CSS

https://github.com/kimmvb/DEV010-text-analyzer/assets/137528066/6baf498b-cf01-4902-bae0-c6fb391284ab

- Métodos del analyzer
![number count](https://github.com/kimmvb/DEV010-text-analyzer/assets/137528066/4f085944-447b-4d50-bd7e-20651e55b0c5)
![promedio palabras](https://github.com/kimmvb/DEV010-text-analyzer/assets/137528066/d0a87bee-cf4d-4106-8e58-9391dbbd1803)

- Selectores del index.js

https://github.com/kimmvb/DEV010-text-analyzer/assets/137528066/9cf1c529-e2e7-4cca-bf64-95bb6d991010

## Pruebas unitarias
Se pasaron y probaron todas las pruebas unitarias del proyecto.
![test](https://github.com/kimmvb/DEV010-text-analyzer/assets/137528066/19c830ce-0b08-4dca-8798-bc76720a7bfb)
