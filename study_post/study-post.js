
// Study Menu Toggle

let memberToggleBtn = document.querySelector('.member-menu-btn');
let memberContent = document.querySelector('.member-content');

let fileToggleBtn = document.querySelector('.file-menu-btn');
let fileContent = document.querySelector('.file-content');

let manageToggleBtn = document.querySelector('.manage-menu-btn');
let manageContent = document.querySelector('.manage-content');

memberToggleBtn.addEventListener('click', () => {

    if (memberContent.style.display == 'none') {
        memberContent.style.display = 'block';
    } else {
        memberContent.style.display = 'none';
    }
    
});

fileToggleBtn.addEventListener('click', () => {

    if (fileContent.style.display == 'none') {
        fileContent.style.display = 'block';
    } else {
        fileContent.style.display = 'none';
    }
    
});

manageToggleBtn.addEventListener('click', () => {

    if (manageContent.style.display == 'none') {
        manageContent.style.display = 'block';
    } else {
        manageContent.style.display = 'none';
    }
    
});


// Post Modify 

for (let i = 0; i < $('.post-modify-btn').length; i++) {
	$('.post-modify-btn').eq(i).click(function() {

        if ($('.post-modify-group').css("display") == 'none') {
             $('.comment-content').eq(i).hide()
             $('.post-modify-group').eq(i).show()

        } else {
            $('.comment-content').eq(i).show()
            $('.post-modify-group').eq(i).hide()
        }
	});
}

// Post Delete

let studyDeleteBtn = document.querySelector('.study-delete-btn');

function deletePost(postNo) {
    let confirmMsg = confirm('정말 포스트를 삭제 하시겠습니까?');

    if (confirmMsg == true) {
       location.href = '';
    } else {
        return false;
    }
}

studyDeleteBtn.addEventListener('click', () => {
    let confirmMsg = confirm('정말 스터디를 삭제 하시겠습니까?');

    if (confirmMsg == true) {
       location.href = '';
    } else {
        return false;
    }
    
});


// Write Length

let writeComments = document.querySelector('.cwWrite');
let modifyComments = document.querySelectorAll('.comment-modify');


function commentsLength() {

    for (let i = 0; i < modifyComments.length; i++ ) {
        // Post 200자 초과 안되게 자동 자르기
        let lengthCheckEx = /^.{200,}$/;

        if (lengthCheckEx.test(modifyComments[i].value)) {
            // 200자 초과시
            modifyComments[i].value = modifyComments[i].value.substr(0,200);
        }
    }
}

writeComments.addEventListener('keydown', () => {
    // Post 200자 초과 안되게 자동 자르기
    let lengthCheckEx = /^.{200,}$/;

    if (lengthCheckEx.test(writeComments.value)) {
        // 200자 초과시
        writeComments.value = writeComments.value.substr(0,200);
    }
});