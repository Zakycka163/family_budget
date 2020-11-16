import start_items from "./startBar/lang";
import end_items from "./endBar/lang";

const menu = {
    en:{
        start_items: start_items.en.map((e, i) => {return {title: e, ...start_items.properties[i]}}),
        end_items: end_items.en.map((e, i)=> {return {title: e, ...end_items.properties[i]}}),
        flags: {
            en: "en_active_flag",
            ru: "ru_flag",
        }
    },
    ru:{
        start_items: start_items.ru.map((e, i)=> {return {title: e, ...start_items.properties[i]}}),
        end_items: end_items.ru.map((e, i)=> {return {title: e, ...end_items.properties[i]}}),
        flags: {
            en: "en_flag",
            ru: "ru_active_flag",
        }
    }
}

export default menu;