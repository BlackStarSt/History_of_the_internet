const el = document.getElementsByClassName('principal_container');
const btnAno = document.getElementsByTagName('li');

for(var i = 0; i < btnAno.length; i++) {
    const box = btnAno[i];
    const bx = el[i];
    box.addEventListener('click', (e) => {
        if(bx.style.display == 'none') {
            bx.style.display = 'flex';
            box.style.display = 'red';
        } else {
            bx.style.display = 'none';
        }

    });
};