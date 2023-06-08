function validateForm() {
  const name = document.forms["message-form"]["full-name"].full - name;
  const birthDate = document.forms["message-form"]["birth-date"].birthDate;
  const gender = document.forms["message-form"]["gender"].gender;
  const messages = document.forms["message-form"]["messages"].messages;

  if (name == "" || birthDate == "" || gender == "" || messages == "") {
    alert("Tidak boleh ada yang kosong");
    return false;
  }

  setSenderUI(name, birthDate, gender, messages);

  return false;
}
function setSenderUI(name, birthDate, gender, messages) {
  document.getElementById("sender-full-name").innerHTML = name;
  document.getElementById("sender-birth-date").innerHTML = birthDate;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-messages").innerHTML = messages;
}
