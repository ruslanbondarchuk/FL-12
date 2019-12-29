const minemaillength = 5;
const minpasslength = 6;
let user = 'user@gmail.com';
let admin = 'admin@gmail.com';
let userpass = 'UserPass';
let adminpass = 'AdminPass';
let currentlogin = user; //?
let login = prompt('Please, input login');
if (!login) {
 alert('Canceled.');
} else if (login.length < minemaillength) {
  alert('I don\'t know any emails having name length less than 5 symbols');
} else if (login !== user & login !== admin) {
  alert('I don\'t know you');
} else {
  currentlogin = login;
  let inputpassword = prompt('Please, input password');
  if (inputpassword !== adminpass & login === admin || inputpassword !== userpass & login === user) {
    alert('Wrong password');
  } else if (!confirm('Do you want to change your password?')) {
    alert('You have failed the change.');
  } else {
    let checkoldpass = prompt('Please, input an old password');
    if (!checkoldpass) {
      alert('Cancelled.');
    } else {
      let newpass = prompt('Please, enter a new password');
      if (!newpass) {
        alert('Canceled.');
      } else if (newpass.length < minpasslength) {
          alert('It\'s too short password. Sorry.');
      } else {
        let newpassrepeat = prompt('Please, repeat a new password');
        if (newpassrepeat !== newpass) {
          alert('You wrote The wrong password.')
        } else {
          switch (currentlogin) {
            case user:
              userpass = newpass;
              alert('You have succesfully changed your password');
              break;
            case admin:
              adminpass = newpass;
              alert('You have succesfully changed your password');
              break;
            default:
              alert('error');
              break;
          }
        }
      }
    }
  }
}
