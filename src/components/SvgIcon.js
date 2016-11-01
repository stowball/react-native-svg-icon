import React, { PropTypes } from 'react';
import Svg from 'react-native-svg';

const defaultViewBox = '0 0 100 100';

const SvgIcon = (props) => {
    if (!props.name || !props.svgs[props.name]) {
        return null;
    }

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
        <Svg height={props.height} width={props.width} viewBox={viewBox}>
            {React.cloneElement(svgEl, { fill: props.fill })}
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
    height: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    svgs: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,
    viewBox: PropTypes.string
};

export default SvgIcon;
