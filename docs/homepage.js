function clickPress(event) {
    if (event.key == "Enter") {
        var command = document.getElementById('input').value;
        console.log(command);
        understandInput(command);

        var newInput = document.createElement('div');
        newInput.innerHTML = document.getElementById('empty-gui').innerHTML;
        newInput.className = 'terminal-text';
        newInput.id = 'empty-gui';

        document.getElementById('input').disabled = 'disabled;'
        document.getElementById('input').id = 'old-input';
        document.getElementById('empty-gui').id = 'old-empty-gui';


        document.getElementById('terminal-gui').appendChild(newInput);
        document.getElementById('input').focus();
    }
}
function understandInput(command){
    if(command == "sudo"){
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', "_blank");
    }
}
function onXClick(){
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}