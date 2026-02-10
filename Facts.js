function fact(title, description){
    this.title = title;
    this.description = description;
}

function renderFacts() {
  const container = document.getElementById("facts-container");

const facts = [
    new fact("Огромная масса",
    "PHOENIX A — одна из самых массивных чёрных дыр, превышающая миллиарды масс Солнца."),
    new fact("Релятивистские джеты",
    "PHOENIX A выбрасывает струи плазмы почти со скоростью света."),
    new fact("Мощный аккреционный диск",
    "Её диск светится настолько ярко, что виден даже далеко за пределами галактики-хозяина."),
    new fact("Миллионные температуры",
    "Внутренняя часть диска достигает температур в миллионы градусов."),
    new fact("Огромный горизонт событий",
    "Свету понадобилось бы больше часа, чтобы пересечь горизонт событий PHOENIX A."),
    new fact("Активное ядро галактики",
    "Её активность влияет на работу ядра всей галактики"),
    new fact(
    "Гравитационная линза",
    "PHOENIX A сильно искривляет свет, делая её идеальным объектом для изучения линзирования."),
    new fact("Гравитационные возмущения",
    "Её гравитация искажает траектории соседних звёзд и газа."),
    new fact("Рентгеновское излучение",
    "Ее аккреционный диск является самым ярким источником рентгеновского излучения во Вселенной, который нам известен")
]

const styleCard = {
    padding: '20px',
    background: 'rgba(41, 41, 41, 0.8);',
    borderRadius: '40px'
}

const styleTitle = {
    fontSize: '36px',
    fontWeight: "600"

}

facts.forEach(fact => {
    const card = document.createElement("div");
    card.className = "fact-card";
    card.style.cssText = `
        padding: ${styleCard.padding};
        background-color: ${styleCard.background};
        border: 2px solid #4d4d4dff;
        border-radius: ${styleCard.borderRadius};
        box-shadow: 0 0 30px black
    `;

    const title = document.createElement("h3");
    title.textContent = fact.title;

    title.style.cssText = `
        font-size: ${styleTitle.fontSize};
        text-align: center;
    `;

    const description = document.createElement("p");
    description.textContent = fact.description;

    description.style.cssText = `
        font-size: 20px;
        text-align: center;
    `

    card.appendChild(title);
    card.appendChild(description);

    container.appendChild(card)
});

}

renderFacts()

