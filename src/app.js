import i18next from 'i18next';



i18next.init({
    fallbackLng: 'en',
    resources: {
        en: {
            translation:{
                "en": "hello world",
                "ja": "こんにちは、世界"
            }
        }
    }

})

let ENbutton = document.getElementById("ENbutton")
ENbutton.onclick = function(){
    document.getElementById('title').innerHTML = i18next.t('en');
};

let JAbutton= document.getElementById("JAbutton")
JAbutton.onclick = function(){
    document.getElementById('title').innerHTML = i18next.t('ja');
}
