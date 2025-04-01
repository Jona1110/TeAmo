document.addEventListener('DOMContentLoaded', function() {
    const razonesContainer = document.getElementById('razones-container');
    const mensajeSecreto = document.getElementById('mensaje-secreto');
    const razones = [
        "Eres la persona más increíble que he conocido",
        "Tu sonrisa ilumina mi día",
        "Me haces reír como nadie más",
        "Tu corazón es más grande que el universo",
        "Me encanta cómo me miras",
        "Eres mi cómplice en todas mis locuras",
        "Tu abrazo es mi lugar seguro",
        "Hasta tus defectos me parecen perfectos",
        "Eres mi pensamiento favorito al despertar",
        "Contigo hasta lo aburrido es divertido",
        "Por tu sonrisa",
        "Por cómo me haces reír",
        "Por tus ojos lindos",
          "Por tus abrazos",
        "Por ser mi mejor amigo/a",
        "Por tu corazón grande",
        "Por cómo me escuchas",
        "Por tus locuras",
        "Por tu forma de quererme",
        "Por tu paciencia",
        "Por tus buenos días",
        "Por tus buenas noches",
    "Por los memes que me envías",
    "Por tu voz",
    "Por tu olor",
    "Por cómo me cuidas",
    "Por tus detalles",
    "Por tu honestidad",
    "Por tu compañía",
    "Por tu apoyo",
    "Por tus consejos",
    "Por tus silencios cómodos",
    "Por tu risa contagiosa",
    "Por tu forma de bailar",
    "Por tu amor a los animales",
    "Por cómo cocinas",
    "Por tus mensajes",
    "Por tus llamadas",
    "Por tus besos",
    "Por tu mano que siempre busca la mía",
    "Por tu optimismo",
    "Por cómo me entiendes",
    "Por tus ocurrencias",
    "Por tu inteligencia",
    "Por tu creatividad",
    "Por tu generosidad",
    "Por tu valentía",
    "Por tu ternura",
    "Por tu forma de mirarme",
    "Por tu sinceridad",
    "Por tu responsabilidad",
    "Por tu amor a la familia",
    "Por tus ganas de vivir",
    "Por tus sueños",
    "Por tus metas",
    "Por tu esfuerzo",
    "Por tu dedicación",
    "Por ser único/a",
    "Por ser tú",
    "Porque sí"
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