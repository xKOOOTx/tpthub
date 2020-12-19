import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n ({
    locale: 'en',
    fallbackLocale: 'ru',
    messages: {
        en: {
            welcomeMsg: 'Welcome to Your Vue.js App',
            pluginsTxt: 'Installed CLI Plugins',
            guideTxt: 'For a guide and recipes on how to configure / customise this project',
            guideDocTxt: 'vue-cli documentation'

        },
        ru: {
            welcomeMsg: 'Приветствую в Vue.js App',
            pluginsTxt: 'Установленные CLI Plugins',
            guideTxt: 'Для руководства и примеров как настроить этот проект, {break} смотрите',
            guideDocTxt: 'vue-cli документация'
        }
    }
})