import aboutContent from "../components/about/lang-content";
import profileContent from "../components/profile/lang-content";

const lang = {
    en:{
        menu: {
            main: "Main",
            dev: "Development",
            about: {
                title: "About",
                content: aboutContent.en.content
            },
            profile: {
                title: "Profile",
                content: profileContent.en.content
            },
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
            main: "Главная",
            dev: "Разработка",
            about: {
                title: "Инфо",
                content: aboutContent.ru.content
            },
            profile: {
                title: "Профиль",
                content: profileContent.ru.content
            },
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