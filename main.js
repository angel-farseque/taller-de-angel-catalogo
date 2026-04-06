const productos = [
    {
        id: "ramito-de-abejitas",
        variantes: [
            { nombre: "Ramito de Abejitas",
	      precio: "35.00",
	      img: "img/ramito-de-abejitas-v1.webp",
	      desc: "Ramo de minigirasoles + abejas papercraft + cartel de corazón" },
            { nombre: "Ramito de Abejitas con Luces",
	      precio: "35.00",
	      img: "img/ramito-de-abejitas-vluces.webp",
	      desc: "Ramo de miniflores amarillas + abejas papercraft + cartel de corazón + Luces LED" }
        ]
    },
        {
        id: "ramo-bouquet",
        variantes: [
            { nombre: "Ramo Bouquet",
	      precio: "20.00",
	      img: "img/ramo-bouquet-v1.webp",
	      desc: "Ramo de miniflores azules + minitarjetita personalizada" },
            { nombre: "Ramo Bouquet",
	      precio: "20.00",
	      img: "img/ramo-bouquet-v2.webp",
	      desc: "Ramo de miniflores azules + minitarjetita personalizada" }
        ]
    },
    {
        id: "tulipan-premium",
        variantes: [
            { nombre: "Tulipán Premium",
	      precio: "12.00 por unidad",
	      img: "img/tulipan-premium.webp",
	      desc: "1 tulipán azul en ramo + mensaje en portada" }
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
            { nombre: "I Loviu (Rojo)",
	      precio: "30.00",
	      img: "img/i-loviu-vrojo.webp",
	      desc: "3 tulipanes rojos + mensaje en portada" },
            { nombre: "I Loviu (Rosa)",
	      precio: "30.00",
	      img: "img/i-loviu-vrosa.webp",
	      desc: "3 tulipanes rosas + mensaje en portada" },
            { nombre: "I Loviu (Lila)",
	      precio: "30.00",
	      img: "img/i-loviu-vlila.webp",
	      desc: "3 tulipanes lilas + mensaje en portada" }
        ]
    },
        {
        id: "mi-pequeño-delirio",
        variantes: [
            { nombre: "Mi Pequeño Delirio",
	      precio: "15.00",
	      img: "img/mi-pequeño-delirio.webp",
	      desc: "1 lirio azul o blanco + mensaje en portada" }
        ]
    },
    {
        id: "dulce-delirio",
        variantes: [
            { nombre: "Dulce Delirio",
	      precio: "30.00",
	      img: "img/dulce-delirio.webp",
	      desc: "2 lirios rosados + 4 margaritas (versión girasol) + 2 hojas de eucalipto + mensaje en portada" }
        ]
    },
    {
        id: "lirios-para-mi-delirio",
        variantes: [
            { nombre: "Lirios para Mi Delirio",
	      precio: "30.00",
	      img: "img/lirios-para-mi-delirio.webp",
	      desc: "3 lirios lilas auténticos con estambres" }
        ]
    },
    {
        id: "te-quiero-de-forma-verdadera",
        variantes: [
            { nombre: "Te Quiero de Forma Verdadera (Versión Luz Natural)",
	      precio: "40.00",
	      img: "img/te-quiero-de-forma-verdadera-vluznatural.webp",
	      desc: "5 gerberas + 2 hojas de eucalipto + 2 hojas de nubes" },
            { nombre: "Te Quiero de Forma Verdadera (Rosa)",
	      precio: "40.00",
	      img: "img/te-quiero-de-forma-verdadera-vrosa.webp",
	      desc: "5 gerberas + 2 hojas de eucalipto + 2 hojas de nubes" },
            { nombre: "Te Quiero de Forma Verdadera (Blanco)",
	      precio: "40.00",
	      img: "img/te-quiero-de-forma-verdadera-vblanco.webp",
	      desc: "5 gerberas + 2 hojas de eucalipto + 2 hojas de nubes" },
            { nombre: "Te Quiero de Forma Verdadera (Lila)",
	      precio: "40.00",
	      img: "img/te-quiero-de-forma-verdadera-vlila.webp",
	      desc: "5 gerberas + 2 hojas de eucalipto + 2 hojas de nubes" }
        ]
    }
];

const container = document.getElementById('catalogo');

function render() {
    container.innerHTML = productos.map(p => {
        const total = p.variantes.length;
        
        // Creamos los puntitos (solo si hay más de 1 variante)
        const dots = total > 1 ? `
            <div class="dots-container">
                ${p.variantes.map((_, index) => `
                    <span class="dot ${index === 0 ? 'active' : ''}"></span>
                `).join('')}
            </div>
        ` : '';

        // Creamos el contador (solo si hay más de 1 variante)
        const counter = total > 1 ? `
            <div class="counter">1 / ${total}</div>
        ` : '';

        return `
            <div class="card">
                ${counter}
                
                <div class="slider">
                    ${p.variantes.map(v => `
                        <div class="slide">
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
}

render();