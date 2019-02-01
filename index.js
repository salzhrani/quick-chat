const btn = document.querySelector('#chat');
const input = document.querySelector('#tel');
btn.onclick = () => {
	window.location =`https://wa.me/${input.value}`
}