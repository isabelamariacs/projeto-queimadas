document.addEventListener("DOMContentLoaded", () => {
    // ====== Menu mobile
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    if (toggle && menu) {
      toggle.addEventListener("click", () => menu.classList.toggle("show"));
    }
  
    // ====== Quiz (guia.html)
    const form = document.getElementById("quiz");
    const out = document.getElementById("resultado-quiz");
    if (form && out) {
      const gabarito = { q1: "b", q2: "b", q3: "a" };
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const dados = new FormData(form);
        let acertos = 0, total = 0, faltando = [];
        for (const q in gabarito) {
          total++;
          const v = dados.get(q);
          if (!v) faltando.push(q);
          else if (v === gabarito[q]) acertos++;
        }
        if (faltando.length) {
          out.textContent = "❗ Responda todas as perguntas antes de enviar.";
          out.style.color = "#e63946";
          return;
        }
        const pct = Math.round((acertos / total) * 100);
        out.textContent = `Resultado: ${acertos}/${total} (${pct}%). ${pct === 100 ? "✔️ Excelente!" : pct >= 60 ? "👍 Bom! Reveja os pontos restantes." : "👀 Que tal revisar o conteúdo?"}`;
        out.style.color = pct === 100 ? "#1a4d2e" : pct >= 60 ? "#ff6b35" : "#e63946";
      });
    }
  });
  