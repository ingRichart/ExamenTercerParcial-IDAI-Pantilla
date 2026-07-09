   // JAVASCRIPT: Lógica de cálculo en tiempo real
    const form = document.getElementById('kartForm');
    const totalPowerDisplay = document.getElementById('totalPower');
    const powerBar = document.getElementById('powerBar');

    function calculatePower() {
        // A. Obtener valor del Select (Personaje)
        let characterBase = parseInt(document.getElementById('character').value);

        // B. Obtener valor del Radio seleccionado (Neumáticos)
        let tireValue = 0;
        const selectedRadio = document.querySelector('input[name="tires"]:checked');
        if (selectedRadio) {
            tireValue = parseInt(selectedRadio.value);
        }

        // C. Obtener valor de los Checkboxes (Mejoras acumuladas)
        let upgradesValue = 0;
        const checkboxes = document.querySelectorAll('input[name="upgrades"]:checked');
        checkboxes.forEach(cb => {
            upgradesValue += parseInt(cb.value);
        });

        // D. Obtener valor del Input Number (Nivel)
        let driverLevel = parseInt(document.getElementById('driverLevel').value);
        // Validación simple por si borran el número
        if (isNaN(driverLevel) || driverLevel < 1) driverLevel = 1;
        if (driverLevel > 5) driverLevel = 5;

        // E. FÓRMULA: (Base + Llantas + Mejoras) * Multiplicador de Nivel
        let total = (characterBase + tireValue + upgradesValue) * driverLevel;

        // Controlar que el poder no sea negativo
        if (total < 0) total = 0;

        // F. Renderizar los resultados en la interfaz
        totalPowerDisplay.textContent = total;
        
        // Ajustamos la barra de progreso (asumiendo un poder máximo estimado de 500)
        let percentage = (total / 500) * 100;
        if (percentage > 100) percentage = 100;
        powerBar.style.width = percentage + '%';
    }

    // Escuchar cualquier cambio dentro del formulario para recalcular de inmediato
    form.addEventListener('input', calculatePower);

    // Ejecutar una vez al cargar la página para inicializar los valores
    calculatePower();