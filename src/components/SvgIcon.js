import React from 'react';
import PropTypes from 'prop-types';  
import Svg from 'react-native-svg';

const defaultViewBox = '0 0 100 100';

const SvgIcon = (props) => {
    if (!props.name || !props.svgs[props.name]) {
        return null;
    }

    const height = props.height && props.height.toString();
    const width = props.width && props.width.toString();
    const strokeWidth = props.strokeWidth && props.strokeWidth.toString();

    const isSimple = React.isValidElement(props.svgs[props.name]);
    const svgEl = isSimple ? props.svgs[props.name] : props.svgs[props.name].svg;

    let viewBox = defaultViewBox;

    if (props.viewBox) {
        viewBox = props.viewBox;
    }
    else if (!isSimple && props.svgs[props.name].viewBox) {
        viewBox = props.svgs[props.name].viewBox;
    }

    return (
        <Svg height={height} width={width} viewBox={viewBox}>
            {React.cloneElement(svgEl, {
                fill: props.fill,
                stroke: props.stroke,
                strokeWidth: strokeWidth
            })}
        </Svg>
    );
};

SvgIcon.defaultProps = {
    fill: '#000',
    height: '44',
    width: '44'
};

SvgIcon.propTypes = {
    fill: PropTypes.string.isRequired,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    svgs: PropTypes.object.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    viewBox: PropTypes.string
};

export default SvgIcon;
