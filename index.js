
// get a reference to the input element and the button
const btn = document.querySelector('#chat');
const input = document.querySelector('#tel');


const checkInput = el => {
    const { value } = el;
    // value should only be numbers
    // if not disable the button
    if (!/^\d+$/.test(value)) {
        btn.disabled = 'true';
    } else if (
      // if the number starts with 05 then assume its a Saudi Number
      // and make sure it is exactly 10 chars
        (value.indexOf('05') === 0 && value.trim().length === 10) ||
        // if it is not a Saudi number ... require at least 5 chars
        value.trim().length > 5
    ) {
        // enable the button by clearing the 'disabled' property
        btn.disabled = '';
    } else {
        // disable the button by setting it 'disabled' property to true
        btn.disabled = 'true';
    }
};

checkInput(input);

// attach an event listener for the key up event
input.addEventListener('keyup', evt => {
    checkInput(evt.target);
});


// attach an event listener for the paste event
input.addEventListener('paste', evt => {
  ga('send', 'event', 'main', 'paste');
    const { target } = evt;
    // we don't need the event data, we just need to know that it happened

    // this function is invoked before the input updating its value
    // so it might be empty or has a stale value

    // we use setTimeout to check the input element value on the next loop
    // to make sure that the paste happened
    setTimeout(() => {
        checkInput(evt.target);
    }, 0);
});

btn.onclick = () => {
    const { value } = input;
    ga('send', 'event', 'main', 'startChat');
    // we use string interpolation to build
    // the url whatsapp recognize
    window.location = `https://wa.me/${value
        .replace(/^05/, '9665')
        .replace(/^\+/, '')}`;
};
