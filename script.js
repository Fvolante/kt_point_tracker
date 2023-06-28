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
const removeGuestTacOps = document.getElementById("remove-guest-tac-ops");
const addGuestMission = document.getElementById("add-guest-mission");
const removeGuestMission = document.getElementById("remove-guest-mission");
const operativeListHome = document.getElementById("operative-list-home");
const operativeListGuest = document.getElementById("operative-list-guest"); 

// Operatives lists
const addOperativeHomeBtn = document.getElementById("add-operative-home");
const addOperativeGuestBtn = document.getElementById("add-operative-guest");

// Clear button
const clearBtn = document.getElementById("clear-btn");

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
function updateTotalHome() {
    let tacOps = Number(homeTacOpsPoints.innerText);
    let mission = Number(homeMissionPoints.innerText);

    homeTotPoints.innerText = tacOps + mission;
}

// Update single tacops and mission points

function updateTotalGuest() {
    let tacOps = Number(guestTacOpsPoints.innerText);
    let mission = Number(guestMissionPoints.innerText);

    guestTotPoints.innerText = tacOps + mission;
}

addHomeTacOps.addEventListener("click", function() {
    updatePoints(1, homeTacOpsPoints);
    updateTotalHome();
})

addGuestTacOps.addEventListener("click", function() {
    updatePoints(1, guestTacOpsPoints);
    updateTotalGuest();
})

removeHomeTacOps.addEventListener("click", function() {
    updatePoints(-1, homeTacOpsPoints);
    updateTotalHome();
})

removeGuestTacOps.addEventListener("click", function() {
    updatePoints(-1, guestTacOpsPoints);
    updateTotalGuest();
})

addHomeMission.addEventListener("click", function() {
    updatePoints(1, homeMissionPoints);
    updateTotalHome();
})

addGuestMission.addEventListener("click", function() {
    updatePoints(1, guestMissionPoints);
    updateTotalGuest();
})

removeHomeMission.addEventListener("click", function() {
    updatePoints(-1, homeMissionPoints);
    updateTotalHome();
})

removeGuestMission.addEventListener("click", function() {
    updatePoints(-1, guestMissionPoints);
    updateTotalGuest();
})


/* change team names */
homeTeamName.addEventListener("change", function() {
    operativeHomeTeamName.innerText = homeTeamName.value
})

guestTeamName.addEventListener("change", function() {
    operativeGuestTeamName.innerText = guestTeamName.value
})


/* ADD OPERATIVE ELEMENTS */
/* 
create html for single operative, then attach eventlisteners to each button
@param {str} "home" or "guest" string in order to append the el to right team
*/
function createOperative(team) {

    const operativeListHome = document.getElementById("operative-list-home");
    const operativeListGuest = document.getElementById("operative-list-guest");

    // create el to add to operative list
    const li = document.createElement("li");

    // create an ID
    let IDNumber = Math.floor(Math.random() * Date.now());

    
    let newOperative = `
        <div class="operative-info">
            <div class="top-side">
                <input type="text">
                <button id="delete-${team}-${IDNumber}"><img src="assets/skull_icon.png" alt="skull icon"></button>
            </div>

            <div class="down-side">
                <div class="wounds-side">
                    <div class="buttons">
                        <button class="small-exagon" id="add-${team}-wounds-${IDNumber}">+</button>
                        <button class="small-exagon" id="remove-${team}-wounds-${IDNumber}">-</button>
                    </div>

                    <div class="info">
                        <span>WOUNDS</span>
                        <div class="info-square" id="${team}-wounds-${IDNumber}">0</div> 
                    </div>
                </div>

                <div class="exp-side">
                    <div class="info">
                        <div class="info-square" id="${team}-exp-${IDNumber}">0</div> 
                        <span>EXP</span>
                    </div>
                
                    <div class="buttons">
                        <button class="small-exagon" id="add-${team}-exp-${IDNumber}">+</button>
                        <button class="small-exagon" id="remove-${team}-exp-${IDNumber}">-</button>
                    </div>
                </div>

            </div>
        </div>
        `;

    li.innerHTML = newOperative;

    if (team === "home") {
        operativeListHome.appendChild(li);
    } else if (team === "guest") {
        operativeListGuest.appendChild(li);
    }

    // grab html elements just created
    // wounds
    const addWound = document.getElementById(`add-${team}-wounds-${IDNumber}`);
    const removeWound = document.getElementById(`remove-${team}-wounds-${IDNumber}`);
    const wounds = document.getElementById(`${team}-wounds-${IDNumber}`);
    // exp
    const addExp = document.getElementById(`add-${team}-exp-${IDNumber}`);
    const removeExp = document.getElementById(`remove-${team}-exp-${IDNumber}`);
    const exp = document.getElementById(`${team}-exp-${IDNumber}`);
    // delete el btn
    const delBtn = document.getElementById(`delete-${team}-${IDNumber}`);
    
    addClickFunction(addWound, removeWound, wounds, addExp, removeExp, exp);
    addDeleteFunction(li, delBtn);
}

/* 
add click event on every button generated and update UI
@params {obj} the obj each element to add on the evenlistener - 6 elements
*/
function addClickFunction(addWound, removeWound, wounds, addExp, removeExp, exp) {

    addWound.addEventListener("click", function() {
        updatePoints(1, wounds);
    })

    removeWound.addEventListener("click", function() {
        updatePoints(-1, wounds);
    })

    addExp.addEventListener("click", function() {
        updatePoints(1, exp);
    })

    removeExp.addEventListener("click", function() {
        updatePoints(-1, exp);
    })
}

/* 
add delete function to btn
@param {obj} the el to delete
@param {obj} the btn el which triggers the event
*/
function addDeleteFunction(el, btn) {

    btn.addEventListener("click", function() {
        el.remove()
    })
}


/* 
functions to add operative element in each team
*/
addOperativeHomeBtn.addEventListener("click", function() {
    createOperative("home");
})

addOperativeGuestBtn.addEventListener("click", function() {
    createOperative("guest");
})


/* CLEAR ALL */
clearBtn.addEventListener("click", function() {

    // clear operatives
    operativeListHome.innerHTML = "";
    operativeListGuest.innerHTML = "";

    // clear points
    homeTotPoints.innerText = 0;
    homeTacOpsPoints.innerText = 0;
    homeMissionPoints.innerText = 0;
    guestTotPoints.innerText = 0;
    guestTacOpsPoints.innerText = 0; 
    guestMissionPoints.innerText = 0;
})