# 🏁 Evaluación Práctica: Simulador de Mario Kart Customizer 🏁

**Asignatura:** Desarrollo Web (HTML5, CSS3 y JavaScript)  
**Objetivo:** Evaluar la capacidad del alumno para modificar la estructura (HTML), aplicar reglas de diseño responsivo y distribución (CSS3 Flexbox), y actualizar la lógica de programación y cálculo dinámico (JavaScript ES6).

---

## 📋 Instrucciones del Examen

Tomando como base la plantilla del proyecto que ya has clonado en tu repositorio de GitHub, deberás realizar de forma individual los siguientes 7 cambios puntuales. 

### 1. 👥 Nuevos Pilotos (HTML)
Añade dos nuevos corredores a la lista desplegable (`<select>`):
*   **Yoshi**: con un poder base de `40`.
*   **Luigi**: con un poder base de `50`.
*   *Nota:* Asegúrate de configurar correctamente los atributos `value` y `data-base` en las etiquetas `<option>`.

### 2. 🛞 Tipos de Neumáticos (HTML)
Agrega tres nuevas opciones de botones de opción (`<input type="radio">`) en la sección de neumáticos:
*   **Acero**: resta `-10` puntos de poder.
*   **Ligeros**: suma `+30` puntos de poder.
*   **Robustos**: resta `-20` puntos de poder.

### 3. 🍄 Mejoras del Kart (HTML)
Añade tres nuevas casillas de verificación (`<input type="checkbox">`) en la sección de mejoras acumulables:
*   **Estrella**: suma `+50` puntos de poder.
*   **Bananas**: resta `-15` puntos de peso/poder.
*   **Bill Bala**: resta `-25` puntos de peso/poder.

### 4. 🏎️ Nivel de Motor (HTML)
Modifica las reglas de validación del cuadro numérico (`<input type="number">`) que controla el nivel del motor para permitir un **rango del 1 al 9** (anteriormente el máximo era 5).

### 5. 🎨 Distribución en 2 Columnas con Flexbox (CSS3)
Modifica los estilos CSS de las secciones **Tipo de Neumáticos** (`.radio-group`) y **Mejoras del Kart** (`.checkbox-group`) para que sus opciones internas dejen de verse en una sola lista vertical y ahora se distribuyan en **2 columnas equilibradas**.
*   *Requisito:* Debes utilizar propiedades de **Flexbox** (como `display: flex`, `flex-wrap` y anchos porcentuales en los hijos `.option-label`).

### 6. 🧠 Actualización de Lógica e Imágenes (JavaScript)
Actualiza el script para dar soporte completo a las nuevas opciones:
*   Asegúrate de que la función de cálculo procese correctamente los nuevos valores numéricos (especialmente los valores negativos).
*   Ajusta la validación del nivel de motor en el script para que acepte y valide correctamente el **límite superior de 9**.
*   Añade imágenes de marcador de posición (placeholders) o reales para **Yoshi** y **Luigi** dentro del objeto `characterImages` para que cambien visualmente al seleccionarlos.

### 7. 🚀 Despliegue en GitHub
*   Realiza los `commits` correspondientes en tu entorno local explicando los cambios realizados.
*   Sube (`push`) los cambios finales a tu repositorio personal de GitHub.
*   Activa **GitHub Pages** en la configuración de tu repositorio para publicar la página web y comparte el enlace público con tu profesor.

---

## 📊 Rúbrica de Evaluación (60 Puntos Totales)

| Criterio | Descripción | Puntaje |
| :--- | :--- | :---: |
| **HTML - Personajes principales** | Estructura HTML correcta para el elemento o representación de los personajes | **4 pts** |
| **HTML - Neumáticos** | Inclusión correcta de los 3 neumáticos (1 pt c/u) | **3 pts** |
| **HTML - Mejoras / Upgrades** | Declaración en HTML de las 3 mejoras del juego/personaje (1 pt por cada mejora presente). | **3 pts** |
| **HTML - Control de entrada / Input numérico** | Sintaxis y etiqueta HTML correctas. Modificación correcta de los atributos de límites en el input según las especificaciones requeridas. | **5 pts** |
| **CSS3 - Flexbox** | Aplicación de display: flex y propiedades de alineación en el contenedor de los botones radio. Estructura en dos columnas bien alineadas (flex-wrap o distribución proporcional de ancho/flex-basis). | **4 pts** |
| **CSS3 - Flexbox** | Aplicación de display: flex y propiedades de alineación en el contenedor de los checkboxes. Estructura en dos columnas bien alineadas sin desbordamiento de elementos. | **4 pts** |
| **CSS3 - Flexbox** | Separación adecuada, sin encimamiento de texto ni saltos de línea indeseados en la interfaz. | **2 pts** |
| **JS - Operaciones** | Los valores o modificadores positivos incrementan el poder de forma exacta en el resultado final. | **4 pts** |
| **JS - Operaciones** | Los valores o modificadores negativos decrementan el poder de forma exacta (manejo adecuado del signo negativo en la suma/resta). | **4 pts** |
| **JS - Operaciones** | La combinación simultánea de aumentos y disminuciones arroja el valor total correcto sin errores de conversión de tipo | **2 pts** |
| **JS - Validaciones** | Configuración de atributos de entrada o controles gráficos que eviten entradas fuera de rango desde la vista del usuario. | **3 pts** |
| **JS - Validaciones** | Comprobación en el código (if, condicionales o funciones de ajuste) que impida procesar valores menores a 1 o mayores a 9, aun si el usuario fuerza un valor distinto. | **4 pts** |
| **JS - Validaciones** | Si se ingresa un valor fuera de rango (p. ej. 0, -5, 12), la aplicación lo ajusta automáticamente al límite más cercano (1 o 9) o notifica al usuario sin romper el flujo de la aplicación. | **3 pts** |
| **JS - Imágenes** | Identificación correcta del cambio de selección al elegir entre Yoshi y Luigi. | **3 pts** |
| **JS - Imágenes** | Modificación correcta de la ruta de la imagen en el DOM al seleccionar a Yoshi o a Luigi. | **4 pts** |
| **JS - Imágenes** | La nueva imagen se ajusta correctamente en dimensiones (ancho/alto) al contenedor asignado, evitando desbordamientos, distorsiones o cambios abruptos en el maquetado de la página. | **3 pts** |
| **GitHub Pages** | Repositorio actualizado con historial de commits claro y la página publicada y funcional en internet. | **5 pts** |

⚠️ **Nota importante:** El código no debe presentar errores en la consola del navegador (`F12`). Cualquier error de sintaxis que rompa el simulador penalizará la calificación final.
