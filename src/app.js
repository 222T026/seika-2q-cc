import i18next from 'i18next';



i18next.init({
    fallbackLng: 'en',
    resources: {
        en: {
            translation:{
                "en": "choose your language",
                "ja": "言語を選択"
            }
        }
    }

})

let ENbutton = document.getElementById("ENbutton")
ENbutton.onclick = function(){
    document.getElementById('text').innerHTML = i18next.t('en');
};

let JAbutton= document.getElementById("JAbutton")
JAbutton.onclick = function(){
    document.getElementById('text').innerHTML = i18next.t('ja');
}
