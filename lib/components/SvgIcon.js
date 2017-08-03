'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
            stroke: props.stroke,
            strokeWidth: strokeWidth
        })
    );
};

SvgIcon.defaultProps = {
    fill: '#000',
    height: '44',
    width: '44',
    viewBox: '0 0 100 100'
};

SvgIcon.propTypes = {
    fill: _react.PropTypes.string.isRequired,
    height: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired,
    name: _react.PropTypes.string.isRequired,
    stroke: _react.PropTypes.string,
    strokeWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    style: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]),
    svgs: _react.PropTypes.object.isRequired,
    width: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired,
    viewBox: _react.PropTypes.string
};

exports.default = SvgIcon;