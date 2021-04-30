// class Validator {

//     constructor() {

//         this.validations = [
//             'data-min-length',
//         ];

//     }

//     validate(form) {
//         let currentValidations = document.querySelectorAll('form .error-validation');
//         if (currentValidations.length > 0) {
//             this.cleanValidations(currentValidations);
//         }
//         let inputs = form.getElementsByTagName('input');
//         let inputsArray = [...inputs];
//         inputsArray.forEach(input => {
//             for (let i = 0; i < this.validations.length; i++) {
//                 if (input.getAttribute(this.validations) != null) {
//                     let renamedDML = this.validations[i].replace('data-', '').replace('-', '');
//                     let value = input.getAttribute(this.validations[i]);
//                     this[renamedDML](input, value);
//                 }
//             }
//         }, this)
//     }

//     minlength(input, minValue) {
//         let inputLength = input.value.length;
//         let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;
//         if (inputLength < minValue) {
//             this.printError(input, errorMessage);
//         }
//     }

//     printError(input, message) {
//         let template = document.querySelector('.error-validation').cloneNode(true);
//         template.textContent = message;
//         let inputParent = input.parentNode;
//         template.classList.remove('template');
//         inputParent.appendChild(template);
//     }

//     cleanValidations(validations) {
//         validations.forEach(el => el.remove());
//     }
// }

// let formRegister = document.getElementById('form-register');
// let submit = document.getElementById('btn-submit');
// let validator = new Validator();

// submit.addEventListener('click', e => {
//     e.preventDefault();

//     validator.validate(formRegister);
// });

let users = [];
let user = {};

// BOOTSTRAP
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    event.preventDefault();
                    user.username = document.querySelector('.username').value;
                    user.useremail = document.querySelector('.useremail').value;
                    user.gender = document.querySelector('.gender').value;
                    user.birthdate = document.querySelector('.dbirth').value;
                    user.cpf = document.querySelector('.cpf').value;
                    user.cnh = document.querySelector('.cnh').value;
                    user.password = document.querySelector('.password').value;
                    console.log(user);
                    users.push(user);
                }
                form.classList.add('was-validated')
            }, false)
        })
})()

export default users;