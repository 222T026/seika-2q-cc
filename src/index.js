import JustValidate from 'just-validate';

// ==============================================================

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

//=================================================================
const swiper = new Swiper('.swiper-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


//スライドが切り替わった時のイベント
const swiperTitleEl = document.getElementById('swiper-title')
const textEl = document.createTextNode('スライドナンバーを表示しています')
swiperTitleEl.appendChild(textEl)

swiper.on('slideChange',function(){
  //スライド番号を取得
  const currentSlideNumber = swiper.realIndex;
  console.log(currentSlideNumber)
  //テキスト
  const text = "スライド" + currentSlideNumber + "を表示しています"
  console.log(text)
  
  textEl.remove()

  textEl = document.createTextNode(text)
  swiperTitleEl.appendChild(textEl)
  
})

//２つ目のswiper-----------------------------

const swiper2 = new Swiper('.swiper-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

let title2list = [
  "ぴえん",
  "カオニャオマムアン",
  "ごま団子"
]



//スライドが切り替わった時のイベント
const swiperTitleEl2 = document.getElementById('swiper-title2')
const textEl2 = document.createTextNode('スライドナンバーを表示しています')
swiperTitleEl2.appendChild(textEl2)

swiper2.on('slideChange',function(){
  //スライド番号を取得
  const currentSlideNumber2 = swiper2.realIndex;
  console.log(currentSlideNumber2)
  //テキスト
  const text2 = title2list[currentSlideNumber2]
  console.log(text2)
  
  textEl2.remove()

  // textEl2 = document.createTextNode(text2)
  // swiperTitleEl2.appendChild(textEl2)

  // textEl2 = document.createTextNode(text2)
  swiperTitleEl2.appendChild(text2)
  
  
});



// ==========================================================================

const validator = new JustValidate('#basic_form');

validator
  .addField('#basic_name', [
    {
      rule: 'required',
      errorMessage: 'この項目は必須です',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: '3文字以上入力してください',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: '15文字以下で入力してください',
    },
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
      errorMessage: 'この項目は必須です',
    },
    {
      rule: 'email',
      errorMessage: 'Emailの形式で入力してください',
    },
  ])
  .addField('#basic_password', [
    {
      rule: 'required',
      errorMessage: 'この項目は必須です',
    },
    {
      rule: 'password',
      errorMessage: '1文字以上の文字と数字で8文字以上入力してください',
    },
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
      errorMessage: 'この項目は必須です',
    },
    {
      rule: 'number',
      errorMessage: '数字を入力してください',
    },
    {
      rule: 'minNumber',
      value: 0,
      errorMessage: '18文字以上入力してください',
    },
    {
      rule: 'maxNumber',
      value: 3,
      errorMessage: '3文字以下で入力してください',
    },
  ])
  .addField('#basic_address', [
    {
      rule: 'required',
      errorMessage: 'この項目は必須です',
    },
    {
      rule: 'minNumber',
      value: 1,
      errorMessage: '10文字以上入力してください',
    },
    {
      rule: 'maxNumber',
      value: 150,
      errorMessage: '150文字以下で入力してください',
    },
  ])
  .onSuccess((event) => {
    console.log(event)
    console.log(event.target)

    let formData = new FormData(event.target);
    console.log(formData.get("name"))
    console.log(formData.get("email"))
    console.log(formData.get("password"))
    console.log(formData.get("age"))
    console.log(formData.get("address"))
  });

  