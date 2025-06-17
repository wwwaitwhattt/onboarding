class FormsValidation {
    selectors = {
        form: '[data-js-form]',
        fieldErrors: '[data-js-form-field-errors]',
    }

    errorMessages = {
        valueMissing: () => 'поле не может быть пустым',
        patternMismatch: ({title}) => title || 'данные должны соответствовать формату',
        tooShort: ({minLength}) => `слишком мало символов - ${minLength}`,
        tooLong: ({maxLength}) => `слишком много символов - ${maxLength}`,
    }

    constructor(){
        this.bindEvents()
    }

    manageErrors(fieldElement, errorMessages) {
        const fieldErrorsElement = fieldElement.parentElement.querySelector(this.selectors.fieldErrors)
        
        fieldErrorsElement.innerHTML = errorMessages
        .map((message) => `<span class="field__error">${message}</span>`)
        .join('')
    }

    validate(fieldElement) {
        const errors = fieldElement.validity
        const errorMessages = []
        Object.entries(this.errorMessages).forEach(([errorType, getErrorMessage]) =>{
            if (errors[errorType]) {
                errorMessages.push(getErrorMessage(fieldElement))
            }
        })

        this.manageErrors(fieldElement, errorMessages)

        const isValid = errorMessages.length === 0
        fieldElement.ariaInvalid = !isValid

        return isValid
    }

    onBlur(event) {
        const {target} = event
        const isFormField = target.closest(this.selectors.form)
        const isRequired = target.required

        if (isFormField && isRequired) {
            this.validate(target)
        }
    }

    onChange(event) {
        const {target} = event
        const isRequired = target.required
        const isToggleType = ['radio', 'checkbox'].includes(target.type)

        if (isToggleType && isRequired) {
            this.validate(target)
        }
    }

    onSubmit(event) {
        const isFormEl = event.target.matches(this.selectors.form)

        if (!isFormEl) {
            return
        }

        const requiredElements = [...event.target.elements]
        .filter(({required}) => required)
        
        let isFormValid =true
        let firstInvalidFieldControl = null

        requiredElements.forEach((element) => {
            const isFieldValid = this.validate(element)

            if (!isFieldValid) {
                isFormValid = false
            }
            if (!firstInvalidFieldControl) {
                firstInvalidFieldControl = element
            }
        })

        if (!isFormValid) {
            event.preventDefault()
            firstInvalidFieldControl.focus()
        }
    }

    bindEvents(){
        document.addEventListener('blur', (event) => {
            this.onBlur(event)
        }, true)

        document.addEventListener('change', (event) => this.onChange(event))

        document.addEventListener('submit', (event) => this.onSubmit(event))
    }
}

new FormsValidation()