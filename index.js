const btn = document.querySelector('#chat');
const input = document.querySelector('#tel');

const checkInput = el => {
	const { value } = el;
    if (
        (value.indexOf('05') === 0 && value.trim().length === 10) ||
        (value.indexOf('966') === 0 && value.trim().length === 12)
    ) {
		btn.disabled = '';
    } else {
		btn.disabled = 'true';
    }
}

checkInput(input);

input.addEventListener('keyup', evt => {
	checkInput(evt.target);
});

btn.onclick = () => {
    const { value } = input;
    window.location = `https://wa.me/${value.replace(/^05/, '9665')}`;
};
