class VashiCheckout {
    constructor() {
        this.init()
    }

    init() {
        console.log('Vashi Checkout Prototype')
        this.bindLoginClick()
        this.loadingOverlay = document.querySelector('.loading-overlay');
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
                this.showAddressSection()
            })
            .catch(() => {
                this.hideLoadingSpinner()
                console.log('Login error')
            })
    }

    showLoadingSpinner() {
        this.loadingOverlay.classList.add('loading-overlay--active')
    }

    hideLoadingSpinner() {
        this.loadingOverlay.classList.remove('loading-overlay--active')
    }

    showAddressSection() {
        console.log('show address section')
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