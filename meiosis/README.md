# Meiosis — Autoevaluación Aurelio–Spruce

Autoevaluación formativa del microcurso **Biología Celular Esencial — Meiosis**. Incluye 30 preguntas, cinco por videoclase, con una sola respuesta válida y explicación científica de las cuatro alternativas.

## Contenido y funcionamiento

1. Cromosomas, cromátidas y ploidía.
2. Meiosis I.
3. Meiosis II.
4. Profase I y recombinación homóloga.
5. Meiosis y diversidad genética.
6. Errores de segregación e integración.

Se puede realizar el recorrido completo o una clase. Las respuestas se comprueban de inmediato; el resultado incluye un desglose por clase y un repaso de los errores. Los reintentos no tienen límite. Las pistas no descuentan puntos y cada pregunta vale un punto.

El avance se guarda en el navegador mediante `localStorage`. No se solicitan nombre, correo ni identificación. No se envían respuestas a un servidor, no hay seguimiento de alumnos ni registro de calificaciones en Payhip o Hotmart. Un intento conserva la primera elección comprobada de cada pregunta hasta que el estudiante decide reintentarlo.

La versión 1.1.0 amplía el banco de 24 a 30 preguntas. Conserva las respuestas guardadas de la versión 1.0.0 y solicita completar las seis preguntas nuevas antes de mostrar el resultado ampliado. Los identificadores de las preguntas anteriores no cambian.

## Abrir y publicar

Abrir `index.html` en un navegador moderno. No hace falta instalar dependencias para usar la autoevaluación.

La carpeta se publica como sección `meiosis/` del repositorio `aureliospruce31-gif/autoevaluacion-membrana`, que ya utiliza GitHub Pages desde `main`. Los enlaces de CSS, JavaScript y logotipo son relativos a esta carpeta.

También puede alojarse en un repositorio propio: conservar todos los archivos en la raíz y configurar GitHub Pages desde la rama `main`, carpeta raíz. [Documentación de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

GitHub Pages publica esta página y su código de forma accesible en Internet. La autoevaluación no contiene control de acceso por compra y la clave puede consultarse en el código: su finalidad es el aprendizaje autónomo, no un examen supervisado.

## Archivos

- `index.html`: estructura de la página.
- `styles.css`: diseño responsive, estados de foco y movimiento reducido.
- `app.js`: navegación, corrección, resultados, reintentos y guardado.
- `figures.js`: esquemas SVG con recuentos explícitos y secuencia introductoria controlable.
- `questions.json`: fuente editable del banco.
- `questions.js`: copia del banco preparada para abrir la página sin servidor.
- `assets/logo-oficial.svg`: logotipo oficial, sin rediseño ni cambios de proporción.
- `docs/banco-docente.md`: preguntas, clave, pistas y explicaciones.
- `tools/`: regeneración y comprobación del banco.
- `tests/ui.cjs`: recorrido funcional del navegador.

## Actualizar el banco y verificar

Después de editar `questions.json`:

```sh
npm run build
npm run check
```

Para comprobar la interacción en navegador:

```sh
npm install
npx playwright install chromium
npm run test:ui
```

El test admite `CHROMIUM_PATH` para un ejecutable existente, `PLAYWRIGHT_MODULE` para un módulo ya instalado y `QUIZ_TEST_OUTPUT` para guardar las capturas y el informe fuera del proyecto.

## Base científica y criterios

Se cotejó el banco con el PDF **Aurelio–Spruce · Biología Celular Esencial 02 — Meiosis** y los guiones disponibles de las videoclases 5 y 6. La navegación sigue las seis clases; el PDF desarrolla siete unidades y por eso cada pregunta indica su lectura complementaria real.

Los ejemplos declaran si cuentan toda la célula, un polo o un núcleo. Los modelos de no disyunción suponen un fallo en un solo par o cromosoma y ausencia de otros errores. La secuencia introductoria omite recombinación para seguir los recuentos. Cada leyenda indica qué representa el trazo: cromosoma, cromátida o eje.

Azul y ocre distinguen el origen de los homólogos, de acuerdo con el PDF. Las figuras son esquemas didácticos y no están a escala. No se usan reconstrucciones moleculares ficticias ni imágenes generativas para los recuentos.

El resultado es orientativo, sin umbral de aprobación ni certificación de dominio.
