import React from 'react';

export const simpleSvg = <div />;
export const complexSvg = {
    svg: simpleSvg,
    viewBox: '1 2 3 4'
};
export const validSvgIcon = {
    name: 'test',
    svgs: {
        test: simpleSvg
    }
};
