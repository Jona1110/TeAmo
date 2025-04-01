document.addEventListener('DOMContentLoaded', function() {
    const razonesContainer = document.getElementById('razones-container');
    const mensajeSecreto = document.getElementById('mensaje-secreto');
    const razones = [
      "Te amo porque tu sonrisa ilumina mis días",
    "Te amo porque eres mi mejor amigo/a en el mundo",
    "Te amo porque me haces reír como nadie más",
    "Te amo porque tus abrazos son mi refugio",
    "Te amo porque aceptas mis locuras",
    "Te amo porque tienes el corazón más puro que conozco",
    "Te amo porque siempre sabes escucharme",
    "Te amo porque me quieres con mis defectos",
    "Te amo porque eres paciente conmigo",
    "Te amo porque tus buenos días alegran mi mañana",
    "Te amo porque tus buenas noches son mi tranquilidad",
    "Te amo porque me envías memes que me sacan risas",
    "Te amo porque tu voz es mi sonido favorito",
    "Te amo porque tu presencia me da paz",
    "Te amo porque cuidas de mí sin que te lo pida",
    "Te amo porque tienes detalles que me enamoran",
    "Te amo porque eres honesto/a siempre",
    "Te amo porque tu compañía es mi favorita",
    "Te amo porque me apoyas en todo lo que hago",
    "Te amo porque tus consejos son sabios",
    "Te amo porque nuestros silencios son cómodos",
    "Te amo porque tu risa es contagiosa",
    "Te amo porque bailas como si nadie te viera",
    "Te amo porque adoras a los animales",
    "Te amo porque cocinas con amor",
    "Te amo porque tus mensajes alegran mi día",
    "Te amo porque me llamas solo para escucharme",
    "Te amo porque tus besos me hacen feliz",
    "Te amo porque tu mano siempre busca la mía",
    "Te amo porque eres optimista ante la vida",
    "Te amo porque me entiendes sin palabras",
    "Te amo porque tienes ocurrencias geniales",
    "Te amo porque eres inteligente y sabio/a",
    "Te amo porque eres creativo/a en todo",
    "Te amo porque das sin esperar nada a cambio",
    "Te amo porque enfrentas tus miedos con valentía",
    "Te amo porque eres tierno/a cuando menos lo espero",
    "Te amo porque tu mirada me hace sentir especial",
    "Te amo porque siempre dices la verdad",
    "Te amo porque eres responsable en todo",
    "Te amo porque valoras a tu familia",
    "Te amo porque vives la vida con pasión",
    "Te amo porque luchas por tus sueños",
    "Te amo porque te pones metas y las cumples",
    "Te amo porque te esfuerzas cada día",
    "Te amo porque te dedicas a lo que amas",
    "Te amo porque eres único/a en este mundo",
    "Te amo porque eres auténtico/a",
    "Te amo porque existes en mi vida",
    "Te amo porque simplemente eres tú"
        // ¡Añade tantas como quieras!
    ];

    // Generador infinito de razones
    function generarRazon() {
        const razon = document.createElement('div');
        razon.className = 'razon';
        
        // Mezcla razones existentes con nuevas creativas
        const razonTexto = razones.length > 0 
            ? razones[Math.floor(Math.random() * razones.length)]
            : `Te amo porque eres única en ${Math.random().toString(36).substring(7)}`;
        
   razon.textContent = `Te amo porque ${razonTexto.toLowerCase()}`;
        razonesContainer.appendChild(razon);
        
        // Añade estilos aleatorios para diversión
        if (Math.random() > 0.7) {
            razon.style.background = `hsl(${Math.random() * 60 + 330}, 100%, 95%)`;
            
        }
    }

    // Scroll infinito
    let contadorRazones = 0;
    window.addEventListener('scroll', function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
            for (let i = 0; i < 5; i++) {
                generarRazon();
                contadorRazones++;
            }
            
            // Easter egg secreto después de 100 razones
            if (contadorRazones > 100 && !localStorage.getItem('easterEggVisto')) {
                mensajeSecreto.classList.remove('oculto');
                localStorage.setItem('easterEggVisto', 'true');
            }
        }
    });

    // Cerrar mensaje secreto
    document.getElementById('cerrar-mensaje').addEventListener('click', function() {
        mensajeSecreto.classList.add('oculto');
    });

    // Inicializar con 10 razones
    for (let i = 0; i < 10; i++) {
        generarRazon();
    }
});
