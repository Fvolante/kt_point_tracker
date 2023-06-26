/* UI Elements */

// Teams names
const homeTeamName = document.getElementById("home-team-name");
const guestTeamName = document.getElementById("guest-team-name");
const operativeHomeTeamName = document.getElementById("operative-home-team-name");
const operativeGuestTeamName = document.getElementById("operative-guest-team-name");

// Victory points
const homeTotPoints = document.getElementById("home-tot-points");
const homeTacOpsPoints = document.getElementById("home-tacops");
const homeMissionPoints = document.getElementById("home-mission");
const guestTotPoints = document.getElementById("guest-tot-points");
const guestTacOpsPoints = document.getElementById("guest-tacops");
const guestMissionPoints = document.getElementById("guest-mission");
const addHomeTacOps = document.getElementById("add-home-tac-ops");
const removeHomeTacOps = document.getElementById("remove-home-tac-ops");
const addHomeMission = document.getElementById("add-home-mission");
const removeHomeMission = document.getElementById("remove-home-mission");
const addGuestTacOps = document.getElementById("add-guest-tac-ops");
const removeGuestTacOps = document.getElementById("add-guest-tac-ops");
const addGuestMission = document.getElementById("add-guest-mission");
const removeGuestMission = document.getElementById("remove-guest-mission"); 

// Operatives lists
const addOperativeHomeBtn = document.getElementById("add-operative-home");
const addOperativeGuestBtn = document.getElementById("add-operative-guest");





/* MANAGE VICTORY POINTS */

/* 
update points UI
@param {nmuber} the number which is added or removed to total
@param {obj} the dom el to update
*/
function updatePoints(pointsAdded, el) {
    el.innerText = Number(el.innerText) + pointsAdded;
}

/* 
update total points UI
*/
function updateTotal() {
    let tacOps = Number(homeTacOpsPoints.innerText);
    let mission = Number(homeMissionPoints.innerText);

    homeTotPoints.innerText = tacOps + mission;
}

addHomeTacOps.addEventListener("click", function() {
    updatePoints(1, homeTacOpsPoints);
    updateTotal();
})

removeHomeTacOps.addEventListener("click", function() {
    updatePoints(-1, homeTacOpsPoints);
    updateTotal();
})

addHomeMission.addEventListener("click", function() {
    updatePoints(1, homeMissionPoints);
    updateTotal();
})

removeHomeMission.addEventListener("click", function() {
    updatePoints(-1, homeMissionPoints);
    updateTotal();
})


/* change team names */
homeTeamName.addEventListener("change", function() {
    operativeHomeTeamName.innerText = homeTeamName.value
})

guestTeamName.addEventListener("change", function() {
    operativeGuestTeamName.innerText = guestTeamName.value
})