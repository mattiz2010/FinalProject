/// Variables
var closeContacts = document.getElementById("closeContact");
var buttonContact = document.getElementById("button2");
var contact = document.getElementById("contactPage");
var setting = document.getElementById("settingsPage");
var buttonSettings = document.getElementById("button1");
var closeSetting = document.getElementById("closeSettings");
var blue = document.getElementById("colorBlue");
var green = document.getElementById("colorGreen");
var body1 = document.getElementById("body1");
var notificationButton1 = document.getElementById("notificationButton");
var notificationPage = document.getElementById("notificationsPage");
var closeNotificationsPage = document.getElementById("closeNotifications");
var fontStyle1 = document.getElementById("style1");
var fontStyle2 = document.getElementById("style2");
var blackFont = document.getElementById("blackColor");
var whiteFont = document.getElementById("whiteColor");
var googleButton = document.getElementById("google");
/// Code

buttonContact.onclick = clickedContact;
closeContacts.onclick = closedContact;
buttonSettings.onclick = openSettings;
closeSetting.onclick = closeSettings;
blue.onclick = blueBackground;
green.onclick = greenBackground;
notificationButton1.onclick = openNotifications;
closeNotificationsPage.onclick = closeNotification;
fontStyle1.onclick = font1;
fontStyle2.onclick = font2;
whiteFont.onclick = white;
blackFont.onclick = black;
googleButton.onclick = googleSite;

settingsPage.style.visibility = "hidden";
contact.style.visibility = "hidden";
notificationPage.style.visibility = "hidden";

function clickedContact() {
    contact.style.visibility = "visible";
}

function closedContact() {
    contact.style.visibility = "hidden";
}

function openSettings() {
    settingsPage.style.visibility = "visible";
}

function closeSettings() {
    settingsPage.style.visibility = "hidden";
}

function blueBackground() {
    body1.style.backgroundColor = "#c2e3f7";
}

function greenBackground() {
    body1.style.backgroundColor = "#90ed7f";
}

function openNotifications() {
    notificationPage.style.visibility = "visible";
}

function closeNotification() {
    notificationPage.style.visibility = "hidden";
}

function font1() {
    body1.style.fontFamily =
        "Cambria, Cochin, Georgia, Times, Times New Roman, serif";
    fontStyle1.textContent = "Current style";
    fontStyle2.textContent = "Gill Sans";
}
function font2() {
    body1.style.fontFamily = "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS";
    fontStyle2.textContent = "Current style";
    fontStyle1.textContent = "Cambria";
}

function black() {
    body1.style.color = "Black";
}
function white() {
    body1.style.color = "white";
}
function googleSite() {
    window.location.href = "https://www.google.com/"; // I'm using example but you can use google.
}
