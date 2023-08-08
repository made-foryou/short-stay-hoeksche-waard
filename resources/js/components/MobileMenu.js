export default class MobileMenu {
    /**
     * @param {HTMLElement} element
     */
    constructor(element) {
        /**
         * @type {HTMLElement}
         * @private
         */
        this._element = element;

        /**
         * @type {Element}
         * @private
         */
        this._backdrop = this._element.querySelector('[data-element="backdrop"]');

        /**
         * @type {NodeListOf<Element>}
         * @private
         */
        this._triggers = document.querySelectorAll('[data-trigger="mobile-menu"]');

        /**
         * @type {boolean}
         * @private
         */
        this._show = !(this._element.classList.contains('hidden'));

        for (const trigger of this._triggers) {
            trigger.addEventListener('click', () => {
                console.log('show', this._show);

                if (this._show) {
                    this.hide();
                } else {
                    this.show();
                }
            });
        }
    }

    show() {
        this._show = true;

        this._element.classList.remove('hidden');
        this._backdrop.classList.remove('hidden');
    }

    hide() {
        this._show = false;

        this._element.classList.add('hidden');
        this._backdrop.classList.add('hidden');
    }
}
