document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-toggle");
  const languageOptions = [...document.querySelectorAll("[data-language]")];
  const status = document.getElementById("formStatusMsg");

  const translations = {
    "Om mig": "About me", "Kompetenser": "Skills", "Styrkor": "Strengths", "Bakgrund": "Experience", "Kontakta mig": "Contact me",
    "Mörkt läge": "Dark mode", "Ljust läge": "Light mode", "Växla till mörkt läge": "Switch to dark mode", "Växla till ljust läge": "Switch to light mode", "Välj språk": "Choose language",
    "Huvudmeny": "Main navigation", "Välj språk": "Choose language", "Språk": "Language", "Matilda Cederström – till startsidan": "Matilda Cederström – home",
    "GÖTEBORG": "GOTHENBURG", "STUDERAR PÅ IHM BUSINESS SCHOOL": "STUDYING AT IHM BUSINESS SCHOOL", "SPECIALIST · 2026–PÅGÅENDE": "SPECIALIST · 2026–PRESENT",
    "Utbildning och erfarenhetsområden": "Education and areas of experience", "DIGITAL MARKNADSFÖRING": "DIGITAL MARKETING", "PR & KOMMUNIKATION": "PR & COMMUNICATION", "KUNDSERVICE": "CUSTOMER SERVICE",
    "01 / OM MIG": "01 / ABOUT ME", "Om mig": "About me",
    "Jag drivs av att förstå vad som fångar människors uppmärksamhet och vad som får varumärken att nå igenom bruset.": "I am driven by understanding what captures people's attention and helps brands cut through the noise.",
    "Med erfarenhet inom service, kommunikation och event vill jag utvecklas inom digital marknadsföring och utforska samspelet mellan kreativitet, strategi och analys.": "With experience in customer service, communications and events, I want to grow in digital marketing and explore the interplay between creativity, strategy and analytics.",
    "Matilda i en varm, bokfylld miljö": "Matilda in a warm, book-filled setting", "Matilda arbetar vid sin laptop": "Matilda working at her laptop", "IHM Business School-logotyp på rosa bakgrund": "IHM Business School logo on a pink background", "YRGO-logotyp på röd bakgrund": "YRGO logo on a red background", "MORE PR-logotyp": "MORE PR logo", "IHM Business School · 2026–pågående": "IHM Business School · 2026–present", "Erfarenhet inom PR och kommunikation": "Experience in PR and communications",
    "02 / UTBILDNING & KOMPETENS": "02 / EDUCATION & SKILLS", "Kompetenser": "Skills", "och": "and", "fokusområden": "areas of focus", "Utbildning & kompetens": "Education & skills",
    "Kursområden från min utbildning och erfarenheter från kommunikation, PR och service.": "Course topics from my studies and experience in communications, PR and customer service.",
    "IHM Business School · 2026–pågående": "IHM Business School · 2026–present", "Yrgo, Lindholmen · 2024–2026": "Yrgo, Lindholmen · 2024–2026", "More PR · 2025–2026": "More PR · 2025–2026", "Relevanta kurser inför LIA våren 2027": "Relevant courses ahead of my internship in spring 2027",
    "Marknadsföring": "Marketing", "Sökordsoptimering / SEO": "Search engine optimization / SEO", "Paid media – social och SEM": "Paid media – social and SEM", "Tracking & digital analys": "Tracking & digital analytics",
    "Affärsekonomi": "Business economics", "Digitala projektledningsverktyg": "Digital project management tools", "Eventproduktion": "Event production", "Examensarbete": "Degree project", "Kommunikation": "Communications", "Kreativitet och idéutveckling": "Creativity and idea development", "Marknadskommunikation": "Marketing communications", "Organisation och ledarskap": "Organization and leadership", "Säkerhet, hållbarhet och tillgänglighet": "Safety, sustainability and accessibility", "Säljteknik": "Sales techniques",
    "PR & kommunikation": "PR & communications", "LIA på PR- och kommunikationsbyrå": "Internship at a PR and communications agency", "Innehållsproduktion för sociala medier, pressreleaser och artiklar": "Content creation for social media, press releases and articles", "Intervjuer och nyheter i Mynewsdesk": "Interviews and news in Mynewsdesk", "Medierapportering": "Media reporting", "Klear och Meltwater": "Klear and Meltwater",
    "Matilda Cederström, Digital Marketing Specialist": "Matilda Cederström, Digital Marketing Specialist", "04 / BAKGRUND": "04 / EXPERIENCE", "Erfarenhet och utbildning": "Experience and education", "Arbetslivserfarenheter": "Work experience", "Erfarenhet": "Experience", "Utbildning": "Education",
    "LIA PR- & Kommunikationsbyrå": "PR & Communications Internship", "Innehållsproduktion för sociala medier, pressreleaser, intervjuer, artiklar, nyheter i Mynewsdesk, medierapportering samt Klear och Meltwater.": "Content creation for social media, press releases, interviews and articles; news in Mynewsdesk, media reporting, and work with Klear and Meltwater.",
    "Instruktör": "Instructor", "Instruerade och coachade deltagare samt skapade cykelpass från grunden.": "Instructed and coached participants and created cycling classes from scratch.", "Butiksmedarbetare, klädbutik": "Retail assistant, clothing store", "Leveranser, ordning i butiken, kassaförsäljning och rådgivning.": "Managed deliveries, store organization, checkout sales and customer advice.",
    "Kassaledare & Butiksmedarbetare": "Checkout supervisor & retail assistant", "Ansvar för kassa och förbutik samt hantering av lediga pass i schemat.": "Managed the checkout and convenience counter, and coordinated open shifts in the schedule.", "Kundservice via chatt och mejl om leveranser, fakturor, betalningar och produkter.": "Customer service by chat and email about deliveries, invoices, payments and products.",
    "Tidigare erfarenheter": "Previous experience", "Flera service- och assistansroller": "Several customer service and support roles", "Instruktör och receptionist på Nordic Wellness, butiksmedarbetare på Jollyroom och EKO, ordermottagare/lager på Home Shop, personlig assistent och brevbärare.": "Instructor and receptionist at Nordic Wellness; retail assistant at Jollyroom and EKO; order processing and warehouse work at Home Shop; personal assistant and mail carrier.",
    "2026–pågående": "2026–present", "Avslutande kurser inför praktikstart.": "Final courses before starting my internship.", "Webbutveckling 1 – Introduktion": "Web Development 1 – Introduction",
    "Event Marketing och eventproduktion": "Event marketing and production", "Kommunikation och marknadskommunikation": "Communications and marketing communications", "Organisation, ledarskap och Project Management": "Organization, leadership and project management", "LIA och examensarbete": "Internship and degree project", "Hälsocoach": "Health coach", "Hjälmareds folkhögskola": "Hjälmared Folk High School", "Hantverksprogrammet – Frisör": "Craft Programme – Hairdressing",
    "03 / STYRKOR": "03 / STRENGTHS", "Styrkor": "Strengths", "Några styrkor jag tar med mig i samarbeten och projekt.": "A few strengths I bring to collaborations and projects.",
    "Kommunikation med känsla": "Thoughtful communication", "Jag tycker om att hitta rätt ton och skapa innehåll som känns relevant för människorna det riktar sig till.": "I enjoy finding the right tone and creating content that feels relevant to the people it is meant for.",
    "Kreativa idéer med riktning": "Creative ideas with direction", "Jag gillar att utveckla idéer och kombinera kreativitet med tydlig planering och genomförande.": "I enjoy developing ideas and combining creativity with clear planning and execution.",
    "Lyhördhet och samarbete": "Thoughtfulness and collaboration", "Min erfarenhet från service har lärt mig att lyssna in behov och bidra till ett tryggt och professionellt bemötande.": "My service experience has taught me to listen to people's needs and contribute to a welcoming, professional experience.",
    "Matilda och en kollega samarbetar vid en laptop": "Matilda and a colleague collaborating at a laptop", "Accessoarer och klocka på ett marmorbord": "Accessories and a watch on a marble table", "Porträtt av Matilda": "Portrait of Matilda",
    "Utbildnings- och erfarenhetsområden": "Education and areas of experience", "05 / KONTAKT": "05 / CONTACT", "Kontakta mig": "Contact me", "Göteborg": "Gothenburg", "Namn": "Name", "E-post": "Email", "Meddelande": "Message", "SKICKA MEDDELANDE": "SEND MESSAGE", "SPRÅK": "LANGUAGES", "Svenska": "Swedish", "Engelska": "English", "Till toppen ↑": "Back to top ↑",
    "Ditt e-postprogram öppnas med meddelandet färdigt att skicka.": "Your email app will open with the message ready to send."
  };
  const normalize = text => text.replace(/\s+/g, " ").trim();
  const textSources = new Map();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let textNode;
  while ((textNode = walker.nextNode())) {
    if (normalize(textNode.nodeValue) && !textNode.parentElement?.closest("[data-keep-label]")) textSources.set(textNode, textNode.nodeValue);
  }
  const attributeSources = new Map();
  document.querySelectorAll("[aria-label], [alt]").forEach(element => {
    attributeSources.set(element, {
      ariaLabel: element.getAttribute("aria-label"),
      alt: element.getAttribute("alt")
    });
  });

  const translatePage = language => {
    const english = language === "en";
    document.documentElement.lang = language;
    document.title = english ? "Matilda Cederström — Digital Marketing" : "Matilda Cederström — Digital marknadsföring";
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = english
      ? "Matilda Cederström studies Digital Marketing Specialist at IHM Business School. Learn about her experience in PR, communications and customer service."
      : "Matilda Cederström studerar Digital Marketing Specialist på IHM Business School. Läs om hennes erfarenhet inom PR, kommunikation och service.";

    textSources.forEach((source, node) => {
      const key = normalize(source);
      const translated = english && translations[key] ? translations[key] : key;
      const leading = source.match(/^\s*/)?.[0] || "";
      const trailing = source.match(/\s*$/)?.[0] || "";
      node.nodeValue = `${leading}${translated}${trailing}`;
    });
    attributeSources.forEach((source, element) => {
      if (source.ariaLabel !== null) element.setAttribute("aria-label", english ? (translations[source.ariaLabel] || source.ariaLabel) : source.ariaLabel);
      if (source.alt !== null) element.setAttribute("alt", english ? (translations[source.alt] || source.alt) : source.alt);
    });
    languageOptions.forEach(option => {
      const active = option.dataset.language === language;
      option.classList.toggle("is-active", active);
      option.setAttribute("aria-pressed", String(active));
    });
    if (themeToggle) {
      const dark = document.body.dataset.theme === "dark";
      themeToggle.textContent = english ? (dark ? "Light mode" : "Dark mode") : (dark ? "Ljust läge" : "Mörkt läge");
      themeToggle.setAttribute("aria-label", english
        ? (dark ? "Switch to light mode" : "Switch to dark mode")
        : (dark ? "Växla till ljust läge" : "Växla till mörkt läge"));
    }
    if (status?.dataset.submitted === "true") status.textContent = english
      ? translations["Ditt e-postprogram öppnas med meddelandet färdigt att skicka."]
      : "Ditt e-postprogram öppnas med meddelandet färdigt att skicka.";
  };

  let savedTheme = null;
  let savedLanguage = null;
  try {
    savedTheme = localStorage.getItem("portfolio-theme");
    savedLanguage = localStorage.getItem("portfolio-language");
  } catch (_) {}
  document.body.dataset.theme = savedTheme === "dark" ? "dark" : "light";
  const applyThemeLabel = () => {
    const dark = document.body.dataset.theme === "dark";
    const english = document.documentElement.lang === "en";
    if (!themeToggle) return;
    themeToggle.textContent = english ? (dark ? "Light mode" : "Dark mode") : (dark ? "Ljust läge" : "Mörkt läge");
    themeToggle.setAttribute("aria-label", english
      ? (dark ? "Switch to light mode" : "Switch to dark mode")
      : (dark ? "Växla till ljust läge" : "Växla till mörkt läge"));
    themeToggle.setAttribute("aria-pressed", String(dark));
  };
  translatePage(savedLanguage === "en" ? "en" : "sv");
  themeToggle?.addEventListener("click", () => {
    const theme = document.body.dataset.theme === "dark" ? "light" : "dark";
    document.body.dataset.theme = theme;
    try { localStorage.setItem("portfolio-theme", theme); } catch (_) {}
    applyThemeLabel();
  });
  languageOptions.forEach(option => option.addEventListener("click", () => {
    const language = option.dataset.language === "en" ? "en" : "sv";
    try { localStorage.setItem("portfolio-language", language); } catch (_) {}
    translatePage(language);
  }));

  const form = document.getElementById("contactForm");
  form?.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const english = document.documentElement.lang === "en";
    const subject = encodeURIComponent(`${english ? "Message from" : "Meddelande från"} ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n${english ? "Reply to" : "Svar till"}: ${data.get("email")}`);
    window.location.href = `mailto:matilda.cederstrom@live.se?subject=${subject}&body=${body}`;
    if (status) {
      status.dataset.submitted = "true";
      status.textContent = english ? translations["Ditt e-postprogram öppnas med meddelandet färdigt att skicka."] : "Ditt e-postprogram öppnas med meddelandet färdigt att skicka.";
    }
  });
});
