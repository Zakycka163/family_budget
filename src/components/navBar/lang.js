import start_items from "./startBar/lang";
import end_items from "./endBar/lang";

const menu = {
    en:{
        start_items: start_items.en
            .map((e, i) => ({title: e, path: start_items.path[i]})),
        end_items: end_items.en
            .map((e)=> ({button: e.button, is_auth: e.is_auth, path: end_items.path})),
        flags: {
            en: "en_active_flag",
            ru: "ru_flag",
        }
    },
    ru:{
        start_items: start_items.ru
            .map((e, i)=> ({title: e, path: start_items.path[i]})),
        end_items: end_items.ru
            .map((e)=> ({button: e.button, is_auth: e.is_auth, path: end_items.path})),
        flags: {
            en: "en_flag",
            ru: "ru_active_flag",
        }
    }
}

export default menu;