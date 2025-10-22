const frases = [
    "La tecnología es el arte de lo posible.",
    "El código es poesía lógica.",
    "Cada bug es una lección; cada solución, una victoria.",
    "Transformar datos en decisiones es la verdadera IA."
];

document.getElementById("generarFrase").addEventListener("click", () => {
    const frase = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById("fraseIA").textContent = frase;
});

