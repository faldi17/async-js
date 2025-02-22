function addElement() {
    const header = document.createElement('h1');
    header.textContent = 'Hello, World!';
    document.body.appendChild(header);
}

setTimeout(addElement, 5000);
console.info("Fighting broo");