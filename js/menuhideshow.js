function () {
  var cookies = document.cookie;
  if (true) {
    document.getElementById('login').className('show')
    document.getElementById('repo').className('hide')
  } else {
    document.getElementById('repo').className('show')
    document.getElementById('login').className('hide')
  }
}
