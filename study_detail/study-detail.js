
let introTab = document.querySelector('.tab-intro-btn');
let reviewTab = document.querySelector('.tab-review-btn');
let introDetail = document.querySelector('.study-detail-intro');
let reviewDetail = document.querySelector('.study-detail-review');
let writeComments = document.querySelector('.cwWrite');
let ratingScore = document.querySelector('.ratingScore').value;

introTab.addEventListener('click', () => {
    reviewDetail.classList.remove('content-show');
    reviewTab.classList.remove('content-active');
    introTab.classList.add('content-active');
    introDetail.classList.remove('content-hide');
    introDetail.classList.add('content-show');
});

reviewTab.addEventListener('click', () => {
    introTab.classList.remove('content-active');
    reviewTab.classList.add('content-active');
    introDetail.classList.add('content-hide');
    reviewDetail.classList.add('content-show');
});


writeComments.addEventListener('keydown', () => {
    //리뷰 100자 초과 안되게 자동 자르기
    let lengthCheckEx = /^.{100,}$/;

    if (lengthCheckEx.test(writeComments.value)) {
        // 100자 초과시
        writeComments.value = writeComments.value.substr(0,100);
    }
});