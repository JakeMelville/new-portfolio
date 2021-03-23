const appBtn = document.getElementById("appBtn");
const resumeBtn = document.getElementById("resumeBtn");



// resumeBtn.addEventListener('click', function() {
    
// }) 


function showAboutMe(event) {
    document.getElementById("contactCard").setAttribute("hidden", true)
    document.getElementById("aboutCard").removeAttribute('hidden');
    console.log('clicked')
}
function showContactCard(event) {
    document.getElementById("aboutCard").setAttribute('hidden', true);
    document.getElementById("contactCard").removeAttribute('hidden')
}


document.getElementById("abtMe").addEventListener("click", showAboutMe)
document.getElementById("meContact").addEventListener("click", showContactCard)