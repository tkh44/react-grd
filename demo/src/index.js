import './style.css';
import 'highlight.js/styles/github-gist.css';
import { Component, createElement, DOM } from 'react';
import { render } from 'react-dom';
import Highlight from 'react-highlight';
import { Grid, Cell } from '../../src';

const { div, select, option, button, a, h2, p } = DOM;

const styles = {
    logo: {
        width: '100%',
        maxWidth: 320
    },
    container: {
        fontFamily: '"Roboto", sans-serif',
        margin: 'auto',
        maxWidth: 960
    },
    highlight: {
        border: '1px solid rgba(62, 127, 182, 0.87)',
        borderRadius: 3,
        padding: 5,
        fontFamily: '"Roboto Mono", monospace'
    },
    control: {
        background: 'rgba(84, 24, 164, 1)',
        color: 'rgb(255, 255, 255)',
        border: '1px solid rgba(62, 127, 182, 1)',
        fontSize: 16,
        height: 34,
        padding: 5,
        width: 180,
        borderRadius: 3,
        boxShadow: 'none',
        margin: 8,
        cursor: 'pointer'
    },
    grid: {
        marginTop: 16,
        marginBottom: 16,
        padding: 8,
        minHeight: 200,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ccc'
    },
    cell: {
        padding: '1rem',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'rgba(72, 46, 160, 0.87)',
        animation: '1s ease-in forwards cell-bg',
        WebkitAnimation: '400ms cubic-bezier(0.000, 0.405, 0.000, 1.285) forwards cell-bg',
        transition: 'all 200ms cubic-bezier(0.000, 0.405, 0.000, 1.285)',
        WebkitTransition: 'all 200ms cubic-bezier(0.000, 0.405, 0.000, 1.285)'
    },
    cellControl: {
        width: '100%',
        maxWidth: 180,
        minWidth: 560 / 12,
        background: '#f8f8f8',
        color: 'rgba(84, 24, 164, 1)',
        border: '1px solid rgba(84, 24, 164, 1)'
    }
};

const exampleUsageString = `// Example Usage
<Grid align='baseline' justify='left'>
    <Cell size='two'/>
    <Cell size='fill'/>
    <Cell size='seven'/>
</Grid>`;

class App extends Component {

    render() {

        return div({ style: styles.container },
            p(null, 'React components for making working with flexbox simple.'),
            p(null, 'Based on and using styles from ', a({ href: 'https://github.com/1000ch/grd' }, 'grd'), ' by ', a({ href: 'https://github.com/1000ch' }, '1000ch'), '.'),
            createElement(Grid, { style: styles.highlight, align: 'middle' },
                createElement(Highlight, null, exampleUsageString)
            ),
            createElement(Demo)
        );
    }
}

const alignOptions = [
    'top',
    'middle',
    'bottom',
    'stretch',
    'baseline'
].map((opt) => option({ key: opt, value: opt }, `${opt}`));

const justifyOptions = [
    'left',
    'center',
    'right',
    'between',
    'around'
].map((opt) => option({ key: opt, value: opt }, `${opt}`));


class Demo extends Component {

    constructor(props) {

        super(props);

        this.state = {
            items: [],
            gridAlignType: 'top',
            gridJustifyType: 'left'
        };
    }

    render() {

        const { gridJustifyType, gridAlignType, items } = this.state;
        return div(null,
            h2('Live Demo'),
            createElement(Grid, { justify: 'center', align: 'middle' },
                button({
                    style: styles.control,
                    onClick: this.addItem.bind(this)
                }, 'Add Item'),
                button({
                    style: styles.control,
                    onClick: this.removeItem.bind(this)
                }, 'Remove Item'),
                select({
                    style: styles.control,
                    onChange: (e) => (this.setState({ gridAlignType: e.target.value }))
                }, alignOptions),
                select({
                    style: styles.control,
                    onChange: (e) => (this.setState({ gridJustifyType: e.target.value }))
                }, justifyOptions)
            ),
            createElement(Grid, { style: styles.grid, justify: gridJustifyType, align: gridAlignType },
                items.map((item, i) => {

                    return createElement(DemoCell, {
                        key: i,
                        size: item.size,
                        changeType: this.changeType.bind(this, i)
                    });
                })
            )
        );
    }

    addItem() {

        this.setState({
            items: this.state.items.concat({
                size: 'fill'
            })
        });
    }

    removeItem() {

        this.setState({
            items: this.state.items.slice(0, -1)
        });
    }

    changeType(idx, e) {

        const clone = this.state.items.slice(0);
        clone[idx].size = e.target.value;

        this.setState({
            items: clone
        });
    }
}


const cellOptions = ['fill', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

const DemoCell = ({ size, changeType }) => {

    return createElement(Cell, {
        style: styles.cell,
        size
    },
        createElement(Grid, { align: 'middle', justify: 'center' },
            select({ style: Object.assign({}, styles.control, styles.cellControl), value: size, onChange: changeType },
                cellOptions.map((opt) => option({ key: opt, value: opt }, `${opt}`))
            )
        )
    );
};

render(createElement(App), document.querySelector('#demo'));
