// Datos
        const startDate = new Date('2025-09-06T00:00:00');
        let currentFilter = 'all';
        let currentImageIndex = 0;
        let isUnlocked = false;
        let selectedLocation = null;
        const loveMessages = [
            "Tus ojos",
            "Tu sonrisa",
            "Tu pelo",
            "Tus cachetes",
            "Tus mordidas",
            "Tu personalidad",
            "Lo generosa que eres",
            "Tu pena",
            "Tus labios",
            "Tu olor",
            "Lo bonita que eres con mi hermana",
            "Tus zapatos",
            "Que estás biga (valiente/fuerte)",
            "Tus regaños",
            "Tu belleza interna",
            "Cómo me escuchas",
            "Tu risa",
            "Tu madurez",
            "Cómo te preocupas",
            "Tu brillo cuando bailas",
            "Las llamadas juntos",
            "Tu memoria de pollito",
            "Lo dañina",
            "Tu inteligencia",
            "Tu carisma",
            "Lo sensible que eres",
            "Esa rodilla a la mitad",
            "Lo espontánea",
            "La manera de cómo me apoyas",
            "Tu confianza",
            "Tus consejos",
            "Que eres atenta",
            "Que eres tímida",
            "Tu seguridad por lo que quieres",
            "La calma que me provocas",
            "Que eres mi polo a tierra",
            "Tu pasión por el baile",
            "La sensación de certeza de que siempre estás de mi lado",
            "Lo tesa que eres en todo lo que te propones",
            "Tu manera de ser mi refugio",
            "La forma en que me miras cuando dices \"te quiero\"",
            "Tu risa chistosa",
            "La facilidad con la que hablas y explicas tus pensamientos",
            "La sensación de tu cabeza recostada en mi hombro",
            "Tu disciplina",
            "Tu emoción al verme",
            "Las expresiones de tu cara",
            "La manera en que caminas",
            "Tu mano sobre la mía en el carro",
            "La suerte de tenerte en mi vida",
            "Tu energía al empezar un nuevo día",
            "Te preocupas por mí",
            "La paz que siento cuando estamos cerca",
            "Que sepas exactamente lo que necesito sin que lo pida",
            "Tu manera de hacerme sentir el hombre más afortunado",
            "El orgullo que siento por tus logros",
            "Que me permitas ver tu lado vulnerable",
            "La forma en que me miras",
            "La calidez de tu piel cuando te abrazo",
            "Que me corrijas cuando me equivoco",
            "La sensación de hogar que me das",
            "Que me incluyas en tus sueños y planes",
            "La emoción de la espera para verte",
            "Cuando nos despedimos, aunque triste bonitas",
            "La fuerza que me das solo con tu presencia",
            "Que me sobres el pelo",
            "Tu capacidad para inspirarme",
            "La forma en que me ayudas a ver la vida de otra perspectiva",
            "Tu energía inagotable"
        ];
        const locations = [
            {
                id: 1,
                name: "Café a la Vista",
                type: "past",
                description: "El día que nos hicimos novios ❤️",
                anecdote: "Aquí comenzó nuestra historia oficial. Entre risas y maquillaje, decidimos que esto seria para siempre.",
                icon: "☕"
            },
            {
                id: 2,
                name: "Mall Palo de Agua - La Oficina",
                type: "past",
                description: "Nuestro lugar de encuentro especial 🏢",
                anecdote: "Para ir a la fija palo de agua es siempre una buena opción, deberiamos convertilra en nuestra oficina.",
                letterText: "Este lugar siempre me recuerda a ti, total las unicas veces que he ido es contigo, y mejor que siempre sea asi",
                icon: "🏢"
            },
            {
                id: 3,
                name: "UTP - Universidad Tecnológica de Pereira",
                type: "future",
                description: "Próximamente nuestra universidad 🎓",
                anecdote: "En una nueva etapa en la que vamos a entrar vamos a tener la posibildad de vernos todos los dias",
                letterText: "En este lugar van a quedar muchos. recuerdo plasmados aqui que luego recordaremos con risas",
                icon: "🎓"
            }
        ];
        // Lista de todas las fotos y videos
        const galleryFiles = [
            "Asets/Fotos/0009D1D8-6C80-4983-82C1-13F24ED8661B.jpg",
            "Asets/Fotos/0E72876F-030D-43CE-A4C1-9F14D73E0FA0.jpg",
            "Asets/Fotos/163D7325-3FD4-4BAD-972D-24C1779D42A5.jpg",
            "Asets/Fotos/1c395f36-3dfa-4a41-994b-c2cbd6a1c80f.jpg",
            "Asets/Fotos/219ed69c-411b-4ad2-88c0-881039e358e6.jpg",
            "Asets/Fotos/298FBD71-3EDA-4516-B9FD-F1608FBD0F29.jpg",
            "Asets/Fotos/4ea417b7-020d-41cb-93f8-85cfe6c12faa.jpg",
            "Asets/Fotos/54F37407-804A-4BD8-8BAC-3A26CB91C256.jpg",
            "Asets/Fotos/667b668a-619f-4166-9135-b05e73e6ee13.jpg",
            "Asets/Fotos/67e519fd-e2ea-49af-a722-3a1d36f4e8ff.jpg",
            "Asets/Fotos/69822970-651a-4084-8fb4-c504886ff624.jpg",
            "Asets/Fotos/7EE62B4F-0847-429C-9F3A-28FE44241BBC.jpg",
            "Asets/Fotos/81ED8CDE-715A-4274-BB56-7399615D06D6.jpg",
            "Asets/Fotos/863B6E33-3FEE-449F-8279-B88BB0AF8883.jpg",
            "Asets/Fotos/8dd695d7-bacc-4de1-82a0-08ef3c9795d8.jpg",
            "Asets/Fotos/A917B39C-BF9E-4049-8606-E6B3E5627CA3.jpg",
            "Asets/Fotos/bafc9f47-37b5-4683-93e2-cc19e6442f03.jpg",
            "Asets/Fotos/DF2B5EEF-BEBA-4B15-98BE-52582522CE88.jpg",
            "Asets/Fotos/fba1dbad-dfb3-48a3-b621-bb3c42bc9afb.jpg",
            "Asets/Fotos/FullSizeRender.jpeg",
            "Asets/Fotos/IMG_0030.jpeg",
            "Asets/Fotos/IMG_0034.jpeg",
            "Asets/Fotos/IMG_0082.PNG",
            "Asets/Fotos/IMG_0296.jpeg",
            "Asets/Fotos/IMG_0297.jpeg",
            "Asets/Fotos/IMG_0298.jpeg",
            "Asets/Fotos/IMG_0299.jpeg",
            "Asets/Fotos/IMG_0301.jpeg",
            "Asets/Fotos/IMG_0302.jpeg",
            "Asets/Fotos/IMG_0303.jpeg",
            "Asets/Fotos/IMG_0308.jpeg",
            "Asets/Fotos/IMG_0309.jpeg",
            "Asets/Fotos/IMG_0317.PNG",
            "Asets/Fotos/IMG_0427.jpeg",
            "Asets/Fotos/IMG_0428.jpeg",
            "Asets/Fotos/IMG_0429.jpeg",
            "Asets/Fotos/IMG_0435.jpeg",
            "Asets/Fotos/IMG_0436.jpeg",
            "Asets/Fotos/IMG_0437.jpeg",
            "Asets/Fotos/IMG_0440.jpeg",
            "Asets/Fotos/IMG_0441.jpeg",
            "Asets/Fotos/IMG_0442.jpeg",
            "Asets/Fotos/IMG_0447.jpeg",
            "Asets/Fotos/IMG_0448.jpeg",
            "Asets/Fotos/IMG_0449.jpeg",
            "Asets/Fotos/IMG_0450.jpeg",
            "Asets/Fotos/IMG_0451.jpeg",
            "Asets/Fotos/IMG_0452.jpeg",
            "Asets/Fotos/IMG_0453.jpeg",
            "Asets/Fotos/IMG_0454.jpeg",
            "Asets/Fotos/IMG_0455.jpeg",
            "Asets/Fotos/IMG_0457.jpeg",
            "Asets/Fotos/IMG_0458.jpeg",
            "Asets/Fotos/IMG_0459.jpeg",
            "Asets/Fotos/IMG_0460.jpeg",
            "Asets/Fotos/IMG_0461.jpeg",
            "Asets/Fotos/IMG_0462.jpeg",
            "Asets/Fotos/IMG_0463.jpeg",
            "Asets/Fotos/IMG_0464.jpeg",
            "Asets/Fotos/IMG_0465.jpeg",
            "Asets/Fotos/IMG_0466.jpeg",
            "Asets/Fotos/IMG_0467.jpeg",
            "Asets/Fotos/IMG_0951.jpeg",
            "Asets/Fotos/IMG_0954.jpeg",
            "Asets/Fotos/IMG_0955.jpeg",
            "Asets/Fotos/IMG_0956.jpeg",
            "Asets/Fotos/IMG_0957.jpeg",
            "Asets/Fotos/IMG_0959.jpeg",
            "Asets/Fotos/IMG_1031.jpeg",
            "Asets/Fotos/IMG_1040.PNG",
            "Asets/Fotos/IMG_1043.jpeg"
        ];
        // Contador
        function updateCounter() {
            const now = new Date();
            const diff = now - startDate;
           
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
           
            document.getElementById('counter').textContent =
                `${days}d ${hours}h ${minutes}m ${seconds}s`;
            const threeMonthsDate = new Date(startDate);
            threeMonthsDate.setMonth(threeMonthsDate.getMonth() + 3);
            const daysUntilThreeMonths = Math.ceil((threeMonthsDate - now) / (1000 * 60 * 60 * 24));
           
            document.getElementById('nextMilestone').textContent =
                `⏰ ${daysUntilThreeMonths} días para nuestros 3 meses`;
        }
        setInterval(updateCounter, 1000);
        updateCounter();
        // QR Easter Egg
        const header = document.getElementById('header');
        const qrPopup = document.getElementById('qrPopup');
       
        header.addEventListener('mouseenter', () => {
            qrPopup.classList.add('show');
        });
       
        header.addEventListener('mouseleave', () => {
            qrPopup.classList.remove('show');
        });
        // Mapa
        function renderLocations() {
            const grid = document.getElementById('locationGrid');
            grid.innerHTML = '';
           
            const filtered = currentFilter === 'all'
                ? locations
                : locations.filter(loc => loc.type === currentFilter);
           
            filtered.forEach(location => {
                const card = document.createElement('div');
                card.className = 'location-card';
                card.innerHTML = `
                    <div class="location-icon">${location.icon}</div>
                    <h3 class="location-name">${location.name}</h3>
                    <p class="location-description">${location.description}</p>
                    <span class="location-badge ${location.type === 'past' ? 'badge-past' : 'badge-future'}">
                        ${location.type === 'past' ? 'Recuerdo' : 'Promesa'}
                    </span>
                `;
                card.addEventListener('click', () => showLocationDetail(location));
                grid.appendChild(card);
            });
        }
        function showLocationDetail(location) {
            selectedLocation = location;
            const detail = document.getElementById('locationDetail');
            detail.innerHTML = `
                <div class="location-detail">
                    <h3>${location.name}</h3>
                    <p>"${location.anecdote}"</p>
                </div>
            `;
           
            // Mostrar modal de carta
            document.getElementById('letterModalTitle').textContent = `💌 Carta desde ${location.name}`;
            document.getElementById('letterAnecdote').textContent = `"${location.anecdote}"`;
            
            // Usar texto personalizado si existe, sino usar el texto por defecto
            const defaultText = "Este lugar es especial porque aquí dejamos una huella en nuestro camino juntos. Cada vez que pienso en este sitio, recuerdo lo afortunado que soy de tenerte a mi lado.";
            document.getElementById('letterDescription').textContent = location.letterText || defaultText;
            
            document.getElementById('letterModal').classList.add('show');
        }
        // Filtros
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.dataset.filter;
                renderLocations();
            });
        });
        renderLocations();
        // Generador de mensajes
        document.getElementById('generateBtn').addEventListener('click', () => {
            const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
            document.getElementById('messageText').textContent = `"${randomMessage}"`;
            document.getElementById('messageBox').classList.add('show');
        });
        // Galería - Film Roll
        const filmRoll = document.getElementById('filmRoll');
        let galleryItems = [];
        
        // Crear el rollo de cine con todas las fotos y videos
        function createFilmRoll() {
            filmRoll.innerHTML = '';
            
            // Duplicar la lista para crear un efecto de bucle infinito
            const duplicatedFiles = [...galleryFiles, ...galleryFiles];
            
            duplicatedFiles.forEach((file, index) => {
                const frame = document.createElement('div');
                frame.className = 'film-frame';
                frame.dataset.index = index % galleryFiles.length;
                
                const isVideo = /\.(mov|MOV|mp4|MP4)$/i.test(file);
                
                if (isVideo) {
                    const video = document.createElement('video');
                    video.src = file;
                    video.muted = true;
                    video.loop = true;
                    video.playsInline = true;
                    frame.appendChild(video);
                    // Reproducir automáticamente al hacer hover
                    frame.addEventListener('mouseenter', () => {
                        video.play().catch(() => {});
                    });
                    frame.addEventListener('mouseleave', () => {
                        video.pause();
                        video.currentTime = 0;
                    });
                } else {
                    const img = document.createElement('img');
                    img.src = file;
                    img.loading = 'lazy';
                    img.onerror = function() {
                        this.style.display = 'none';
                    };
                    frame.appendChild(img);
                }
                
                frame.addEventListener('click', () => {
                    showMediaInModal(file, index % galleryFiles.length);
                });
                
                filmRoll.appendChild(frame);
            });
            
            galleryItems = galleryFiles;
            updateGalleryInfo();
            
            // Activar animación automática después de un breve delay
            setTimeout(() => {
                filmRoll.classList.add('auto-scroll');
            }, 500);
        }
        
        function updateGalleryInfo() {
            const info = document.getElementById('galleryInfo');
            info.textContent = `${galleryFiles.length} momentos especiales - Haz clic en cualquier foto o video para verlo en grande`;
        }
        
        function showMediaInModal(file, index) {
            const modal = document.getElementById('galleryModal');
            const modalImage = document.querySelector('.modal-image');
            const modalDescription = document.getElementById('modalDescription');
            const modalInfo = document.getElementById('modalInfo');
            
            modalImage.innerHTML = '';
            
            const isVideo = /\.(mov|MOV|mp4|MP4)$/i.test(file);
            
            if (isVideo) {
                const video = document.createElement('video');
                video.src = file;
                video.controls = true;
                video.autoplay = true;
                modalImage.appendChild(video);
            } else {
                const img = document.createElement('img');
                img.src = file;
                modalImage.appendChild(img);
            }
            
            modalDescription.textContent = `Momento especial #${index + 1}`;
            modalInfo.textContent = `${index + 1} de ${galleryFiles.length}`;
            modal.classList.add('show');
        }
        
        // Navegación del rollo
        document.getElementById('prevBtn').addEventListener('click', () => {
            const scrollAmount = 220; // Ancho del frame + gap
            filmRoll.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
        
        document.getElementById('nextBtn').addEventListener('click', () => {
            const scrollAmount = 220; // Ancho del frame + gap
            filmRoll.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        
        // Inicializar el rollo de cine
        createFilmRoll();
        // Mensaje secreto
        document.getElementById('unlockBtn').addEventListener('click', () => {
            const input = document.getElementById('secretInput').value.toUpperCase().replace(/\s/g, '');
           
            if (input === 'HOLAMIAMORTEAMOMUCHOESTEESMIREGALO') {
                isUnlocked = true;
                document.getElementById('secretTitle').innerHTML = '🔓 Mensaje Secreto';
                document.getElementById('secretContainer').innerHTML = `
                    <div class="letter-container">
                        <div class="letter-content">
                            <p>Hola mi reina hermosa, quería decirte que el tiempo a tu lado pasa mucho más rápido y en un abrir y cerrar de ojos podemos decir que llevamos 2 meses de novios.</p>
                            <p>Cada día a tu lado me llena de una felicidad que no sabía que existía, me llena de un gozo inexpresable. Gracias a ti me levanto todos los días con una sonrisa en mi rostro, pues eres mi primer pensamiento todas las mañanas y mi último suspiro antes de dormir. Eres la razón por la que el mundo parece más brillante, más lleno de colores y posibilidades. En estos dos meses, he descubierto en ti no solo a una novia, sino a una compañera de vida, alguien que me entiende con una sola mirada.</p>
                            <p>Tus ojos hermosos, tus labios bellos y ese pelo divino me enamoran cada vez que te veo, pero es tu inteligencia, tu dedicación y tu corazón tan puro lo que me hace sentir el hombre más afortunado al estar contigo. Estar a tu lado me hace inmensamente feliz; es como si hubieras encendido un fuego en mi alma que nunca se apaga.</p>
                            <p>Gracias por elegirme cada día, por apoyarme en mis sueños y por ser esa persona que hace que lo ordinario se vuelva extraordinario. Sueño con muchos más meses, años, siglos incluso, construyendo recuerdos juntos, viajando a nuevos lugares y enfrentando lo que venga, pero siempre tomando tu mano. Te amo más de lo que las palabras pueden expresar, mi reina.</p>
                        </div>
                    </div>
                `;
            }
        });
        // Modales
        document.getElementById('closeGalleryModal').addEventListener('click', () => {
            document.getElementById('galleryModal').classList.remove('show');
        });
        document.getElementById('closeLetterModal').addEventListener('click', () => {
            document.getElementById('letterModal').classList.remove('show');
        });
        document.getElementById('galleryModal').addEventListener('click', (e) => {
            if (e.target.id === 'galleryModal') {
                document.getElementById('galleryModal').classList.remove('show');
            }
        });
        document.getElementById('letterModal').addEventListener('click', (e) => {
            if (e.target.id === 'letterModal') {
                document.getElementById('letterModal').classList.remove('show');
            }
        });

        // Enhance intro animation to make photos/videos appear quickly
        window.addEventListener('load', () => {
            const introOverlay = document.createElement('div');
            introOverlay.id = 'introOverlay';
            introOverlay.innerHTML = `
                <div class="intro-message">Felices 2 meses ❤️</div>
                <div class="intro-collage">
                    ${galleryFiles.filter(file => !/\.(mov|MOV|mp4|MP4)$/i.test(file))
                        .map((file, index) => `<img src="${file}" alt="Collage Image" style="animation-delay: ${index * 0.1}s;">`)
                        .join('')}
                </div>
            `;
            document.body.appendChild(introOverlay);

            setTimeout(() => {
                introOverlay.classList.add('fade-out');
                setTimeout(() => introOverlay.remove(), 1000);
            }, 3000); // Adjusted timing to 3 seconds
        });

        // Rain of Stars Animation
        function createStar() {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDuration = `${Math.random() * 0.2 + 0.1}s`;
            document.querySelector('.stars-container').appendChild(star);

            setTimeout(() => star.remove(), 200); // Remove star after animation ends
        }

        function startRainOfStars() {
            const starsContainer = document.createElement('div');
            starsContainer.className = 'stars-container';
            document.body.appendChild(starsContainer);

            setInterval(createStar, 100); // Create a star every 100ms
        }

        startRainOfStars();
