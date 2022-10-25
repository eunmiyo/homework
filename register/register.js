const userid = document.querySelector('#userid');
const pwd1 = document.querySelector('#pwd1');
const pwd2 = document.querySelector('#pwd2');
const level = document.querySelector('#level');
const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const submitButton = document.querySelector('#submit_button');
const gender = document.querySelector('#gender');

submitButton.addEventListener('click', function(){

    // 아이디: 공백여부/ 중복여부
    const idConf = idConfirm();

    // 비밀번호: 공백여부/ 특수문자, 문자, 숫자 포함 형태의 8~15자리를 입력하세요.
    const pwd1Conf = pwd1Confirm();

    // 비밀번호 확인: 공백여부/ 비밀번호와 일치하는지 확인
    const pwd2Conf = pwd2Confirm();

    // 이름: 공백여부/ 
    const fullnameConf = fullnameConfirm();

    // 메일주소: 공백여부/ 메일형식이 맞는지(test@test.com)
    const emailConf = emailConfirm();

    // 연락처(필수아님): 연락처 형식이 맞는지(010-1111-2222) 
    const telConf = telConfirm();

    const genderConf = genderConfirm();
    
})
    // 방법2
    // submitButton.addEventListener('click', function(e){
    // if(idConf && pwd1Conf && pwd2Conf && fullnameConf && emailConf && telConf){
    //     document.signup.submit(); /* action="/test/regist"(임의로 만듦) 여기로 넘겨줌 */
   
    // let chkArray = [idConfirm(), pwd1Confirm(), pwd2Confirm(), fullnameConfirm(), emailConfirm(), telConfirm()]

    // let chkFlag = true

    // for (const chk of chkArray) {
    //     if (!chk){
    //         chkFlag = false
    //     }
    // }

    // if(chkFlag){
    //     document.sign.submit()
    // }
    // })

function idConfirm(){
    const mustId = document.querySelector('.must_id');
    const overLap = document.querySelector('.overlap');

    //텍스트가 남아있는걸 방지하기 위해(초기화)
    mustId.style.display = "none";
    overLap.style.display = "none";

    // null, undefined, "", 0, 빈 문자열은 false
    // replace(/ /g,""): 넚은 공백 또는 0 제거
    if (!userid.value.replace(/ /g,"")){ /* userid가 빈문자열이라면 실행 */
        mustId.style.display = "block";
        return false;
    } else { 
        if (!idCheck(userid.value.replace(/ /g,""))){ /* 아이디가 중복이라면 실행 */
            overLap.style.display = "block";
            return false;
        }
    }
    return true;
}

function pwd1Confirm(){
    const mustPwd1 = document.querySelector('.must_pwd1');
    const regPwd = document.querySelector('.reg_pwd');

    mustPwd1.style.display = "none";
    regPwd.style.display = "none";

    // pwd1 빈문자열 이라면
        if (!pwdCheck(pwd1.value.replace(/ /g,""))){
            regPwd.style.display = "block";
            return false;
        }
    return true;
}

function pwd2Confirm(){
    const mustPwd2 = document.querySelector('.must_pwd2');
    const same = document.querySelector('.same');
    
    mustPwd2.style.display = "none";
    same.style.display = "none";

    if(!pwd2.value.replace(/ /g,"")){
        mustPwd2.style.display = "block";
        return false;
    } else {
        if (pwd1.value.replace(/ /g,"") && pwd2.value.replace(/ /g,"")){ /* 두 패스워드 값이 있는지 확인 */
            if (pwd1.value.replace(/ /g,"") !== pwd2.value.replace(/ /g,"")){ /* 두 패스워가 같지 않다면 */
                same.style.display = "block";
                return false;
            }
        }
    }
    return true;
}

function fullnameConfirm(){
    const mustFullname = document.querySelector(".must_fullname");
    mustFullname.style.display = "none";

    if (!fullname.value.replace(/ /g,"")){
        mustFullname.style.display = "block";
        return false;
    }
    return true;
}

function emailConfirm(){
    const mustEmail = document.querySelector('.must_email');
    const regEmail = document.querySelector('.reg_email');
    
    mustEmail.style.display = "none";
    regEmail.style.display = "none";

    if(!email.value.replace(/ /g,"")){
        mustEmail.style.display = "block";
        return false;
    } else {
        if (!emailCheck(email.value.replace(/ /g,""))){
            regEmail.style.display = "block";
            return false;
        }
    }
    return true;
}

function telConfirm(){
    const regTel = document.querySelector('.reg_tel');
    regTel.style.display = "none";

    // 전화번호가 있고 정규식 체크(유효성)에 통과하지 못했을 때
    if (!telCheck(tel.value.replace(/ /g,"")) && tel.value.replace(/ /g,"")){
        regTel.style.display = "block";
        return false;
    }
    return true;
}

// function genderConfirm() {
//     const mustGender = document.querySelector('.must_gender');
    
//     if (!gender.value){ /* userid가 빈문자열이라면 실행 */
//         mustGneder.style.display = "block"
//         return false;
//     } else
// }


// 중복된 아이디 체크
function idCheck(id) {
    return true;
}

//비밀번호 정규식 체크
function pwdCheck(pwd){
    const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    return reg.test(pwd) /* 정규식이 맞는지 확인시켜줌 */
}

function telCheck(tal){
    const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
    return reg.test(tel);
}

function emailCheck(email){
    const reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return reg.test(email);
}
