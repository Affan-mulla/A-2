let person = [];

function storeData({ userName, password }) {
  let prev = JSON.parse(localStorage.getItem("person"));
  console.log("prev", prev);
  if (prev == null) {
    localStorage.setItem(
      "person",
      JSON.stringify([{ userName: userName.value, password: password.value }])
    );
  } else {
    prev.push({ userName: userName.value, password: password.value });
    localStorage.setItem("person", JSON.stringify(prev));
  }
}

function checkUser(userName) {
  let data = JSON.parse(localStorage.getItem("person"));
  if (data != null) {
   for (const user of data) {
    if (user.userName == userName) {
      return false;
    }
   }
  } 
  return true;
}

function val() {
  let userName = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  if (userName == "") {
    alert("please enter valid Username.");
    userName.focus();
    return false;
  }
  if (email == "") {
    alert("please enter valid Password.");
    email.focus();
    return false;
  }
  if (address == "") {
    alert("please enter valid Password.");
    password.focus();
    return false;
  }
  
  if (password == "") {
    alert("please enter valid Password.");
    password.focus();
    return false;
  }
  let check = checkUser(userName);

  if (!check) {
    document.querySelector(".pop-up").style.display = "block";
    setTimeout(() => {
      document.querySelector(".pop-up").style.display = "none";
    }, 3000);

    return false;
  }

  storeData({ userName, password });

  window.location.href = "Product.html";
  return false;
}
