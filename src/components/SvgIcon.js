import React, { PropTypes } from 'react';
import Svg from 'react-native-svg';

const SvgIcon = (props) => {
    if (!props.name || !props.svgs[props.name]) {
        return null;
    }

    const isSimple = React.isValidElement(props.svgs[props.name]);
    const svgEl = isSimple ? props.svgs[props.name] : props.svgs[props.name].svg;
    let viewBox = props.viewBoxDefault;

    if (props.viewBox) {
        viewBox = props.viewBox;
    }
    else if (!isSimple && props.svgs[props.name].viewBox) {
        viewBox = props.svgs[props.name].viewBox;
    }

    return (
        <Svg height={props.height} width={props.width} viewBox={viewBox}>
            {React.cloneElement(svgEl, { fill: props.fill })}
        </Svg>
    );
};

SvgIcon.defaultProps = {
    fill: '#000',
    height: '44',
    viewBoxDefault: '0 0 100 100',
    width: '44'
};

SvgIcon.propTypes = {
    fill: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    svgs: PropTypes.object.isRequired,
    viewBox: PropTypes.string,
    viewBoxDefault: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired
};

export default SvgIcon;
