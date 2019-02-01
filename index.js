const btn = document.querySelector('#chat');
const input = document.querySelector('#tel');
btn.onclick = () => {
	const {value} = input;
	window.location =`https://wa.me/${value.replace(/^05/, '9665')}`
}