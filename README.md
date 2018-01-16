# Stylus grid constructor
CSS grid constructor, written in stylus. Has two versions - flex and float.
Inspired by Bootstrap grid.

## Using
```bash
npm i stylus-grid-constructor
```
after that add ```src/grid-flex.styl``` or ```src/grid.styl``` to your project and call something like this
```stylus
grid(12)
```
or
```stylus
grid-flex(12, 15px)
```
default settings
```stylus
$default-amount = 12 // Amount of columns
$default-padding = 15px // Padding between columns
$default-suffixes = 'col-xs', 'col-sm', 'col-md', 'col-lg', 'col-xl' // List of prefixes for responsive grid
$default-breakpoints = 544px, 768px, 992px, 1200px // breakpoints for responsive grids
$default-row-postfix = '' // prefix for row
```
or your own settings
```stylus
$my-suffixes = 'col-xs', 'col-sm', 'col-md', 'col-lg', 'col-xl'
$my-breakpoints = 544px, 768px, 992px, 1200px
grid-flex(12, 15px, $my-suffixes, $my-breakpoints)
```

## Contributing

```bash
npm i
npm start
```
Use ```npm run build``` to make a build
