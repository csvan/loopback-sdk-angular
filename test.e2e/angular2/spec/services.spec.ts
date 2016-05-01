
import {
    TestComponentBuilder,
    describe,
    expect,
    inject,
    it,
    beforeEachProviders
} from 'angular2/testing';
import {Component, provide} from 'angular2/core';
import {DirectiveResolver} from 'angular2/compiler';

import {DOM} from 'angular2/src/platform/dom/dom_adapter';

export function main() {

    describe('App component', () => {

        it('should work',
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
              expect(1).toEqual(1);
            })); 
    });
}

@Component({
    selector: 'test-cmp',
    template: '<sd-app></sd-app>',
})
class TestComponent {
}
