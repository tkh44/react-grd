import { DOM, PropTypes } from 'react';


const { div } = DOM;
const merge = (...args) => Object.assign({}, ...args);

const gridStyles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap'
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

    const styles = merge(gridStyles.base, gridStyles.justify[props.justify], gridStyles.align[props.align], props.style);
    return div(merge(props, { style: styles }), props.children);
};

Grid.propTypes = {
    children: PropTypes.any,
    align: PropTypes.oneOf(Object.keys(gridStyles.align)),
    justify: PropTypes.oneOf(Object.keys(gridStyles.justify))
};

Grid.defaultProps = {
    align: 'top',
    justify: 'left'
};

const cellStyles = {
    base:   { boxSizing: 'border-box', flexShrink: '0' },
    fill:   { width: 0, minWidth: 0, flexGrow: 1 },
    one:    { width: 'calc(100% * 1 / 12)' },
    two:    { width: 'calc(100% * 2 / 12)' },
    three:  { width: 'calc(100% * 3 / 12)' },
    four:   { width: 'calc(100% * 4 / 12)' },
    five:   { width: 'calc(100% * 5 / 12)' },
    six:    { width: 'calc(100% * 6 / 12)' },
    seven:  { width: 'calc(100% * 7 / 12)' },
    eight:  { width: 'calc(100% * 8 / 12)' },
    nine:   { width: 'calc(100% * 9 / 12)' },
    ten:    { width: 'calc(100% * 10 / 12)' },
    eleven: { width: 'calc(100% * 11 / 12)' },
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
