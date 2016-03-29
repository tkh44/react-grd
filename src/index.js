import { DOM, PropTypes } from 'react';


const { div } = DOM;
const merge = (...args) => Object.assign({}, ...args);

const gridStyles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    dir: {
        row:      { flexDirection: 'row' },
        column:   { flexDirection: 'column' }
    },
    align: {
        top:      { alignItems: 'flex-start' },
        middle:   { alignItems: 'center' },
        bottom:   { alignItems: 'flex-end' },
        stretch:  { alignItems: 'stretch' },
        baseline: { alignItems: 'baseline' }
    },
    justify: {
        left:     { justifyContent: 'flex-start' },
        center:   { justifyContent: 'center' },
        right:    { justifyContent: 'flex-end' },
        between:  { justifyContent: 'space-between' },
        around:   { justifyContent: 'space-around' }
    }
};

export const Grid = (props) => {

    const styles = merge(
        gridStyles.base,
        gridStyles.justify[props.justify],
        gridStyles.align[props.align],
        gridStyles.dir[props.dir],
        props.style
    );
    return div(merge(props, { style: styles }), props.children);
};

Grid.propTypes = {
    children: PropTypes.any,
    align: PropTypes.oneOf(Object.keys(gridStyles.align)),
    justify: PropTypes.oneOf(Object.keys(gridStyles.justify)),
    dir: PropTypes.oneOf(Object.keys(gridStyles.dir))
};

Grid.defaultProps = {
    align: 'top',
    justify: 'left',
    dir: 'row'
};

const generateCalc = (dividend, divisor = 12) => `calc(100% * ${dividend} / ${divisor})`;

const cellStyles = {
    base:   { boxSizing: 'border-box', flexShrink: '0' },
    fill:   { width: 0, minWidth: 0, flexGrow: 1 },
    one:    { width: generateCalc(1, 12) },
    two:    { width: generateCalc(2, 12) },
    three:  { width: generateCalc(3, 12) },
    four:   { width: generateCalc(4, 12) },
    five:   { width: generateCalc(5, 12) },
    six:    { width: generateCalc(6, 12) },
    seven:  { width: generateCalc(7, 12) },
    eight:  { width: generateCalc(8, 12) },
    nine:   { width: generateCalc(9, 12) },
    ten:    { width: generateCalc(10, 12) },
    eleven: { width: generateCalc(11, 12) },
    twelve: { width: '100%' }
};

export const Cell = (props) => {

    const styles = merge(cellStyles.base, cellStyles[props.size], props.style);

    return div(merge(props, { style: styles }), props.children);
};

Cell.propTypes = {
    children: PropTypes.any,
    size: PropTypes.oneOf(Object.keys(cellStyles))
};

Cell.defaultProps = {
    size: 'fill'
};
