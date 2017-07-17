import React from 'react';
import { shallow, mount } from 'enzyme';
import {expect} from 'chai';

import Index from '/react/src/js/index';
import ValidationFailure from '/react/src/js/components/ValidationFailure';


describe('<ValidationFailure />', function () {
    const rjvId = 1;

    it('ValidationFailure should be on page when active', function () {
        const wrapper = shallow(
            <ValidationFailure
            active={true}
            theme='rjv-default'
            rjvId={rjvId}
            />
        );
        expect(
            wrapper.find('.validation-failure').length
        ).to.equal(1);
    });

    it('ValidationFailure should not be on page when inactive', function () {
        const wrapper = shallow(
            <ValidationFailure
            active={false}
            theme='rjv-default'
            rjvId={rjvId}
            />
        );
        expect(
            wrapper.find('.validation-failure').length
        ).to.equal(0);
    });

    it('ValidationFailure touch click event', function () {
        const wrapper = mount(
            <ValidationFailure
            active={true}
            theme='rjv-default'
            rjvId={rjvId}
            />
        );
        expect(
            wrapper.find('.validation-failure').length
        ).to.equal(1);

        wrapper.find('.validation-failure').simulate('click');
    });

});