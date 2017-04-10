jest.mock('react-native-svg', () => ({
    Svg: jest.fn()
}));

import React from 'react';
import { shallow } from 'enzyme';
import SvgIcon from '../SvgIcon';
import * as fixtures from './SvgIcon.fixture';

describe('<SvgIcon />', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<SvgIcon {...fixtures.validSvgIcon} />);

        expect(wrapper).toHaveLength(1);
    });
    it('should return null if a property with the given name is not found', () => {
        const wrapper = shallow(<SvgIcon {...fixtures.validSvgIcon} svgs={{}} />);

        expect(wrapper.type()).toBeNull();
    });
    it('should render only one child', () => {
        const wrapper = shallow(<SvgIcon {...fixtures.validSvgIcon} />);

        expect(wrapper.children()).toHaveLength(1);
    });
    ['height', 'width', 'viewBox'].forEach(prop => {
        it(`should render an Svg with the given ${prop}`, () => {
            const wrapper = shallow(<SvgIcon {...fixtures.validSvgIcon} {...{[prop]: '1234'}} />);

            expect(wrapper.find({ testID: 'svg-icon' }).prop(prop)).toEqual('1234');
        });
    });
    it('should render the cloned svg element as a child of the svg', () => {
        const wrapper = shallow(<SvgIcon {...fixtures.validSvgIcon} />);

        expect(wrapper.children().is({ testID: 'svg-icon__cloned-element' })).toBe(true);
    });
    it('should clone the correct svg markup for the given name', () => {
        const cloneElementSpy = jest.spyOn(React, 'cloneElement');

        shallow(<SvgIcon {...fixtures.validSvgIcon} />);
        expect(cloneElementSpy.mock.calls[0][0]).toEqual(fixtures.simpleSvg);
        cloneElementSpy.mockRestore();
    });
    ['fill', 'stroke', 'strokeWidth'].forEach(prop => {
        it(`should render the svg element with the given ${prop}`, () => {
            const wrapper = shallow(<SvgIcon {...fixtures.validSvgIcon} {...{[prop]: '1234'}} />);

            expect(wrapper.find({ testID: 'svg-icon__cloned-element' }).prop(prop)).toEqual('1234');
        });
    });
    it('should use the viewBox from the svg config if set', () => {
        const wrapper = shallow(<SvgIcon {...fixtures.validSvgIcon} svgs={{ test: fixtures.complexSvg }} />);

        expect(wrapper.find({ testID: 'svg-icon' }).prop('viewBox')).toEqual(fixtures.complexSvg.viewBox);
    });
    it('should give priority to the svg config viewBox over the defaultProps viewBox', () => {
        SvgIcon.defaultProps.viewBox = '0 0 0 1';

        const wrapper = shallow(<SvgIcon {...fixtures.validSvgIcon} svgs={{ test: fixtures.complexSvg }} />);

        expect(wrapper.find({ testID: 'svg-icon' }).prop('viewBox')).toEqual(fixtures.complexSvg.viewBox);
    });
    it('should give priority to the viewBox prop over the svg config viewBox', () => {
        const wrapper = shallow(<SvgIcon {...fixtures.validSvgIcon} svgs={{ test: fixtures.complexSvg }} viewBox="4 3 2 1" />);

        expect(wrapper.find({ testID: 'svg-icon' }).prop('viewBox')).toEqual('4 3 2 1');
    });
});
