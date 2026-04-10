const productos = [
    {
        id: "ramito-de-abejitas",
        variantes: [
            { nombre: "Ramito de Abejitas",
	      precio: "35.00",
	      img: "img/ramito-de-abejitas-v1.webp",
	      desc: "Ramo de minigirasoles + abejas de maincraft + cartel de corazón" },
            { nombre: "Ramito de Abejitas",
	      precio: "35.00",
	      img: "img/ramito-de-abejitas-vluces.webp",
	      desc: "Ramo de miniflores amarillas + abejas de maincraft + cartel de corazón + Luces LED" }
        ]
    },
        {
        id: "ramo-bouquet",
        variantes: [
            { nombre: "Ramo Kemonito",
	      precio: "20.00",
	      img: "img/ramo-bouquet.webp",
	      desc: "Ramo de miniflores (color a su elección) + minitarjetita personalizada" }
        ]
    },
    {
        id: "tulipan-premium",
        variantes: [
            { nombre: "Tulipán Premium (Color a su elección)",
	      precio: "12.00",
	      img: "img/tulipan-premium.webp",
	      desc: "1 tulipán premium en ramo + mensaje en portada" }
        ]
    },
    {
        id: "mi-rayito-de-luz",
        variantes: [
            { nombre: "Mi Rayito de Luz",
	      precio: "20.00",
	      img: "img/mi-rayito-de-luz.webp",
	      desc: "1 girasol + 4 margaritas + 1 hoja de eucalipto + mensaje en portada" }
        ]
    },
    {
        id: "mi-solecito-de-mediodia",
        variantes: [
            { nombre: "Mi Solecito de Mediodía",
	      precio: "30.00",
	      img: "img/mi-solecito-de-mediodia.webp",
	      desc: "3 girasoles + 8 margaritas + 2 hojas de eucalipto + mensaje en portada" }
        ]
    },
    {
        id: "i-loviu",
        variantes: [
            { nombre: "I Loviu (Escoge tu color)",
	      precio: "30.00",
	      img: "img/i-loviu-vrojo.webp",
	      desc: "3 tulipanes premium + mensaje en portada" },
            { nombre: "I Loviu (Escoge tu color)",
	      precio: "30.00",
	      img: "img/i-loviu-vrosa.webp",
	      desc: "3 tulipanes premium + mensaje en portada" },
            { nombre: "I Loviu (Escoge tu color)",
	      precio: "30.00",
	      img: "img/i-loviu-vlila.webp",
	      desc: "3 tulipanes premium + mensaje en portada" }
        ]
    },
        {
        id: "mi-pequeño-delirio",
        variantes: [
            { nombre: "Mi Pequeño Delirio",
	      precio: "12.00",
	      img: "img/mi-pequeño-delirio.webp",
	      desc: "1 lirio (color a tu elección) + mensaje en portada" }
        ]
    },
    {
        id: "dulce-delirio",
        variantes: [
            { nombre: "Dulce Delirio",
	      precio: "30.00",
	      img: "img/dulce-delirio.webp",
	      desc: "2 lirios (color que gustes) + 4 margaritas (versión girasol) + 2 hojas de eucalipto + mensaje en portada" }
        ]
    },
    {
        id: "lirios-para-mi-delirio",
        variantes: [
            { nombre: "Lirios para Mi Delirio",
	      precio: "30.00",
	      img: "img/lirios-para-mi-delirio.webp",
	      desc: "3 lirios auténticos con estambres (colores a tu elección)" }
        ]
    },
    {
        id: "te-quiero-de-forma-verdadera",
        variantes: [
            { nombre: "Te Quiero de Forma Verdadera (Color a su elección)",
	      precio: "40.00",
	      img: "img/te-quiero-de-forma-verdadera-vluznatural.webp",
	      desc: "5 gerberas (color a su elección) + 2 hojas de eucalipto + 2 hojas de nubes" },
            { nombre: "Te Quiero de Forma Verdadera (Color a su elección)",
	      precio: "40.00",
	      img: "img/te-quiero-de-forma-verdadera-vrosa.webp",
	      desc: "5 gerberas (color a su elección) + 2 hojas de eucalipto + 2 hojas de nubes" },
            { nombre: "Te Quiero de Forma Verdadera (Color a su elección)",
	      precio: "40.00",
	      img: "img/te-quiero-de-forma-verdadera-vblanco.webp",
	      desc: "5 gerberas (color a su elección) + 2 hojas de eucalipto + 2 hojas de nubes" },
            { nombre: "Te Quiero de Forma Verdadera (Color a su elección)",
	      precio: "40.00",
	      img: "img/te-quiero-de-forma-verdadera-vlila.webp",
	      desc: "5 gerberas (color a su elección) + 2 hojas de eucalipto + 2 hojas de nubes" }
        ]
    }
];

const container = document.getElementById('catalogo');

function render() {
    container.innerHTML = productos.map(p => {
        const total = p.variantes.length;
        
        // Solo creamos puntos y contador si hay más de 1 variante
        const dots = total > 1 ? `
            <div class="dots-container" id="dots-${p.id}">
                ${p.variantes.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}"></span>`).join('')}
            </div>
        ` : '';

        const counter = total > 1 ? `<div class="counter" id="counter-${p.id}">1 / ${total}</div>` : '';

        return `
            <div class="card" data-id="${p.id}">
                ${counter}
                <div class="slider">
                    ${p.variantes.map((v, i) => `
                        <div class="slide" data-index="${i}">
                            <img src="${v.img}" alt="${v.nombre}">
                        </div>
                    `).join('')}
                </div>
                ${dots}
                <div class="info">
                    <h3>${p.variantes[0].nombre}</h3>
                    <p>${p.variantes[0].desc}</p>
                    <div class="precio">S/${p.variantes[0].precio}</div>
                </div>
            </div>
        `;
    }).join('');

    // Una vez que el HTML existe, activamos los sensores
    setupObservers();
}

function setupObservers() {
    const options = {
        root: null, // El "visor" es la pantalla del celular
        threshold: 0.6 // Se activa cuando el 60% de la imagen está visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const slide = entry.target;
                const card = slide.closest('.card');
                const productId = card.dataset.id;
                const index = parseInt(slide.dataset.index);
                const total = card.querySelectorAll('.slide').length;

                // 1. Actualizar el contador (ej: 2 / 3)
                const counter = document.getElementById(`counter-${productId}`);
                if (counter) counter.innerText = `${index + 1} / ${total}`;

                // 2. Actualizar los puntitos
                const dots = document.querySelectorAll(`#dots-${productId} .dot`);
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });
            }
        });
    }, options);

    // Le decimos al sensor que vigile cada imagen de cada producto
    document.querySelectorAll('.slide').forEach(slide => observer.observe(slide));
}

render();