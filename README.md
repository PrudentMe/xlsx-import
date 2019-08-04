@prudent/xlsx-import
====================
Starting point for Prudent XLSX import add-on creators 

Installing
==========

```
$ npm install --save @prudent/xlsx-import
```

Usage
=====

```
let startRow = 7;
require('xlsx-import').start(startRow, function(transactions) {
    //Place parsing functionality here
    //When parsed, output transactions to stdout
});
```
