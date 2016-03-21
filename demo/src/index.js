import { Component, createElement, DOM } from 'react';
import { render } from 'react-dom';
import { Grid, Cell } from '../../src';

const { div, select, option, button, ul, li, h1, h2, p, img, strong, code } = DOM;

class App extends Component {

    render() {

        return div({ style: styles.container },
            h1(null, img({ src: 'http://1000ch.github.io/grd/logo.png', alt: 'grd' })),
            p(null, 'A CSS grid framework using Flexbox.'),
            ul(null,
                li(null,
                    strong(null, 'Simple'),
                    ': Provides just 2 base classes ',
                    code(null, 'Grid'),
                    ' and ',
                    code(null, 'Cell'),
                    ' and some modifiers.'
                ),
                li(null, strong(null, 'Flexible'), 'Only 512 bytes (Gzipped).'),
                li(null, strong(null, 'Flexible'), ': Easy to use Flexbox features.')
            ),
            createElement(Demo)
        );
    }
}

const alignOptions = [
    '',
    'top',
    'middle',
    'bottom',
    'stretch',
    'baseline'
];

const justifyOptions = [
    '',
    'left',
    'center',
    'right',
    'between',
    'around'
];

const cellOptions = [
    'fill',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve'
];

class Demo extends Component {

    constructor(props) {

        super(props);

        this.state = {
            items: [],
            gridType: ''
        };
    }

    render() {

        const { gridType, items } = this.state;

        return div(null,
            h2('Live Demo'),
            button({
                className: 'btn',
                onClick: this.addItem.bind(this)
            }, 'Add Item'),
            button({
                className: 'btn',
                onClick: this.removeItem.bind(this)
            }, 'Remove Item'),
            select({
                className: 'select-sm',
                onChange: this.onGridChange.bind(this)
            },
                alignOptions.map((opt) => option({ key: opt, value: opt }, `-${opt}`))
            ),
            select({
                className: 'select-sm',
                onChange: this.onGridChange.bind(this)
            },
                justifyOptions.map((opt) => option({ key: opt, value: opt }, `-${opt}`))
            ),
            createElement(Grid, { style: styles.grid, grid: gridType },
                items.map((item, i) => {

                    return createElement(DemoCell, {
                        key: i,
                        type: item.type,
                        changeType: this.changeType.bind(this, i)
                    });
                })
            )
        );
    }

    addItem(e) {

        this.setState({
            items: this.state.items.concat({
                type: ''
            })
        });
    }

    removeItem(e) {

        this.setState({
            items: this.state.items.slice(0, -1)
        });
    }

    onGridChange(e) {

        console.log('onGridChange', e);
        this.setState({ gridType: e.target.value });
    }

    changeType(idx, e) {

        const clone = this.state.items.slice(0);
        clone[idx].type = e.target.value;

        this.setState({
            items: clone
        });
    }
}

class DemoCell extends Component {

    render() {

        const { type, changeType } = this.props;

        return createElement(Cell, {
            style: styles.cell,
            cell: type
        },
            select({ className: 'select-sm', onChange: changeType },
                cellOptions.map((opt) => option({ key: opt, value: opt }, `-${opt}`))
            )
        );
    }
}

const styles = {
    html: {
        fontFamily: '"Roboto", sans-serif'
    },
    logo: {
        width: '100%',
        maxWidth: 480
    },
    container: {
        margin: 'auto',
        maxWidth: 960
    },
    code: {
        color: '#333',
        background: '#f8f8f8',
        fontFamily: '"Roboto Mono", monospace'
    },
    grid: {
        margin: '1rem',
        padding: '1rem',
        minHeight: 200,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ccc'
    },
    cell: {
        padding: '1rem',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#ccc'
    }
};

render(createElement(App), document.querySelector('#demo'));
