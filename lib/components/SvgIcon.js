'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactNativeSvg = require('react-native-svg');

var _reactNativeSvg2 = _interopRequireDefault(_reactNativeSvg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultViewBox = '0 0 100 100';

var SvgIcon = function SvgIcon(props) {
    if (!props.name || !props.svgs[props.name]) {
        return null;
    }

    var height = props.height && props.height.toString();
    var width = props.width && props.width.toString();
    var strokeWidth = props.strokeWidth && props.strokeWidth.toString();

    var isSimple = _react2.default.isValidElement(props.svgs[props.name]);
    var svgEl = isSimple ? props.svgs[props.name] : props.svgs[props.name].svg;

    var viewBox = defaultViewBox;

    if (props.viewBox) {
        viewBox = props.viewBox;
    } else if (!isSimple && props.svgs[props.name].viewBox) {
        viewBox = props.svgs[props.name].viewBox;
    }

    return _react2.default.createElement(
        _reactNativeSvg2.default,
        { height: height, width: width, viewBox: viewBox },
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
    width: '44'
};

SvgIcon.propTypes = {
    fill: _propTypes2.default.string.isRequired,
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    name: _propTypes2.default.string.isRequired,
    stroke: _propTypes2.default.string,
    strokeWidth: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    svgs: _propTypes2.default.object.isRequired,
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    viewBox: _propTypes2.default.string
};

exports.default = SvgIcon;