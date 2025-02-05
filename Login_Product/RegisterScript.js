let person = [];

function storeData({ userName, password, email, address }) {
  let prev = JSON.parse(localStorage.getItem("person"));
  console.log("prev", prev);
  if (prev == null) {
    localStorage.setItem(
      "person",
      JSON.stringify([{ userName, password, address, email }])
    );
  } else {
    prev.push({ userName, password, address, email });
    localStorage.setItem("person", JSON.stringify(prev));
  }
}

function checkUser(userName,email) {
  let data = JSON.parse(localStorage.getItem("person"));
  if (data != null) {
    for (const user of data) {
      if (user.userName == userName || user.email == email) {
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
  let emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let userReg = /[a-zA-Z0-9_]{2,15}$/
  let pass = /^[a-zA-Z0-9_]{4,}/
  if (userName == "") {
    alert("please enter valid Username.");
    userName.focus();
    return false;
  }
  if (!userName.match(userReg)) {
    alert("Please Don't use any special char in userName except _ ")
    return false
  }
  if (email == "") {
    alert("please enter valid Password.");
    email.focus();
    return false;
  }
  if (!email.match(emailReg)) {
    alert("please enter email correctly")
    return false
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
  if(!password.match(pass)) {
    alert("Password should have minimum 6 character.")
  }
  let check = checkUser(userName,email);

  if (!check) {
    document.querySelector(".pop-up").style.display = "block";
    setTimeout(() => {
      document.querySelector(".pop-up").style.display = "none";
    }, 3000);

    return false;
  }

  storeData({ userName, password, address, email });

  window.location.href = "Home.html";
  return false;
}
