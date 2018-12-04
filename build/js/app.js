"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VashiCheckout =
/*#__PURE__*/
function () {
  function VashiCheckout() {
    _classCallCheck(this, VashiCheckout);

    this.init();
  }

  _createClass(VashiCheckout, [{
    key: "init",
    value: function init() {
      console.log('Vashi Checkout Prototype');
      this.bindLoginClick();
      this.loadingOverlay = document.querySelector('.loading-overlay');
    }
  }, {
    key: "bindLoginClick",
    value: function bindLoginClick() {
      var loginButton = document.querySelector('.login').querySelector('input[type="submit"]');
      loginButton.addEventListener('click', this.handleLogin.bind(this));
    }
  }, {
    key: "handleLogin",
    value: function handleLogin(e) {
      var _this = this;

      e.preventDefault();
      console.log('logging in...');
      this.showLoadingSpinner();
      this.timeout(1000).then(function () {
        _this.hideLoadingSpinner();

        _this.showAddressSection();
      });
    }
  }, {
    key: "showLoadingSpinner",
    value: function showLoadingSpinner() {
      console.log('show loader');
      this.loadingOverlay.classList.add('loading-overlay--active');
    }
  }, {
    key: "hideLoadingSpinner",
    value: function hideLoadingSpinner() {
      console.log('hide loader');
      this.loadingOverlay.classList.remove('loading-overlay--active');
    }
  }, {
    key: "showAddressSection",
    value: function showAddressSection() {
      console.log('show address section');
    }
    /**
     * Timeout for spoofing ajax reqs
     * 
     * @param {Number} ms 
     */

  }, {
    key: "timeout",
    value: function timeout(ms) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve();
        }, ms);
      });
    }
  }]);

  return VashiCheckout;
}();

new VashiCheckout();