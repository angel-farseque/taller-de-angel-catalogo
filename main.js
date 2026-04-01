// 1. Datos del catálogo (fáciles de editar)
const productos = [
    { id: 1, nombre: "Producto A", precio: 10 },
    { id: 2, nombre: "Producto B", precio: 20 },
    { id: 3, nombre: "Producto C", precio: 15 }
];

let carrito = [];

// 2. Referencias al DOM
const catalogContainer = document.getElementById('catalog-container');
const stepSelection = document.getElementById('step-selection');
const stepSummary = document.getElementById('step-summary');
const summaryText = document.getElementById('summary-text');
const btnFinalizar = document.getElementById('btn-copy-redirect');
const btnBack = document.getElementById('btn-back');

// 3. Renderizar Catálogo
function renderCatalog() {
    productos.forEach(prod => {
        const btn = document.createElement('button');
        btn.innerText = `${prod.nombre} - $${prod.precio}`;
        btn.onclick = () => seleccionarProducto(prod);
        catalogContainer.appendChild(btn);
    });
}

// 4. Lógica de Selección
function seleccionarProducto(prod) {
    carrito.push(prod);
    mostrarResumen();
}

function mostrarResumen() {
    stepSelection.style.display = 'none';
    stepSummary.style.display = 'block';

    const lista = carrito.map(p => `- ${p.nombre} ($${p.precio})`).join('\n');
    const total = carrito.reduce((sum, p) => sum + p.precio, 0);
    
    summaryText.innerText = `Tu pedido:\n${lista}\n\nTotal: $${total}`;
}

// 5. El Corazón del MVP: Copiar y Redirigir
btnFinalizar.onclick = async () => {
    const textoACopiar = summaryText.innerText;
    const instagramUser = "taller_de_angel_"; // <--- Cambia esto

    try {
        await navigator.clipboard.writeText(textoACopiar);
        
        // Feedback visual rápido
        btnFinalizar.innerText = "¡Copiado! Abriendo Instagram...";
        btnFinalizar.style.backgroundColor = "#25D366";

        setTimeout(() => {
            window.location.href = `https://ig.me/m/${instagramUser}`;
        }, 1000);

    } catch (err) {
        alert("No se pudo copiar automáticamente. Por favor, selecciona el texto y cópialo manualmente.");
    }
};

btnBack.onclick = () => {
    // Vaciar el carrito para un nuevo pedido
    carrito = []; 
    
    // Alternar visibilidad de las secciones
    stepSummary.style.display = 'none';
    stepSelection.style.display = 'block';
    
    // Restaurar el texto del botón de finalizar por si ya se había usado
    btnFinalizar.innerText = "Copiar Resumen y abrir Instagram";
    btnFinalizar.style.background = ""; // Vuelve al gradiente del CSS
};

// Inicializar
renderCatalog();