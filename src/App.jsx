import React, { useState } from "react";

export default function App() {
    return (
        <div className="min-h-screen text-white" style={{
            background: "radial-gradient(circle at top, #1e3a8a, #0f172a 60%, #020617 100%)",
            fontFamily: "Inter, sans-serif"
        }}>

            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "20px" }}>

                {/* HERO */}
                <section style={{ textAlign: "center", padding: "80px 20px" }}>
                    <h1 style={heroTitle}>
                        Английский для путешествий
                    </h1>

                    <p style={{ color: "#e2e8f0", fontSize: "18px", maxWidth: "700px", margin: "0 auto" }}>
                        Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана?
                        Этот курс научит вашего ребёнка реальному разговорному английскому!
                    </p>
                </section>

                {/* GROUPS */}
                <section style={{ marginBottom: "60px" }}>
                    <h2 style={sectionTitleTeal}>Для кого курс</h2>
                    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                        <Card>4–5 класс</Card>
                        <Card>6–8 класс</Card>
                    </div>
                </section>

                {/* PROGRAM */}
                <section style={{ marginBottom: "60px" }}>
                    <h2 style={sectionTitleOrange}>Программа курса</h2>
                    {program.map((item, i) => (
                        <Card key={i}>
                            <b style={{ fontSize: "18px" }}>{item.title}</b>
                            <p style={{ color: "#cbd5e1", marginTop: "6px" }}>{item.desc}</p>
                        </Card>
                    ))}
                </section>

                {/* BENEFITS */}
                <section style={{ marginBottom: "60px" }}>
                    <h2 style={sectionTitleGold}>Почему этот курс особенный?</h2>
                    <ul style={{ lineHeight: "1.8", color: "#e2e8f0" }}>
                        <li>Живая разговорная практика</li>
                        <li>Реальные ситуации</li>
                        <li>Интерактивные задания</li>
                        <li>Уровень A2–B1</li>
                    </ul>
                </section>

                {/* CTA */}
                <section style={{ textAlign: "center", marginTop: "80px" }}>
                    <button style={ctaButton}>
                        Записаться на курс
                    </button>
                </section>

            </div>
        </div>
    );
}

function Card({ children }) {
    const [hover, setHover] = useState(false);

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                ...card,
                transform: hover ? "translateY(-5px) scale(1.02)" : "none",
                boxShadow: hover
                    ? "0 0 25px rgba(45,212,191,0.4), 0 0 40px rgba(251,146,60,0.2)"
                    : card.boxShadow
            }}
        >
            {children}
        </div>
    );
}

const heroTitle = {
    fontSize: "48px",
    background: "linear-gradient(90deg,#2dd4bf,#fb923c,#fde68a)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    marginBottom: "20px",
    textShadow: "0 0 25px rgba(45,212,191,0.3)",
    letterSpacing: "1px"
};

const sectionTitleTeal = {
    color: "#2dd4bf",
    marginBottom: "15px",
    fontSize: "24px",
    textShadow: "0 0 10px rgba(45,212,191,0.5)"
};

const sectionTitleOrange = {
    color: "#fb923c",
    marginBottom: "15px",
    fontSize: "24px",
    textShadow: "0 0 10px rgba(251,146,60,0.5)"
};

const sectionTitleGold = {
    color: "#fde68a",
    marginBottom: "15px",
    fontSize: "24px",
    textShadow: "0 0 10px rgba(253,230,138,0.5)"
};

const card = {
    background: "rgba(255,255,255,0.05)",
    padding: "20px",
    borderRadius: "16px",
    marginTop: "15px",
    boxShadow: "0 0 20px rgba(0,0,0,0.4)",
    backdropFilter: "blur(6px)",
    color: "#f1f5f9",
    transition: "all 0.3s ease"
};

const ctaButton = {
    padding: "18px 50px",
    fontSize: "20px",
    borderRadius: "40px",
    border: "none",
    background: "linear-gradient(90deg,#fb923c,#fde68a,#2dd4bf)",
    color: "black",
    fontWeight: "bold",
    boxShadow: "0 0 25px rgba(251,146,60,0.6)",
    cursor: "pointer",
    transition: "all 0.3s ease"
};

const program = [
    { title: "1. Аэропорт без стресса", desc: "Регистрация и контроль" },
    { title: "2. В отеле", desc: "Заселение и помощь" },
    { title: "3. Кафе", desc: "Заказ еды" },
    { title: "4. Ориентирование", desc: "Как спросить дорогу" },
    { title: "5. Экстренные случаи", desc: "Важные фразы" },
    { title: "6–8. Туризм", desc: "Экскурсии и билеты" },
    { title: "9. Дружба", desc: "Общение" },
    { title: "10. Проект", desc: "Идеальный отпуск" }
];
