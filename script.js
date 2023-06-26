/* UI Elements */
const homeTeamName = document.getElementById("home-team-name");
const guestTeamName = document.getElementById("guest-team-name");
const operativeHomeTeamName = document.getElementById("operative-home-team-name");
const operativeGuestTeamName = document.getElementById("operative-guest-team-name");
const addOperativeGuestBtn = document.getElementById("add-operative-guest");



homeTeamName.addEventListener("change", function() {
    operativeHomeTeamName.innerText = homeTeamName.value
})

guestTeamName.addEventListener("change", function() {
    operativeGuestTeamName.innerText = guestTeamName.value
})