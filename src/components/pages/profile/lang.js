const notifications = {
    en: {
        success: {
            name: 'Success.',
            description: 'Login successful.'
        },
        errors: {
            login_fail: {
                name: 'Failed to log in.',
                description: 'Please make sure that you have entered your login and password correctly.'
            }
        }
    },
    ru: {
        success: {
            name: 'Успех.',
            description: 'Вход в систему выполнен успешно.'
        },
        errors: {
            login_fail: {
                name: 'Не удалось войти в систему.',
                description: 'Убедитесь, что вы правильно ввели логин и пароль.'
            }
        }
    }
}

const profilePage = {
    en: {
        title: "Profile",
        content: {
            buttons: {
                signIn: "Sign In",
                signOut: "Sign Out"
            },
            login: "Login",
            password: "Password"
        },
        notifications: {
            success: notifications.en.success,
            errors: notifications.en.errors
        }

    },
    ru: {
        title: "Профиль",
        content: {
            buttons: {
                signIn: "Вход",
                signOut: "Выход"
            },
            login: "Логин",
            password: "Пароль"
        },
        notifications: {
            success: notifications.ru.success,
            errors: notifications.ru.errors
        }
    }
}



export default profilePage;