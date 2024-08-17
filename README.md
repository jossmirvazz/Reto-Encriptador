<em> # Encriptador y Desencriptador de Texto </em>

Este es un proyecto simple de una aplicación web que permite encriptar y desencriptar texto, además de ofrecer un modo oscuro y un modo claro. La interfaz es sencilla y responsiva, diseñada para funcionar tanto en dispositivos móviles como en pantallas más grandes.

## Características

- **Encriptar Texto:** Convierte las vocales en palabras específicas.
- **Desencriptar Texto:** Reconvierte el texto encriptado a su forma original.
- **Validación de Texto:** Solo se aceptan caracteres en minúsculas y sin caracteres especiales ni acentos.
- **Modo Oscuro/Claro:** Permite alternar entre un tema oscuro y claro con una animación de transición.
- **Copia al Portapapeles:** Opción para copiar el texto encriptado o desencriptado al portapapeles.

## Tecnologías Usadas

- **HTML:** Estructura del contenido.
- **CSS:** Estilos de la página, incluyendo animaciones y diseño responsivo.
- **JavaScript:** Lógica de encriptación, desencriptación, validación de texto y alternancia entre modos.
  
## Este archivo maneja toda la funcionalidad lógica de la aplicación, incluyendo:

Encriptación y Desencriptación: Mediante reemplazo de caracteres.
Validación: Rechaza texto vacío, texto con mayúsculas o con caracteres especiales/acento.
Modo Oscuro/Claro: Alterna el tema visual de la página.
Copiado al portapapeles: Permite copiar el resultado de encriptación o desencriptación

## Estructura del Proyecto

```plaintext
.
├── index.html        # Página principal con la estructura HTML
├── style.css         # Archivo de estilos
├── app.js            # Archivo con la lógica JavaScript
└── README.md         # Documentación del proyecto

