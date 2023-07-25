window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
   response.json().then(function(json) {
    console.log(json);
    json.sort(function(a, b){return b.hoursInSpace - a.hoursInSpace});
    const container = document.getElementById("container");
    let index = 0;
    for (let i = 0; i < json.length; i++) {
        container.innerHTML += `
        <div class="astronaut">
        <div class="bio">
        <h3>${json[index].firstName} ${json[index].lastName}</h3>
        <ul>
        <li>Hours in space: ${json[index].hoursInSpace}</li>
         <li id="active${index}">Active: ${json[index].active}</li>
         <li>Skills: ${json[index].skills}</li>
      </ul>
   </div>
   <img class="avatar" src=${json[index].picture}>
</div>
        `;
        const active = document.getElementById(`active${index}`);
        if (json[index].active === true) {
            active.style.color = "green";
        }
        else {
            active.style.color = "red";
        }
        index = (index + 1) % json.length;
    }
    let astronautsHeader = document.querySelector("h1");
    astronautsHeader.innerHTML += ` (${json.length})`
        });
    });
});