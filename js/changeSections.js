var sections = document.querySelectorAll("#main section");
var navButtons = document.querySelectorAll("#header-nav button");
var indexId = "";

function begin() {
    sections.forEach(element => {
        if(element.id !== 's-about'){
            element.style.display = "none";
        }else{
            indexId = element;
        }
    })
}begin()

function changeSection() {
    navButtons.forEach(element => {
        element.addEventListener('click', event => {
            indexId.style.display = "none";

            var numberCharacters = event.target.id.length - 7;
            var sectionId = event.target.id.substring(0, numberCharacters);
            var section = selectSection(sectionId);
            section.style.display = "block";
            indexId = section;
        })
    })
}changeSection()

function selectSection(sectionId) {
    var s_id = "";
    sections.forEach(element => {
        if(element.id === sectionId){
            s_id = element;
        }
    });
    return s_id;
}