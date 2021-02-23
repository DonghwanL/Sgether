
let writeComments = document.querySelector('.cwWrite');

let memberToggleBtn = document.querySelector('.member-toggle-btn');
let memberList = document.querySelector('.study-member');

memberToggleBtn.addEventListener('click', () => {

    if (memberList.style.display == 'none') {
        memberList.style.display = 'block';
    } else {
        memberList.style.display = 'none';
    }
    
});


writeComments.addEventListener('keydown', () => {
    // Post 200자 초과 안되게 자동 자르기
    let lengthCheckEx = /^.{200,}$/;

    if (lengthCheckEx.test(writeComments.value)) {
        // 200자 초과시
        writeComments.value = writeComments.value.substr(0,200);
    }
});