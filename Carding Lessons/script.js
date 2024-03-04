        const accordions = document.querySelectorAll('.accordion'); // Recuperar lementos de la clase acordion

        accordions.forEach(accordion => {
            const accordionTitle = accordion.querySelector('h1'); // Evento click del titulo
            const accordionContent = accordion.querySelector('.content'); // Iterar en cada acordion

            accordionTitle.addEventListener('click', function () {
                accordionContent.classList.toggle('active'); // Toggle de contenido
            });
        });