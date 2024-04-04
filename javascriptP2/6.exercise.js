function checkPassword(password) {
  if (password.length >= 8) {
    console.log("strong password");
  } else {
    console.log("your password is weak");
  }
}
checkPassword("12345678");
