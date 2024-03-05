const errorIcon = document.querySelector('#error-icon');
const state = document.querySelector('#status');
const btn = document.querySelector('button');
const input = document.querySelector('input');

const pattern = {
    mail: /^([a-z\d-]+)@([a-z]{2,10})\.([a-z]{2,8})$/i
};

// validate
function validate(field, regex) {
    if (regex.test(field.value)){
        state.classList.add('hidden');
        errorIcon.classList.add('invisible')
    } else {
        errorIcon.classList.remove('invisible');
        state.classList.remove('hidden');
    }
};


input.addEventListener('keyup', (e) => {
    validate(e.target, pattern[e.target.attributes.name.value])
});

