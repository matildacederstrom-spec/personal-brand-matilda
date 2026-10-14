// ==========================================================================
// MATILDA CEDERSTRÖM – INTERAKTIVA FUNKTIONER
// Tema-växlare, Projekt-modal och Formulärshantering
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. TEMA-VÄXLARE (MÖRKT / LJUST LÄGE)
    const temaknapp = document.querySelector("#tema");
    const themeText = temaknapp.querySelector(".theme-text");
    const themeIcon = temaknapp.querySelector(".theme-icon");

    // Läs in tidigare sparat tema eller följ systemets inställning
    const sparattema = localStorage.getItem("matilda-tema");
    if (sparattema === "morkt" || (!sparattema && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.body.classList.add("morkt");
        updateThemeUI(true);
    } else {
        updateThemeUI(false);
    }

    function updateThemeUI(isDark) {
        if (themeText) {
            themeText.textContent = isDark ? "Ljust läge" : "Mörkt läge";
        }
        if (themeIcon) {
            themeIcon.textContent = isDark ? "☀️" : "◐";
        }
    }

    function bytTema() {
        const isDark = document.body.classList.toggle("morkt");
        updateThemeUI(isDark);
        localStorage.setItem("matilda-tema", isDark ? "morkt" : "ljust");
    }

    if (temaknapp) {
        temaknapp.addEventListener("click", bytTema);
    }

    // 2. MODAL FÖR PROJEKTDETALJER
    const modal = document.querySelector("#project-modal");
    const modalBody = document.querySelector("#modal-body");
    const modalClose = document.querySelector("#modal-close");

    const projectData = {
        morepr: {
            title: "PR-konsult – More PR | More Alliance",
            meta: "PR & Strategisk kommunikation · Göteborg",
            content: `
                <p>Som PR-konsult på More PR (del av More Alliance) arbetade jag med att stärka varumärkens närvaro genom redaktionell publicitet och förtroendebyggande kommunikation.</p>
                <h4>Huvudsakliga ansvarsområden:</h4>
                <ul>
                    <li>Formulering av pressmeddelanden, debattartiklar och nyhetsvinklar.</li>
                    <li>Mediekontakter och proaktiv journalistbearbetning.</li>
                    <li>Mediebevakning, analys och rapportsammanställning till kund.</li>
                    <li>Strategiska workshops kring positionering och tonalitet.</li>
                </ul>
                <p>Erfarenheten gav mig djup förståelse för vad som krävs för att bryta igenom mediebruset och skapa genuint förtroende hos målgrupper.</p>
            `
        },
        yrgo: {
            title: "Event Marketing & Management – Yrgo",
            meta: "Högre Yrkesutbildning · Göteborg",
            content: `
                <p>Utbildningen på Yrgo gav gedigen praktisk och teoretisk kompetens inom upplevelsebaserad marknadsföring, kommersiella event och projektledning.</p>
                <h4>Fokusområden & Verktyg:</h4>
                <ul>
                    <li>Konceptutveckling för varumärkesaktiveringar och mässor.</li>
                    <li>Projektledning, tidsplanering och riskanalyser i produktion.</li>
                    <li>Budgetering, ROI-mätning och uppföljning av eventkampanjer.</li>
                    <li>Sponsorskap, partnerskap och ambassadörssamarbeten.</li>
                </ul>
                <p>Ett event är mer än bara en sammankomst – det är en levande förlängning av varumärkets kärnbudskap.</p>
            `
        },
        webb: {
            title: "Webbutveckling & Digital Strategi",
            meta: "Luleå tekniska universitet & IHM Business School",
            content: `
                <p>Med studier i webbutveckling vid Luleå tekniska universitet har jag en solid teknisk grund i HTML, CSS och modern frontend-struktur, vilket ger en unik fördel som marknadsförare.</p>
                <h4>Kombinerade färdigheter:</h4>
                <ul>
                    <li>Förståelse för semantisk webb, tillgänglighet (WCAG) och SEO-struktur.</li>
                    <li>Förmåga att samarbeta sömlöst med utvecklare och tech-team.</li>
                    <li>Optimerade digitala kundresor och konverteringsvänliga landningssidor.</li>
                    <li>Datadriven analys via Google Analytics och moderna marknadsföringsverktyg.</li>
                </ul>
                <p>Genom att förstå både den kreativa kommunikationen och den tekniska koden bakom kan jag skapa heltäckande digitala upplevelser.</p>
            `
        }
    };

    document.querySelectorAll(".project-details-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-modal");
            const data = projectData[id];
            if (data && modal && modalBody) {
                modalBody.innerHTML = `
                    <h3>${data.title}</h3>
                    <span class="modal-meta">${data.meta}</span>
                    ${data.content}
                `;
                modal.hidden = false;
                // liten timeout för css-övergång
                setTimeout(() => modal.classList.add("is-open"), 10);
            }
        });
    });

    function closeModal() {
        if (modal) {
            modal.classList.remove("is-open");
            setTimeout(() => {
                modal.hidden = true;
            }, 300);
        }
    }

    if (modalClose) {
        modalClose.addEventListener("click", closeModal);
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal && !modal.hidden) {
            closeModal();
        }
    });

    // 3. FORMULÄRSHANTERING MED BEKRÄFTELSE
    const form = document.querySelector("#kontakt-form");
    const feedback = document.querySelector("#form-feedback");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const namn = document.querySelector("#namn").value.trim();
            const epost = document.querySelector("#epost").value.trim();
            const amne = document.querySelector("#amne").value;

            if (feedback) {
                feedback.hidden = false;
                feedback.className = "form-feedback success";
                feedback.innerHTML = `Tack <strong>${namn}</strong>! Ditt meddelande gällande <em>${amne}</em> har tagits emot. Jag återkopplar till <strong>${epost}</strong> inom kort.`;
            }

            form.reset();
        });
    }

    // 4. CIRKULÄRT MÄRKE - SKROLLA TILL START VID KLICK
    const badge = document.querySelector(".brand-badge");
    if (badge) {
        badge.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});