class FormsValidation {
    selectors = {
        form: '[data-js-form]',
        fieldErrors: '[data-js-form-field-errors]',
    }

    constructor(){
        this.bindEvents()
    }

    validate(fieldElement) {
        const errors = fieldElement.validity

        console.log(errors)
    }

    onBlur(event) {
        const {target} = event
        const isFormField = target.closest(this.selectors.form)
        const isRequired = target.required

        if (isFormField && isRequired) {
            this.validate(target)
        }
    }

    bindEvents(){
        document.addEventListener('blur', (event) => {
            this.onBlur(event)
        }, true)
    }
}

new FormsValidation()