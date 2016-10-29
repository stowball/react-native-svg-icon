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

    return _react2.default.createElement(
        _reactNativeSvg2.default,
        { height: props.height, width: props.width, viewBox: props.viewBox },
        _react2.default.cloneElement(props.svgs[props.name], { fill: props.fill })
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
    height: _react.PropTypes.string.isRequired,
    name: _react.PropTypes.string.isRequired,
    svgs: _react.PropTypes.object.isRequired,
    width: _react.PropTypes.string.isRequired,
    viewBox: _react.PropTypes.string.isRequired
};

exports.default = SvgIcon;