class VashiCheckout {
    constructor() {
        this.init()
    }

    init() {
        console.log('Vashi Checkout Prototype')
        this.loadingOverlay = document.querySelector('.loading-overlay')
        this.addressToggles = document.querySelectorAll('.input-different-shipping input[type="radio"]')
        this.bindLoginClick()
        this.bindAddressToggles()
    }

    bindLoginClick() {
        const loginButton = document.querySelector('.login').querySelector('input[type="submit"]')
        loginButton.addEventListener('click', this.handleLogin.bind(this))
    }

    handleLogin(e) {
        e.preventDefault();
        console.log('logging in...')
        this.showLoadingSpinner()
        this.timeout(1000)
            .then(() => {
                this.hideLoadingSpinner()
                this.showBillingAddressSection()
                this.scrollToSection('.address--billing')
            })
            .catch(() => {
                this.hideLoadingSpinner()
                console.log('Login error')
            })
    }

    bindAddressToggles() {
        this.addressToggles.forEach((radio) => {
            radio.addEventListener('change', (e) => {
                if (e.target.id === 'billing:use_different') {
                    this.showLoadingSpinner()
                    this.timeout(1000)
                    .then(() => {
                        this.hideLoadingSpinner()
                        this.showShippingAddressSection()
                        this.scrollToSection('.address--shipping')
                    })
                    .catch(() => {
                        this.hideLoadingSpinner()
                        console.log('Shipping address error')
                    })
                } else {
                    this.hideShippingAddressSection()
                }
            })
        })
    }

    showLoadingSpinner() {
        this.loadingOverlay.classList.add('loading-overlay--active')
    }

    hideLoadingSpinner() {
        this.loadingOverlay.classList.remove('loading-overlay--active')
    }

    showBillingAddressSection() {
        document.querySelector('.address--billing').classList.remove('address--disabled')
    }

    scrollToSection(el) {
        document.querySelector(el).scrollIntoView({block: 'start', behavior: 'smooth'})
    }

    showShippingAddressSection() {
        document.querySelector('.address--shipping').classList.remove('address--hidden')
        document.querySelector('.address--shipping').classList.remove('address--disabled')
    }

    hideShippingAddressSection() {
        document.querySelector('.address--shipping').classList.add('address--hidden')
    }

    /**
     * Timeout for spoofing ajax reqs
     * 
     * @param {Number} ms 
     */
    timeout(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, ms)
        })
    }
}

new VashiCheckout()