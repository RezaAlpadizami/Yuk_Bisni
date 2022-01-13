const contentPhoto = document.getElementById("content-photo");
const contentHeadTitle = document.getElementById("content-photo");
const imageProfile = document.getElementById("image");
const titleHeadline = document.getElementById("title-headline");
const titleUser = document.getElementById("title-user");

const apiUrl = "https://randomuser.me/api/";

function userInform() {
  titleUser.textContent = data.results.picture.medium;
}

async function getApiRandomUser() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    userInform();
  } catch (error) {}
}

getApiRandomUser();
