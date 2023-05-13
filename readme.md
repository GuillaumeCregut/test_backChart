A simple node - express backend to test generation of charts with chart.js

Update : Adding pdf generation

On branch **static_data_render** : render pies and bar charts with statics values

On branch **dynamic_values**, fetch datas from a DB

On branch **startpdf**, create a simple pdf, including image file

on branch **frontend**, adding vite front with react to test stream download

**Attention** : chart.js version **MUST** be 3.5.1, in other way, chart-js-node-canvas will not work properly.
 (La version de chart.js est bien la 3.5.1, car chart-js-node-canvas ne supporte pas les versions supérieures pour le moment.)

Update 13/05 : Adding front end to test stream pdf download with VITE and react.