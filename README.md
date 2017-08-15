# jQuery DoubleClickField v1.0.1
This project allows you to edit html element with double click.

## Why I prepared this jQuery Plugin
Because, I had to use this plugin for Private Project.<br>
I created a reference for myself and I wanted to be a source for you.

### How to use this plugin?
This is very simple! First select HTML tag to you use (except input element) :
```html
<h1 id="edit-element-1">Editable Element 1</h1>
```
Then use the following JavaScript(jQuery) code :
```javascript
$(document).ready(function(){
    $('#edit-element-1').dblClickField();
});
```
### What else this?

#### When you press Enter, you can send the data to another page!<br>
For this, first you must add to an attribute to the element you selected. This attribute is `sname`.<br>
With this feature you can get data from another page.
```html
<h1 id="edit-element-2" sname="e2">Editable Element 2</h1>
```
You need to submit an object parameter for JavaScript.<br>
You must define url and method variables within this object.
```javascript
$(document).ready(function () {
    $('#edit-element-2').dblClickField({
        send: {
            url: 'samples/dblClickField.sample.php',
            method: 'POST' /*The request is using the POST method. You can use the GET method. */
        }
    });
});
```