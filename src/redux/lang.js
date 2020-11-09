import aboutContent from "../components/pages/about/lang-content";
import profileContent from "../components/pages/profile/lang-content";
import mainContent from "../components/pages/main/lang-content";
import devContent from "../components/pages/development/lang-content";

const lang = {
    en:{
        menu: {
            main: "Main",
            dev: "Development",
            about: "About",
            flags: {
                en: "en_active_flag",
                ru: "ru_flag",
            },
            login: "Login"
        },
        page: {
            main: mainContent.en,
            dev: devContent.en,
            about: aboutContent.en,
            profile: profileContent.en,
        },
        footer: {
            city: "Saint-Petersburg"
        }
    },
    ru:{
        menu: {
            main: "Главная",
            dev: "Разработка",
            about: "Инфо",
            flags: {
                en: "en_flag",
                ru: "ru_active_flag",
            },
            login: "Вход"
        },
        page: {
            main: mainContent.ru,
            dev: devContent.ru,
            about: aboutContent.ru,
            profile: profileContent.ru,
        },
        footer: {
            city: "Санкт-Петербург"
        }
    }
}

export default lang;