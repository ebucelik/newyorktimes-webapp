const o=document.querySelector("#registerForm"),r=document.querySelector("#error"),n=document.querySelector("#success");s(!0);i(!0);o!=null&&o.addEventListener("submit",e=>{e.preventDefault(),n.hidden=!0;const l=document.querySelector("#email");if(c(l.value))t("");else{t("E-Mail is not valid.");return}if(document.querySelector("#password").value.length>4)t("");else{t("Password is to weak.");return}const u=document.querySelector("#phonenumber");if(u.value.length>0)if(u.value.length>8)t("");else{t("Phone number is not valid.");return}s(!0),i(!1),n.textContent="Successfully registered!"});function c(e){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)}function t(e){r.textContent=e,r.hidden=e.length<=0}function s(e){r!=null&&(r.hidden=e)}function i(e){n!=null&&(n.hidden=e)}
