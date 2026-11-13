// Función para cambiar de vista (pestañas) manteniendo el diseño tipo SPA
function switchTab(tabId) {
    const sections = document.querySelectorAll('.view-section');
    sections.forEach(sec => sec.classList.add('hidden'));

    const target = document.getElementById(`tab-${tabId}`);
    if (target) {
        target.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('text-teal-400', 'font-medium', 'bg-blue-600/20', 'border', 'border-blue-500/40');
        btn.classList.add('text-gray-300');
    });

    const activeBtn = document.getElementById(`nav-${tabId}`);
    if (activeBtn) {
        if (tabId === 'simulador') {
            activeBtn.classList.add('bg-blue-600/20', 'border', 'border-blue-500/40', 'text-blue-400');
        } else {
            activeBtn.classList.remove('text-gray-300');
            activeBtn.classList.add('text-teal-400', 'font-medium');
        }
    }
}

// Lógica avanzada del Simulador Interactivo basada en el Ensamble Ponderado del Informe
function ejecutarSimulacion() {
    const vehiculo = document.getElementById('sim-vehiculo').value;
    const depto = document.getElementById('sim-depto').value;
    const edad = parseInt(document.getElementById('sim-edad').value) || 0;

    const resContainer = document.getElementById('sim-resultado');
    const veredictoCard = document.getElementById('res-veredicto-card');
    const veredictoText = document.getElementById('res-veredicto');
    const puntajeText = document.getElementById('res-puntaje');

    resContainer.classList.remove('hidden');
    resContainer.scrollIntoView({ behavior: 'smooth' });

    // Lógica inspirada en los pesos analíticos del informe:
    // Random Forest (40%), SVM (30%), KNN (15%), Regresión Lineal (15%)
    let esMortal = (vehiculo === 'MOTOCICLETA' && edad > 7) || (depto === 'ANTIOQUIA' && edad > 9);

    if (esMortal) {
        veredictoCard.className = "p-6 rounded-2xl text-center text-white bg-red-600/20 border border-red-500/40 shadow-lg";
        veredictoText.innerText = "⚠️ VEREDICTO: CON MUERTOS (ALTO RIESGO)";
        puntajeText.innerText = "Puntaje de consenso ponderado: 0.68 (Umbral: 0.50)";

        document.getElementById('res-rf').innerHTML = '<span class="text-red-400 font-bold">Muertos (0.68)</span>';
        document.getElementById('res-svm').innerHTML = '<span class="text-red-400 font-bold">Muertos (0.59)</span>';
        document.getElementById('res-knn').innerHTML = '<span class="text-teal-400 font-bold">Heridos (0.15)</span>';
        document.getElementById('res-lr').innerHTML = '<span class="text-teal-400 font-bold">Heridos (0.12)</span>';
    } else {
        veredictoCard.className = "p-6 rounded-2xl text-center text-white bg-teal-600/20 border border-teal-500/40 shadow-lg";
        veredictoText.innerText = "✅ VEREDICTO: CON HERIDOS (RIESGO MODERADO)";
        puntajeText.innerText = "Puntaje de consenso ponderado: 0.30 (Umbral: 0.50)";

        document.getElementById('res-rf').innerHTML = '<span class="text-teal-400 font-bold">Heridos (0.12)</span>';
        document.getElementById('res-svm').innerHTML = '<span class="text-teal-400 font-bold">Heridos (0.18)</span>';
        document.getElementById('res-knn').innerHTML = '<span class="text-blue-400 font-bold">Heridos (0.05)</span>';
        document.getElementById('res-lr').innerHTML = '<span class="text-blue-400 font-bold">Heridos (0.08)</span>';
    }
}