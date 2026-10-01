// ==========================================
// 1. DİL (MULTILINGUAL) YÖNETİMİ
// ==========================================

const translations = {
    en: {
        nav_home: "HOME",
        nav_about: "ABOUT",
        nav_team: "TEAM",
        nav_committees: "COMMITTEES",
        nav_calendar: "CALENDAR",
        nav_venue: "VENUE",
        nav_faq: "FAQ",
        nav_contact: "CONTACT",
        nav_apply: "APPLY NOW",
        hero_slogan: "YOUR VOICE CAN CHANGE THE WORLD.",
        gallery_btn: "Photos Uploaded!",
        sponsors_title: "Our Sponsors",
        footer_conference: "CONFERENCE",
        footer_legal: "LEGAL",
        footer_terms: "TERMS & CONDITIONS",
        footer_privacy: "PRIVACY POLICY",
        footer_social: "SOCIAL",
        footer_rights: "All rights reserved.",
        footer_crafted: "Crafted with ❤️ by Ada Özkan"
    },
    tr: {
        nav_home: "ANA SAYFA",
        nav_about: "HAKKIMIZDA",
        nav_team: "EKİP",
        nav_committees: "KOMİTELER",
        nav_calendar: "TAKVİM",
        nav_venue: "MEKAN",
        nav_faq: "SSS",
        nav_contact: "İLETİŞİM",
        nav_apply: "BAŞVUR",
        hero_slogan: "SESİN DÜNYAYI DEĞİŞTİREBİLİR.",
        gallery_btn: "Fotoğraflar Yüklendi!",
        sponsors_title: "Sponsorlarımız",
        footer_conference: "KONFERANS",
        footer_legal: "YASAL",
        footer_terms: "ŞARTLAR & KOŞULLAR",
        footer_privacy: "GİZLİLİK POLİTİKASI",
        footer_social: "SOSYAL MEDYA",
        footer_rights: "Tüm hakları saklıdır.",
        footer_crafted: "Ada Özkan tarafından ❤️ ile yapıldı"
    },
    fr: {
        nav_home: "ACCUEIL",
        nav_about: "À PROPOS",
        nav_team: "ÉQUIPE",
        nav_committees: "COMITÉS",
        nav_calendar: "CALENDRIER",
        nav_venue: "LIEU",
        nav_faq: "FAQ",
        nav_contact: "CONTACT",
        nav_apply: "POSTULER",
        hero_slogan: "VOTRE VOIX PEUT CHANGER LE MONDE.",
        gallery_btn: "Photos Téléchargées!",
        sponsors_title: "Nos Sponsors",
        footer_conference: "CONFÉRENCE",
        footer_legal: "LÉGAL",
        footer_terms: "TERMES & CONDITIONS",
        footer_privacy: "POLITIQUE DE CONFIDENTIALITÉ",
        footer_social: "RÉSEAUX SOCIAUX",
        footer_rights: "Tous droits réservés.",
        footer_crafted: "Créé avec ❤️ par Ada Özkan"
    },
    de: {
        nav_home: "STARTSEITE",
        nav_about: "ÜBER UNS",
        nav_team: "TEAM",
        nav_committees: "KOMITEES",
        nav_calendar: "KALENDER",
        nav_venue: "VERANSTALTUNGSORT",
        nav_faq: "FAQ",
        nav_contact: "KONTAKT",
        nav_apply: "BEWERBEN",
        hero_slogan: "DEINE STIMME KANN DIE WELT VERÄNDERN.",
        gallery_btn: "Fotos Hochgeladen!",
        sponsors_title: "Unsere Sponsoren",
        footer_conference: "KONFERENZ",
        footer_legal: "RECHTLICHES",
        footer_terms: "ALLGEMEINE GESCHÄFTSBEDINGUNGEN",
        footer_privacy: "DATENSCHUTZRICHTLINIE",
        footer_social: "SOZIALE MEDIEN",
        footer_rights: "Alle Rechte vorbehalten.",
        footer_crafted: "Erstellt mit ❤️ von Ada Özkan"
    }
};

const langSelect = document.getElementById('lang-select');

function setLanguage(lang) {
    localStorage.setItem('preferred_lang', lang);
    langSelect.value = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

const savedLang = localStorage.getItem('preferred_lang') || 'en';
setLanguage(savedLang);

langSelect.addEventListener('change', (e) => {
    setLanguage(e.target.value);
});


// ==========================================
// 2. TEMA (DARK/LIGHT/SYSTEM) YÖNETİMİ
// ==========================================

const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn.querySelector('i');

function setTheme(mode) {
    if (mode === 'system') {
        const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', isSystemDark ? 'dark' : 'light');
        themeIcon.className = 'fas fa-desktop'; 
    } else {
        document.documentElement.setAttribute('data-theme', mode);
        themeIcon.className = mode === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }
    localStorage.setItem('preferred_theme', mode);
}

const savedTheme = localStorage.getItem('preferred_theme') || 'system';
setTheme(savedTheme);

themeBtn.addEventListener('click', () => {
    const currentMode = localStorage.getItem('preferred_theme');
    
    if (currentMode === 'dark') {
        setTheme('light');
    } else if (currentMode === 'light') {
        setTheme('system');
    } else {
        setTheme('dark');
    }
});