import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const a=document.querySelector(".feedback-form"),m="feedback-form-state";let e={email:"",message:""};document.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem(m);t&&(e=JSON.parse(t),a.elements.email.value=e.email||"",a.elements.message.value=e.message||"")});a.addEventListener("input",t=>{const{name:s,value:l}=t.target;e[s]=l.trim(),localStorage.setItem(m,JSON.stringify(e))});a.addEventListener("submit",t=>{t.preventDefault();const{email:s,message:l}=e;if(!s||!l){alert("Fill please all fields");return}console.log("Submitted data:",e),localStorage.removeItem(m),e={email:"",message:""},a.reset()});
//# sourceMappingURL=2-form.js.map
