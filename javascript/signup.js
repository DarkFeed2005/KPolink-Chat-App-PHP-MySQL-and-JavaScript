const form = document.querySelector(".signup form"),
continueBtn = form.querySelector(".button input"),
errorText = form.querySelector(".error-text");

form.onsubmit = (e)=>{
    e.preventDefault();
}

continueBtn.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/signup.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "success"){
                location.href="users.php";
              }else{
                errorText.style.display = "block";
                errorText.textContent = data;
              }
          }
      }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}
// This code handles the signup form submission. It prevents the default form submission behavior, sends an AJAX request to the server with the form data, and handles the response to either redirect to the users page or display an error message.
// The form data is sent using the FormData object, which automatically encodes the form fields. The server response is checked, and if it indicates success, the user is redirected to the users page. If there is an error, it displays the error message in the designated error text element. 