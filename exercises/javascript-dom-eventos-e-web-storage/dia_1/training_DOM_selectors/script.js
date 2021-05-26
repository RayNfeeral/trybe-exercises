const header = document.querySelector('#header-container');
header.style.backgroundColor = '#0c3';

const emergencySection = document.querySelector('.emergency-tasks')
emergencySection.style.backgroundColor = '#f87'

const emergencySectionTitles = document.querySelectorAll('.emergency-tasks div h3')
emergencySectionTitles.forEach(elem => elem.style.backgroundColor = '#ac00ac')

const noEmergencySection = document.querySelector('.no-emergency-tasks')
noEmergencySection.style.backgroundColor = '#ff6'

const noEmergencySectionTitles = document.querySelectorAll('.no-emergency-tasks div h3')
noEmergencySectionTitles.forEach(elem => elem.style.backgroundColor = '#000')

const footer = document.querySelector('#footer-container')
footer.style.backgroundColor = '#002023'