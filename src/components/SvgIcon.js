import React, { PropTypes } from 'react';
import Svg from 'react-native-svg';

const SvgIcon = (props) => {
    if (!props.name || !props.svgs[props.name]) {
        return null;
    }

    return (
        <Svg height={props.height} width={props.width} viewBox={props.viewBox}>
            {React.cloneElement(props.svgs[props.name], { fill: props.fill })}
        </Svg>
    );
};

SvgIcon.defaultProps = {
    fill: '#000',
    height: '44',
    width: '44',
    viewBox: '0 0 100 100'
};

SvgIcon.propTypes = {
    fill: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    svgs: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,
    viewBox: PropTypes.string.isRequired
};

export default SvgIcon;
