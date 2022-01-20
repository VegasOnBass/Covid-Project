// Wait for info to load:
document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#overview').style.display = 'block'
    document.querySelector('#symptoms').style.display = 'none'
    document.querySelector('#prevention').style.display = 'none'

    // Select all buttons
    document.querySelectorAll('button').forEach(button => {

        // When a button is clicked, switch to that page
        button.onclick = function() {
            var info = this.dataset.info;
            showInfo(info);
        }
    })
});

function showInfo(info) {
    if(document.querySelector(`#${info}`)){
        // Hide all of the divs:
        document.querySelectorAll('.info').forEach(div => {
            div.style.display = 'none';
        });

        // Show the div provided in the argument
        document.querySelector(`#${info}`).style.display = 'block';
    }else{
        return false;
    }

}