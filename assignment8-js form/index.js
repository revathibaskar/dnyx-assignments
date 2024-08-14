let newPasswordEle = document.getElementById("newPassword");
let confirmPasswordEle = document.getElementById("confirmPassword")
let newPasswordErrMsgEle = document.getElementById("newPasswordErrMsg")
let confirmPasswordErrMsgEle  = document.getElementById("confirmPasswordErrMsg")
let updatePasswordFomEle = document.getElementById("updatePasswordFom")

const onNewRequireMsg = (event) => {
    if(event.target.value === ""){
        newPasswordErrMsgEle.textContent = "Required*"
    }
    else{
        newPasswordErrMsgEle.textContent = ""
    }
}

const onConfirmRequireMsg = (event) => {
    if(event.target.value === ""){
        confirmPasswordErrMsgEle.textContent = "Required*"
    }
    else{
        confirmPasswordErrMsgEle.textContent = ""
    }
}

const onCheckValidation = (event) => {
    event.preventDefault()
    if(newPasswordEle.value === ""){
        newPasswordErrMsgEle.textContent = "Required*"
    }
    else{
        newPasswordErrMsgEle.textContent = ""
    }

    if(confirmPasswordEle.value === ""){
        confirmPasswordErrMsgEle.textContent = "Required*"
    }
    else{
        confirmPasswordErrMsgEle.textContent = ""
    }
}

newPasswordEle.addEventListener("blur",onNewRequireMsg)
confirmPasswordEle.addEventListener("blur",onConfirmRequireMsg)
updatePasswordFomEle.addEventListener("submit",onCheckValidation)