# Poshaus

Sitio web de portafolio de Poshaus, ilustrador y diseñador, con ilustraciones, diseños de tatuajes, juegos y proyectos para clientes.

Poshaus es la casa en línea del trabajo de un ilustrador. Reúne ilustraciones, diseños de tatuajes, arte para juegos y proyectos para clientes en un solo lugar, con un estilo juguetón construido alrededor del agua y las olas en movimiento.

## Qué hay en el sitio

- **Página de inicio**: el logo de Poshaus y los enlaces sobre un video de agua en bucle, con toda la galería de ilustraciones debajo.
- **Diseños de tatuajes**: una galería de flash y piezas personalizadas.
- **Juegos**: logos y hojas de concepto de juegos hechos con Studio 904, cada uno con enlace a su página en itch.io.
- **Proyectos**: trabajo para clientes, como afiches de festivales y un libro infantil.
- **Tienda**: un enlace corto a la tienda de Poshaus en Everpress.

## Cómo está hecho

Todas las páginas se generan de antemano con Astro, así que los visitantes reciben HTML y CSS simples, casi sin JavaScript. Las imágenes pasan por las herramientas de imagen de Astro, que crean versiones más pequeñas al momento de compilar para que las galerías carguen rápido en el celular.

Los proyectos son una colección de contenido: cada uno es una entrada en un archivo JSON con una imagen de portada y, si quiere, una galería con su propia página o un enlace externo.

Los estilos usan Tailwind CSS con unos pocos colores de tema tomados del arte de las olas. Los encabezados con olas animadas de las galerías son SVG movidos con keyframes de CSS.

El sitio está alojado en Vercel.
