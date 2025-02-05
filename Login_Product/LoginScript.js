function checkUser(userName) {
  let data = JSON.parse(localStorage.getItem("person"));

  if (data != null) {
    for (const user of data) {
    
      
      if (user.userName == userName) {
        console.log(data);
        
        data = data.filter((item)=> item.userName != userName)
        data.push(user)
        localStorage.setItem("person",JSON.stringify(data))
        return { userName: user.userName, password: user.password };
      }
    }
  }

  document.querySelector(".userERR").style.display = "block";
  setTimeout(() => {
    document.querySelector(".userERR").style.display = "none";
  }, 3000);
  return false;
}

function checkUserDetail({ userName, password }) {
  let user = checkUser(userName.value);
  if (!user) {
    return false
  }
  if (user.password != password.value) {
    document.querySelector(".passERR").style.display = "block";
  setTimeout(() => {
    document.querySelector(".passERR").style.display = "none";
  }, 3000);
    return false;
  }
  return true;
}

function val() {
 
  let userName = document.getElementById("username");
  let password = document.getElementById("password");
  if (userName.value == "") {
    alert("please enter valid Username.");
    userName.focus();
    return false;
  }
 
  if (password.value == "") {
    alert("please enter valid Password.");
    password.focus();
    return false;
  }

  let authUser = checkUserDetail({ userName, password });
  console.log("auth", authUser);

  
  if (authUser) {
    window.location.href = "Home.html";
  }
 
  return false;
}
