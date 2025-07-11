const form = document.querySelector(".typing-area"),
incoming_id = form.querySelector(".incoming_id").value,
inputField = form.querySelector(".input-field"),
sendBtn = form.querySelector("button"),
chatBox = document.querySelector(".chat-box");

form.onsubmit = (e)=>{
    e.preventDefault();
}

inputField.focus();
inputField.onkeyup = ()=>{
    if(inputField.value != ""){
        sendBtn.classList.add("active");
    }else{
        sendBtn.classList.remove("active");
    }
}

sendBtn.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/insert-chat.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              inputField.value = "";
              scrollToBottom();
          }
      }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}
chatBox.onmouseenter = ()=>{
    chatBox.classList.add("active");
}

chatBox.onmouseleave = ()=>{
    chatBox.classList.remove("active");
}

setInterval(() =>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/get-chat.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
            let data = xhr.response;
            chatBox.innerHTML = data;
            if(!chatBox.classList.contains("active")){
                scrollToBottom();
              }
          }
      }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("incoming_id="+incoming_id);
}, 500);

function scrollToBottom(){
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  

// This code handles the chat functionality in a chat application. It allows users to send messages, displays incoming messages, and automatically scrolls to the bottom of the chat box when new messages are received. The chat box also has hover functionality to show or hide the active state. The code uses AJAX to send and retrieve messages from the server without refreshing the page, providing a smooth user experience.
// The `setInterval` function periodically checks for new messages every 500 milliseconds, ensuring that the chat is always up-to-date. The `scrollToBottom` function ensures that the chat box scrolls to the latest message whenever new messages are added.
// The `inputField` is focused by default, and the send button becomes active when there is text in the input field. When the send button is clicked, it sends the message to the server and clears the input field. The chat box updates with new messages and scrolls to the bottom automatically.
// This code is part of a chat application that allows users to communicate in real-time. It includes features for sending messages, displaying incoming messages, and automatically scrolling to the bottom of the chat box when new messages are received. The chat box also has hover functionality to show or hide the active state, enhancing the user experience.
// This code is part of a chat application that allows users to communicate in real-time. It includes features for sending messages, displaying incoming messages, and automatically scrolling to the bottom of the chat box when new messages are received. The chat box also has hover functionality to show or hide the active state, enhancing the user experience.
// This code is part of a chat application that allows users to communicate in real-time. It includes features for sending messages, displaying incoming messages, and automatically scrolling to the bottom of the chat box when new messages are received. The chat box also has hover functionality to show or hide the active state, enhancing the user experience.