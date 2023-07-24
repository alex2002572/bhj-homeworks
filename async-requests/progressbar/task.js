"use strict";

const sendnBtn = document.getElementById("send");
const progress = document.getElementById("progress");
const form = document.getElementById("form");
sendnBtn?.addEventListener("click", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
  xhr.send(formData);

  
  xhr.upload.onprogress = function (event) {
    progress.value = event.loaded / event.total;
  };

  xhr.upload.onerror = function () {
    console.log("Произошла ошибка при загрузке данных на сервер!");
  };

  
  xhr.onload = function () {
    alert(JSON.parse(xhr.response).message);
  };
});