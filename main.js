let expandButtons = document.querySelectorAll('.button-expand');
let expandTexts = document.querySelectorAll('.expand-text');

for (let element = 0; element<expandButtons.length; element++)
{
    expandButtons[element].onclick = function() {
        expandButtons[element].classList.toggle('active');
    }
}