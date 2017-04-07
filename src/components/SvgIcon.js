import React, { PropTypes } from 'react';
import Svg from 'react-native-svg';

const SvgIcon = (props) => {
    if (!props.svgs[props.name]) {
        return null;
    }

    const height = props.height && props.height.toString();
    const width = props.width && props.width.toString();
    const strokeWidth = props.strokeWidth && props.strokeWidth.toString();

    const isSimple = React.isValidElement(props.svgs[props.name]);
    const svgEl = isSimple ? props.svgs[props.name] : props.svgs[props.name].svg;

    /**
     * ViewBox inheritance order:
     *
     * 1. <Icon viewBox />
     * 2. { Name: { viewBox: '' } }
     * 3. Icon.defaultProps.viewBox
     * 4. SvgIcon.defaultProps.viewBox
     */

    let viewBox;

    if (props.viewBox && props.viewBox !== SvgIcon.defaultProps.viewBox) {
        viewBox = props.viewBox;
    }
    else if (!isSimple && props.svgs[props.name].viewBox) {
        viewBox = props.svgs[props.name].viewBox;
    }
    else {
        viewBox = SvgIcon.defaultProps.viewBox;
    }

    return (
        <Svg height={height} testID="svg-icon" width={width} viewBox={viewBox}>
            {React.cloneElement(
                svgEl,
                {
                    fill: props.fill,
                    stroke: props.stroke,
                    strokeWidth: strokeWidth,
                    testID: 'svg-icon__cloned-element'
                }
            )}
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
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    svgs: PropTypes.object.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    viewBox: PropTypes.string
};

export default SvgIcon;
