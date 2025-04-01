document.addEventListener('DOMContentLoaded', function() {
    const razonesContainer = document.getElementById('razones-container');
    const mensajeSecreto = document.getElementById('mensaje-secreto');
   const razones = [
    "tu sonrisa ilumina mis días",
    "eres mi mejor amiga en el mundo",
    "me haces reír como nadie más",
    "tus abrazos son mi refugio",
    "aceptas mis locuras",
    "tienes el corazón más puro que conozco",
    "siempre sabes escucharme",
    "me quieres con mis defectos",
    "eres paciente conmigo",
    "tus buenos días alegran mi mañana",
    "tus buenas noches son mi tranquilidad",
    "me envías memes que me sacan risas",
    "tu voz es mi sonido favorito",
    "tu presencia me da paz",
    "cuidas de mí sin que te lo pida",
    "tienes detalles que me enamoran",
    "eres honesta siempre",
    "tu compañía es mi favorita",
    "me apoyas en todo lo que hago",
    "tus consejos son sabios",
    "nuestros silencios son cómodos",
    "tu risa es contagiosa",
    "bailas como si nadie te viera",
    "adoras a los animales",
    "cocinas con amor",
    "tus mensajes alegran mi día",
    "me llamas solo para escucharme",
    "tus besos me hacen feliz",
    "tu mano siempre busca la mía",
    "eres optimista ante la vida",
    "me entiendes sin palabras",
    "tienes ocurrencias geniales",
    "eres inteligente y sabia",
    "eres creativa en todo",
    "das sin esperar nada a cambio",
    "enfrentas tus miedos con valentía",
    "eres tierna cuando menos lo espero",
    "tu mirada me hace sentir especial",
    "siempre dices la verdad",
    "eres responsable en todo",
    "valoras a tu familia",
    "vives la vida con pasión",
    "luchas por tus sueños",
    "te pones metas y las cumples",
    "te esfuerzas cada día",
    "te dedicas a lo que amas",
    "eres única en este mundo",
    "eres auténtica",
    "existes en mi vida",
    "simplemente eres tú"
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
            if (contadorRazones > 50 && !localStorage.getItem('easterEggVisto')) {
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
