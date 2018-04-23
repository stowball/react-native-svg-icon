'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _reactNativeSvg = require('react-native-svg');

var _reactNativeSvg2 = _interopRequireDefault(_reactNativeSvg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIcon = function SvgIcon(props) {
    if (!props.name) {
        return null;
    }

    var name = props.svgs[props.name + '.' + _reactNative.Platform.OS] || props.svgs[props.name];

    if (!name) {
        return null;
    }

    var height = props.height && props.height.toString();
    var width = props.width && props.width.toString();
    var strokeWidth = props.strokeWidth && props.strokeWidth.toString();

    var isSimple = _react2.default.isValidElement(name);
    var svgEl = isSimple ? name : name.svg;

    var viewBox = void 0;

    if (props.viewBox && props.viewBox !== SvgIcon.defaultProps.viewBox) {
        viewBox = props.viewBox;
    } else if (!isSimple && name.viewBox) {
        viewBox = name.viewBox;
    } else if (props.defaultViewBox) {
        viewBox = props.defaultViewBox;
    } else {
        viewBox = SvgIcon.defaultProps.viewBox;
    }

    return _react2.default.createElement(
        _reactNativeSvg2.default,
        { height: height, width: width, viewBox: viewBox, style: props.style },
        _react2.default.cloneElement(svgEl, {
            fill: props.fill,
            fillRule: props.fillRule,
            stroke: props.stroke,
            strokeWidth: strokeWidth
        })
    );
};

SvgIcon.defaultProps = {
    fill: '#000',
    fillRule: 'evenodd',
    height: '44',
    width: '44',
    viewBox: '0 0 100 100'
};

SvgIcon.propTypes = {
    fill: _propTypes2.default.string.isRequired,
    fillRule: _propTypes2.default.string,
    height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
    name: _propTypes2.default.string.isRequired,
    stroke: _propTypes2.default.string,
    strokeWidth: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    style: _propTypes2.default.oneOfType([_reactNative.ViewPropTypes.style, _propTypes2.default.array, _propTypes2.default.object]),
    svgs: _propTypes2.default.object.isRequired,
    width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
    viewBox: _propTypes2.default.string
};

exports.default = SvgIcon;