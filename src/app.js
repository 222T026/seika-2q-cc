import i18next from 'i18next';

// i18next
i18next.init({
    // debug: true,
    fallbackLng: 'en',
    resources: {
        "en":{
            "translation":{
                "hello":"Hello",
                "name":"My name",
                "nameText":"[your name]",
                "job":"I am a",
                "jobText":"[your job ar what you do for a living]",
                "place":"I am from",
                "placeText":"[your native place]",
                "favorite":"I like",
                "favoriteText":"[your favorite things]",
                "good":"I am good at",
                "goodText":"[what you are good at]",
                "birtyday":"My birthday is",
                "birtydayText":"[your birthday]",
                "close":"Nice to meet you!",
            }
        },
        "ja":{
            "translation":{
                "hello":"こんにちは",
                "name":"名前は",
                "nameText":"[あなたの名前]",
                "job":"私は",
                "jobText":"[あなたの職業]",
                "place":"出身は",
                "placeText":"[あなたの出身地]",
                "favorite":"好きなものは",
                "favoriteText":"[あなたの好きなこと]",
                "good":"得意なことは",
                "goodText":"[あなたの得意なこと]",
                "birthday":"誕生日は",
                "birthdayText":"[あなたの誕生日]",
                "close":"よろしくお願いします！",
            }
        },
        "zh":{
            "translation":{
                "hello":"你好",
                "name":"我姓",
                "nameText":"[你的名字]",
                "job":"我是",
                "jobText":"[你的职业]",
                "place":"我来自",
                "placeText":"[你的出生地]",
                "favorite":"喜欢的东西是",
                "favoriteText":"[你喜欢的东西]",
                "good":"擅长的是",
                "goodText":"[你的擅长的]",
                "birthday":"生日是",
                "birthdayText":"[你的生日]",
                "close":"谢谢！",
            }
        }
    }
}

// ,() => {
//     let result = i18next.exists('text',{ lng: 'ja'});
//     console.log (result)
// }
)

let ENbutton = document.getElementById("ENbutton")
ENbutton.onclick = function selectEN(){
    document.getElementById('hello').innerHTML = i18next.t('hello',{ lng: 'en'});
    document.getElementById('name').innerHTML = i18next.t('name',{ lng: 'en'});
    document.getElementById('nameText').innerHTML = i18next.t('nameText',{ lng: 'en'});
    document.getElementById('job').innerHTML = i18next.t('job',{ lng: 'en'});
    document.getElementById('jobText').innerHTML = i18next.t('jobText',{ lng: 'en'});
    document.getElementById('place').innerHTML = i18next.t('place',{ lng: 'en'});
    document.getElementById('placeText').innerHTML = i18next.t('placeText',{ lng: 'en'});
    document.getElementById('favorite').innerHTML = i18next.t('favorite',{ lng: 'en'});
    document.getElementById('favoriteText').innerHTML = i18next.t('favoriteText',{ lng: 'en'});
    document.getElementById('good').innerHTML = i18next.t('good',{ lng: 'en'});
    document.getElementById('goodText').innerHTML = i18next.t('goodText',{ lng: 'en'});
    document.getElementById('birthday').innerHTML = i18next.t('birthday',{ lng: 'en'});
    document.getElementById('birthdayText').innerHTML = i18next.t('birthdayText',{ lng: 'en'});
    document.getElementById('close').innerHTML = i18next.t('close',{ lng: 'en'});
};

let jabutton= document.getElementById("jabutton")
jabutton.onclick = function selectJA(){
    document.getElementById('hello').innerHTML = i18next.t('hello',{ lng: 'ja'});
    document.getElementById('name').innerHTML = i18next.t('name',{ lng: 'ja'});
    document.getElementById('nameText').innerHTML = i18next.t('nameText',{ lng: 'ja'});
    document.getElementById('job').innerHTML = i18next.t('job',{ lng: 'ja'});
    document.getElementById('jobText').innerHTML = i18next.t('jobText',{ lng: 'ja'});
    document.getElementById('place').innerHTML = i18next.t('place',{ lng: 'ja'});
    document.getElementById('placeText').innerHTML = i18next.t('placeText',{ lng: 'ja'});
    document.getElementById('favorite').innerHTML = i18next.t('favorite',{ lng: 'ja'});
    document.getElementById('favoriteText').innerHTML = i18next.t('favoriteText',{ lng: 'ja'});
    document.getElementById('good').innerHTML = i18next.t('good',{ lng: 'ja'});
    document.getElementById('goodText').innerHTML = i18next.t('goodText',{ lng: 'ja'});
    document.getElementById('birthday').innerHTML = i18next.t('birthday',{ lng: 'ja'});
    document.getElementById('birthdayText').innerHTML = i18next.t('birthdayText',{ lng: 'ja'});
    document.getElementById('close').innerHTML = i18next.t('close',{ lng: 'ja'});
}

let ZHbutton = document.getElementById("ZHbutton")
ZHbutton.onclick = function selectZH(){
    document.getElementById('hello').innerHTML = i18next.t('hello',{ lng: 'zh'});
    document.getElementById('name').innerHTML = i18next.t('name',{ lng: 'zh'});
    document.getElementById('nameText').innerHTML = i18next.t('nameText',{ lng: 'zh'});
    document.getElementById('job').innerHTML = i18next.t('job',{ lng: 'zh'});
    document.getElementById('jobText').innerHTML = i18next.t('jobText',{ lng: 'zh'});
    document.getElementById('place').innerHTML = i18next.t('place',{ lng: 'zh'});
    document.getElementById('placeText').innerHTML = i18next.t('placeText',{ lng: 'zh'});
    document.getElementById('favorite').innerHTML = i18next.t('favorite',{ lng: 'zh'});
    document.getElementById('favoriteText').innerHTML = i18next.t('favoriteText',{ lng: 'zh'});
    document.getElementById('good').innerHTML = i18next.t('good',{ lng: 'zh'});
    document.getElementById('goodText').innerHTML = i18next.t('goodText',{ lng: 'zh'});
    document.getElementById('birthday').innerHTML = i18next.t('birthday',{ lng: 'zh'});
    document.getElementById('birthdayText').innerHTML = i18next.t('birthdayText',{ lng: 'zh'});
    document.getElementById('close').innerHTML = i18next.t('close',{ lng: 'zh'});
};


document.getElementById('nameText')
document.getElementById('jobText')
let submit = document.getElementById("submitText")
submit.onclick = function submit(){
    let inputName = document.getElementById("inputName")
    let inputNameValue = inputName.value;
    document.getElementById('nameText').textContent = inputNameValue;

    let inputJob = document.getElementById("inputJob")
    let inputJobValue = inputJob.value;
    document.getElementById('jobText').textContent = inputJobValue;

    let inputPlace = document.getElementById("inputPlace")
    let inputPlaceValue = inputPlace.value;
    document.getElementById('placeText').textContent = inputPlaceValue;

    let inputFavorite = document.getElementById("inputFavorite")
    let inputFavoriteValue = inputFavorite.value;
    document.getElementById('favoriteText').textContent = inputFavoriteValue;

    let inputGood = document.getElementById("inputGood")
    let inputGoodValue = inputGood.value;
    document.getElementById('goodText').textContent = inputGoodValue;

    let inputBirthday = document.getElementById("inputBirthday")
    let inputBirthdayValue = inputBirthday.value;
    document.getElementById('birthdayText').textContent = inputBirthdayValue;
}

