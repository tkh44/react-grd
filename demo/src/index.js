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
        fontSize: 14,
        height: 34,
        padding: 5,
        width: 120,
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
            createElement(Demo),
            div({ dangerouslySetInnerHTML: { __html: '<a href="https://github.com/tkh44/react-grd" class="github-corner"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>' } })
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

const dirOptions = [
    'row',
    'column'
].map((opt) => option({ key: opt, value: opt }, `${opt}`));


class Demo extends Component {

    constructor(props) {

        super(props);

        this.state = {
            items: [],
            gridAlignType: 'top',
            gridJustifyType: 'left',
            gridDirType: 'row'
        };
    }

    render() {

        const { gridJustifyType, gridAlignType, gridDirType, items } = this.state;

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
                    onChange: (e) => (this.setState({ gridDirType: e.target.value }))
                }, dirOptions),
                select({
                    style: styles.control,
                    onChange: (e) => (this.setState({ gridAlignType: e.target.value }))
                }, alignOptions),
                select({
                    style: styles.control,
                    onChange: (e) => (this.setState({ gridJustifyType: e.target.value }))
                }, justifyOptions)
            ),
            createElement(Grid, {
                style: styles.grid,
                justify: gridJustifyType,
                align: gridAlignType,
                dir: gridDirType
            },
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
