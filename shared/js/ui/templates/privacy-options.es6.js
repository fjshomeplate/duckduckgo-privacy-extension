const bel = require('bel')
const toggleButton = require('./shared/toggle-button.es6.js')

module.exports = function () {
    return bel`<section class="options-content__privacy divider-bottom">
    <h2 class="menu-title">Options</h2>
    <ul class="default-list">
        <li>
            Show Embedded Tweets
            ${toggleButton(this.model.embeddedTweetsEnabled,
        'js-options-embedded-tweets-enabled',
        'embeddedTweetsEnabled')}
        </li>
    </ul>
</section>`
}
