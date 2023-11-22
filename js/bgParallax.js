let contenedorParallax = document.getElementById('contenedorParallax');

function parallaxcontenedor() {

    if (window.scrollY >= contenedorParallax.offsetTop - contenedorParallax.offsetHeight) {

        let posicion = - (window.scrollY - contenedorParallax.offsetTop) * 0.20;
        contenedorParallax.style.backgroundPosition = '0 ' + posicion + 'px';
        
    }
}

window.addEventListener('scroll', parallaxcontenedor)

/* La propiedad backgroundPosition en CSS acepta dos valores: 
el primero representa la posición horizontal y 
el segundo la posición vertical del fondo. 
En el código  
contenedorParallax.style.backgroundPosition = '0 ' + posicion + 'px';
la posición horizontal se establece en 0 (izquierda), 
 y solo se cambia la posición vertical (posicion). */

/* Si cambias la línea a contenedorParallax.style.backgroundPosition = posicion + 'px';, 
estás configurando tanto la posición horizontal como la vertical 
en función de la variable posicion. 
Esto podría hacer que el fondo se mueva en ambas direcciones (horizontal y vertical) 
en lugar de solo en la dirección vertical.
 */