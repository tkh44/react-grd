# react-grd


React components for making working with flexbox simple.

Based on and using styles from [grd](https://github.com/1000ch/grd) by [1000ch](https://github.com/1000ch).

----

## Install


```
npm install react-grd --save
```

## Examples

```jsx
<Grid align='middle' justify='center'>
    <Cell size='two'/>
    <Cell size='fill'/>
    <Cell size='seven'/>
</Grid>
```
You don't need to use the Cell component if you you are just wanting to do basic alignment.

```jsx
<Grid align='middle' justify='center'>
    <div>This will behave according to Grid's props</div>
    <div>This will behave according to Grid's props</div>
    <div>This will behave according to Grid's props</div>
</Grid>
```


[npm-badge]: https://img.shields.io/npm/v/npm-package.svg?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
