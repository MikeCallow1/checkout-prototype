class VashiCheckout {
    constructor() {
        this.init()
    }

    init() {
        console.log('Vashi Checkout Prototype')
        this.loadingOverlay = document.querySelector('.loading-overlay')
        this.addressToggles = document.querySelectorAll('.input-different-shipping input[type="radio"]')
        this.bindAddressToggles()
        this.initTabs()
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

    initTabs() {
        const tabs = document.querySelectorAll('.tabs')

        tabs.forEach((tab) => {
            let tabButton = tab.querySelectorAll('.tab')
            tabButton.forEach((tab, i) => {
                tab.addEventListener('click', (e) => {
                    e.preventDefault()
                    setInactivePanels()
                    setActivePanel(i, tab)
                })
            })

            function setInactivePanels() {
                let tabButton = tab.querySelectorAll('.tab')
                tabButton.forEach((button) => {
                    button.classList.remove('tab--active')
                })

                let tabContent = tab.querySelectorAll('.tab__content')
                tabContent.forEach((tab) => {
                    tab.classList.remove('tab__content--active')
                })
            }

            function setActivePanel(i, tabButton) {
                let tabContent = tab.querySelectorAll('.tab__content')
                tabContent[i].classList.add('tab__content--active')
                tabButton.classList.add('tab--active')
            }
        })
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