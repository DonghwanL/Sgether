/* Variable */ 
var loginBtn = document.querySelector('.login-btn');
var loginClose = document.querySelector('.login-close'); 
var showIogin = document.querySelector('.login-black-background');

var userBtn = document.querySelector('.main-user-btn'); 
var userInterface = document.querySelector('.user-interface'); 

var userAlramBtn = document.querySelector('.main-user-alram'); 
var userAlram = document.querySelector('.user-alram'); 

var joinStudyBtn = document.querySelector('.join-study-btn');
var joinStudyList = document.querySelector('.join-study-list');  

var footer = document.querySelector('.footer'); 


/* Login */ 

loginBtn.addEventListener('click', function() {
    showIogin.style.display = 'block';
})

loginClose.addEventListener('click', function() {
    showIogin.style.display = 'none';
})

showIogin.addEventListener('click', function(e) {
    if(e.target == e.currentTarget) { 
        showIogin.style.display = 'none';
    }
 })


 /* Modal Popup */
 userBtn.addEventListener('mouseenter', function() {
    userInterface.style.display = 'block';
})

userInterface.addEventListener('mouseleave', function() {
    userInterface.style.display = 'none';
 })

 userAlramBtn.addEventListener('click', function() {
    userAlram.style.display = 'block';
})

userAlram.addEventListener('mouseleave', function() {
    userAlram.style.display = 'none';
 })

 joinStudyBtn.addEventListener('mouseenter', function() {
    joinStudyList.style.display = 'block';
})

joinStudyList.addEventListener('mouseleave', function() {
    joinStudyList.style.display = 'none';
 })


// User Modify Section 

// Variable
let form = document.modify_form;

let errorNick = document.querySelector('.error_nick');
let nickCheckBtn = document.querySelector('.check-nick-btn');
let errorPassword1 = document.querySelector('.error_password1');
let errorPassword2 = document.querySelector('.error_password2');
let errorEmail = document.querySelector('.error_email');
let errorAge = document.querySelector('.error_age');
let errorGender = document.querySelector('.error_gender');

let userImageBtn = document.querySelector('.uploadimage');

// Nickname Check

form.nickname.addEventListener('focus', (e)=> {
    if (form.nickname.value == '') {
        form.nickname.focus();
        errorNick.innerHTML = '* 닉네임을 입력 해주세요';
        e.preventDefault;
    } 
});

form.nickname.addEventListener('change', (e)=> {
    if (form.nickname.value.length >= 2 && form.nickname.value.length <= 8) {
        form.name.focus();
        errorNick.innerHTML = '';
    } else {
        form.nickname.focus();
        errorNick.innerHTML = '* 닉네임은 2글자 이상 8글자 이하 입력 해주세요';
        e.preventDefault;
    }
});

// nickCheckBtn.addEventListener('click', ()=> {
 
// });


// Password Check

form.password1.addEventListener('focus', (e)=> {
    if (form.password1.value == '') {
        form.password1.focus();
        errorPassword1.innerHTML = '* 패스워드를 입력 해주세요';
        e.preventDefault;
    } 
});

form.password1.addEventListener('change', (e)=> {
    if (form.password1.value.length >= 6 && form.password1.value.length <= 12) {
        form.password2.focus();
        errorPassword1.innerHTML = '';
    } else {
        form.password1.focus(e);
        errorPassword1.innerHTML = '* 패스워드는 6자리 이상 12자리 이하로 입력 해주세요';
        e.preventDefault;
    }
});

// Password Recheck 

form.password2.addEventListener('focus', (e)=> {
    if (form.password2.value == '') {
        form.password2.focus();
        errorPassword2.innerHTML = '* 패스워드를 다시 입력 해주세요';
        e.preventDefault;
    }
});

form.password2.addEventListener('change', (e)=> {
    if (form.password1.value == form.password2.value) {
        form.email.focus();
        errorPassword2.innerHTML = '';
    } else {
        form.password2.focus();
        errorPassword2.innerHTML = '* 패스워드가 일치하지 않습니다';
        e.preventDefault;
    }
});

// Email Check

form.email.addEventListener('focus', (e)=> {
    if (form.email.value == '') {
        form.email.focus();
        errorEmail.innerHTML = '* 이메일을 입력 해주세요';
        e.preventDefault;
    }
});

form.email.addEventListener('change', (e)=> {
    let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (form.email.value.match(regExp) != null) {
        form.age.focus();
        errorEmail.innerHTML = '';
    } else {
        form.email.focus();
        errorEmail.innerHTML = '* 이메일을 올바른 형식으로 입력 해주세요';
        e.preventDefault;
    }
});

// Age Check

form.age.addEventListener('focus', (e)=> {
    if (form.age.value == null) {
        form.age.focus();
        errorAge.innerHTML = '* 나이를 입력 해주세요';
        e.preventDefault;
    }
});

form.age.addEventListener('change', (e)=> {
    if (form.age.value >= 1) {
        form.gender.focus();
        errorAge.innerHTML = '';
    } else {
        form.age.focus();
        errorAge.innerHTML = '* 나이를 올바르게 설정 해주세요';
        e.preventDefault;
    }
});

// Gender Check 

form.gender.addEventListener('focus', ()=> {
    if (form.gender.value == null) {
        form.gender.focus();
        errorGender.innerHTML = '* 성별을 선택 해주세요';
        event.preventDefault;
    }
});


// User Profile 

userImageBtn.addEventListener('change', (event) => {
    const reader = new FileReader();

    reader.onload = function(event) { 
        
        let userImgPreview = document.querySelector('.user-image-preview');

        userImgPreview.src = event.target.result;
    }
        reader.readAsDataURL(userImageBtn.files[0]);
 });


  /* footer Event */
  window.addEventListener('scroll', ()=> {
    let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
	let windowHeight = window.innerHeight; // 스크린 창
    let fullHeight = document.body.scrollHeight; //  margin 값은 포함 되지 않음
    
    if (scrollLocation + windowHeight >= fullHeight) {
        footer.style.display = 'block';
	} else {
        footer.style.display = 'none';
    }
 })