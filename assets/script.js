document.querySelectorAll('.fase h2').forEach((title) => {
    title.addEventListener('click', () => {
        const p = title.nextElementSibling;
        p.style.display = p.style.display === 'none' ? 'block' : 'none';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audio");

    // Evento que ocorre sempre que o tempo de reprodução muda
    audio.addEventListener("timeupdate", function() {
        if (audio.currentTime >= 76) {  // 76 segundos = 1:16
            audio.currentTime = 0;      // Retorna ao início
            audio.play();               // Reinicia o áudio
        }
    });
});

document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    // Opcional: Salva a preferência do usuário no localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Carrega a preferência do usuário ao carregar a página
window.addEventListener('load', function() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.favorite-star');

    stars.forEach(star => {
        // Verifica se a fase está marcada como favorita no localStorage
        const faseId = star.getAttribute('data-fase');
        const isFavorito = localStorage.getItem(faseId) === 'true';
        if (isFavorito) {
            star.classList.add('favorito');
        }

        // Adiciona evento de clique para marcar/desmarcar como favorita
        star.addEventListener('click', () => {
            const isFavorito = star.classList.contains('favorito');
            if (isFavorito) {
                star.classList.remove('favorito');
                localStorage.setItem(faseId, 'false');
            } else {
                star.classList.add('favorito');
                localStorage.setItem(faseId, 'true');
            }
        });
    });
});

// script.js

document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('search-bar');
    const chapterFilter = document.getElementById('chapter-filter');
    const fases = document.querySelectorAll('.fase');

    function filterFases() {
        const searchText = searchBar.value.toLowerCase();
        const selectedChapter = chapterFilter.value;

        fases.forEach(fase => {
            const title = fase.querySelector('h2').textContent.toLowerCase();
            const chapter = fase.id.split('-')[1]; // Obtém o capítulo da fase a partir do ID
            
            const matchesSearch = title.includes(searchText);
            const matchesChapter = !selectedChapter || chapter === selectedChapter;

            if (matchesSearch && matchesChapter) {
                fase.style.display = '';
            } else {
                fase.style.display = 'none';
            }
        });
    }

    searchBar.addEventListener('input', filterFases);
    chapterFilter.addEventListener('change', filterFases);
});

