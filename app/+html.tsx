import { ScrollViewStyleReset } from 'expo-router/html';
import { type PropsWithChildren } from 'react';

/**
 * Este archivo es solo web y se utiliza para configurar el HTML raíz de cada página web durante la representación estática.
 * El contenido de esta función solo se ejecuta en entornos Node.js y no tiene acceso al DOM ni a las API del navegador.
 */
export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/*
          Desactivar el desplazamiento del cuerpo en la web. Esto hace que los componentes de ScrollView funcionen más parecido a como lo hacen en forma nativa.
 Sin embargo, el desplazamiento corporal suele ser bueno para la web móvil. Si desea habilitarlo, elimine esta línea.        */}
        <ScrollViewStyleReset />

        {/** Uso de estilos CSS sin formato como trampilla de escape para garantizar que el color de fondo nunca parpadee en el modo oscuro.  */}
        <style dangerouslySetInnerHTML={{ __html: responsiveBackground }} />
        {/* Agregue cualquier elemento <head> adicional que desee que esté disponible globalmente en la web...*/}
        
      </head>
      
      <body>{children}</body>
    </html>
  );
}

const responsiveBackground = `
body {
  background-color: #red;
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: #000;
  }
}`;
