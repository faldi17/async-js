function addElement() {
    const header = document.createElement('h1');
    header.id = 'header';
    document.body.appendChild(header);
    return header;
}

function setTime() {
    const header = document.getElementById('header') || addElement();
    header.textContent = new Date().toString();
}

setInterval(setTime, 1000);