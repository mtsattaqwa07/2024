document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();
  // Implement your login logic here
  // For example, you can check the username and password and redirect to different pages accordingly
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === "guru" && password === "1992") {
    window.location.href = "https://drive.google.com/drive/folders/1cecKg_K71gPcXULmOJIZkQEyjBFF_FDD?lfhs=2";
  } else if (username === "eskul" && password === "8899") {
    window.location.href = "https://drive.google.com/drive/folders/1t86Wsr4lvSY1xrDpsL74RZx817fuN9R4?lfhs=2";
  } else if (username === "walas" && password === "9999") {
    window.location.href = "https://drive.google.com/drive/folders/1iygu2UdUSJA-F9nFDGkM_MWLSkMG2ub4?lfhs=2";
  } else if (username === "kurikulum" && password === "9955") {
    window.location.href = "https://drive.google.com/drive/folders/12USqLJc1oMjmgTVd3QO1LllpLwGBpb2i?lfhs=2";
  } else if (username === "kesiswaan" && password === "0354") {
    window.location.href = "https://drive.google.com/drive/folders/1Y9WtXGIHJNTIDnDFeiZzpuIX9u9sqYFY?lfhs=2";
  } else {
    alert("username atau password salah !");
  }
});

// tampilkan password
function showPassword() {
  var passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
