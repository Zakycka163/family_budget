import aboutContent from "../components/about/lang-content";
import profileContent from "../components/profile/lang-content";
import mainContent from "../components/main/lang-content";
import devContent from "../components/development/lang-content";

const lang = {
    en:{
        menu: {
            main: mainContent.en,
            dev: devContent.en,
            about: aboutContent.en,
            profile: profileContent.en,
            flags: {
                en: "en_active_flag",
                ru: "ru_flag",
            },
            login: "Login"
        },
        footer: "Saint-Petersburg"
    },
    ru:{
        menu: {
            main: mainContent.ru,
            dev: devContent.ru,
            about: aboutContent.ru,
            profile: profileContent.ru,
            flags: {
                en: "en_flag",
                ru: "ru_active_flag",
            },
            login: "Вход"
        },
        footer: "Санкт-Петербург"
    }
}

export default lang;