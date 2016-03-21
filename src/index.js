import { DOM, PropTypes } from 'react';

const { div } = DOM;


const gridModifiers = {
    top:      { alignItems: 'flex-start' },
    middle:   { alignItems: 'center' },
    bottom:   { alignItems: 'flex-end' },
    stretch:  { alignItems: 'stretch' },
    baseline: { alignItems: 'baseline' },
    left:     { justifyContent: 'flex-start' },
    center:   { justifyContent: 'center' },
    right:    { justifyContent: 'flex-end' },
    between:  { justifyContent: 'space-between' },
    around:   { justifyContent: 'space-around' }
};

export const Grid = (props) => {

    const styles = Object.assign(
        {},
        props.style,
        { display: 'flex', flexWrap: 'wrap' },
        gridModifiers[props.grid]
    );

    return div({ style: styles }, props.children);
};

Grid.propTypes = {
    children: PropTypes.any,
    grid: PropTypes.oneOf(Object.keys(gridModifiers))
};

const cellModifiers = {
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

    const styles = Object.assign(
        {},
        props.style,
        { boxSizing: 'border-box', flexShrink: '0' },
        cellModifiers[props.cell]
    );

    return div({ style: styles }, props.children);
};

Cell.propTypes = {
    children: PropTypes.any,
    cell: PropTypes.oneOf(Object.keys(cellModifiers))
};
