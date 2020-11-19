import start_items from "./startBar/lang";
import end_item from "./endBar/lang";

const menu = {
    en:{
        start_items: start_items.en.map((e, i) => {return {title: e, path: start_items.path[i]}}),
        end_items: end_item.en.map((e)=> {return {...e, path: end_item.path}}),
        flags: {
            en: "en_active_flag",
            ru: "ru_flag",
        }
    },
    ru:{
        start_items: start_items.ru.map((e, i)=> {return {title: e, path: start_items.path[i]}}),
        end_items: end_item.ru.map((e)=> {return {...e, path: end_item.path}}),
        flags: {
            en: "en_flag",
            ru: "ru_active_flag",
        }
    }
}

export default menu;