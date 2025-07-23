document.addEventListener('DOMContentLoaded', () => {
  const alphabetDiv = document.getElementById('alphabet');
  // Lista de archivos de imágenes
  const files = [
    'A.535Z.png',
    'B.156Z.png',
    'c.100Z.png',
    'D.431Z.png',
    'E.167Z.png',
    'f.076Z.png',
    'Letra_G.png',
    'Letra_H.png',
    'Letra_I.png',
    'Letra_J.png',
    'Letra_K.png',
    'Letra_L.png',
    'letra_m.png',
    'Letra_N.png',
    'letra_o.png',
    'letra_p.png',
    'letra_q.361Z.png',
    'letra_r.884Z.png',
    'letra_s.505Z.png',
    'letra_t.440Z.png',
    'letra_u.615Z.png',
    'V.png',
    'W.png',
    'X.png',
    'Y.png',
    'Z.png'
  ];

  // Ordenar por letra
  files.sort((a, b) => {
    const getLetter = file => {
      if (file.includes('_')) {
        return file.split('_')[1][0].toUpperCase();
      }
      return file[0].toUpperCase();
    };
    return getLetter(a).localeCompare(getLetter(b));
  });

  // Crear elementos img
  files.forEach(file => {
    const letter = file.includes('_')
      ? file.split('_')[1][0].toUpperCase()
      : file[0].toUpperCase();
    const img = document.createElement('img');
    img.src = `imagenes/${file}`;
    img.alt = letter;
    img.title = letter;
    alphabetDiv.appendChild(img);
  });

  // Efecto fade-in secuencial con retraso
  const imgs = Array.from(alphabetDiv.querySelectorAll('img'));
  imgs.forEach((img, idx) => {
    img.style.opacity = '0';
    img.style.transition += ', opacity 0.5s ease';
    setTimeout(() => { img.style.opacity = '1'; }, idx * 100);
  });

  // Efecto cambio de color de bordes mediante JS
  imgs.forEach(img => {
    let colorInterval;
    img.addEventListener('mouseenter', () => {
      colorInterval = setInterval(() => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        img.style.borderColor = randomColor;
      }, 200);
    });
    img.addEventListener('mouseleave', () => {
      clearInterval(colorInterval);
      img.style.borderColor = 'transparent';
    });
  });

  // Efecto cambio de color para el título
  const titleEl = document.getElementById('title');
  const titleColors = ['red', 'yellow', 'blue'];
  let titleColorIndex = 0;
  setInterval(() => {
    titleEl.style.color = titleColors[titleColorIndex];
    titleColorIndex = (titleColorIndex + 1) % titleColors.length;
  }, 1000);
});