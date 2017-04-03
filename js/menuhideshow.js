function () {
  var cookies = document.cookie,
      loggedIn = cookies.substr(10, 12);
  if (loggedIn = yes) {
    document.getElementById('login').className('show')
    document.getElementById('repo').className('hide')
  } else {
    document.getElementById('repo').className('show')
    document.getElementById('login').className('hide')
  }
}
