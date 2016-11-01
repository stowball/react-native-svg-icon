'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNativeSvg = require('react-native-svg');

var _reactNativeSvg2 = _interopRequireDefault(_reactNativeSvg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIcon = function SvgIcon(props) {
    if (!props.name || !props.svgs[props.name]) {
        return null;
    }

    var isSimple = _react2.default.isValidElement(props.svgs[props.name]);
    var svgEl = isSimple ? props.svgs[props.name] : props.svgs[props.name].svg;
    var viewBox = props.viewBoxDefault;

    if (props.viewBox) {
        viewBox = props.viewBox;
    } else if (!isSimple && props.svgs[props.name].viewBox) {
        viewBox = props.svgs[props.name].viewBox;
    }

    return _react2.default.createElement(
        _reactNativeSvg2.default,
        { height: props.height, width: props.width, viewBox: viewBox },
        _react2.default.cloneElement(svgEl, { fill: props.fill })
    );
};

SvgIcon.defaultProps = {
    fill: '#000',
    height: '44',
    viewBoxDefault: '0 0 100 100',
    width: '44'
};

SvgIcon.propTypes = {
    fill: _react.PropTypes.string.isRequired,
    height: _react.PropTypes.string.isRequired,
    name: _react.PropTypes.string.isRequired,
    svgs: _react.PropTypes.object.isRequired,
    viewBox: _react.PropTypes.string,
    viewBoxDefault: _react.PropTypes.string.isRequired,
    width: _react.PropTypes.string.isRequired
};

exports.default = SvgIcon;