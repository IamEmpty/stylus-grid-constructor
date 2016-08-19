# Stylus grid constructor
CSS grid constructor, written in stylus

## Using
```
bower install stylus-grid-constructor --save
```
after that add src/grid-constructor.styl in your project and call something like this
```stylus
grid-constructor(12)
```
or
```stylus
grid-constructor(12, 15px)
```
default settings
```stylus
$default-amount = 12
$default-padding = 15px
$default-suffixes = 'col-xs', 'col-sm', 'col-md', 'col-lg', 'col-xl'
$default-breakpoints = 544px, 768px, 992px, 1200px
```
or your own settings
```stylus
$my-suffixes = 'col-xs', 'col-sm', 'col-md', 'col-lg', 'col-xl'
$my-breakpoints = 544px, 768px, 992px, 1200px
grid-constructor(12, 15px, $my-suffixes, $my-breakpoints)
```

## Contributing

```
npm run build
```
or
```
npm run watch
```
