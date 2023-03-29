import { createElement } from 'lwc';
import SearchBox from 'c/searchBox';

//create a unit test to test the searchBox component
describe('c-search-box', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('displays contacts', () => {
        // Create initial element
        const element = createElement('c-search-box', {
            is: SearchBox
        });
        document.body.appendChild(element);

        // Select elements for validation
        const inputElement = element.shadowRoot.querySelector('lightning-input');
        expect(inputElement).not.toBeNull();
    });
});
