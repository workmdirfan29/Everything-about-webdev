# Font, Margin, Padding, Borders

This project demonstrates how to apply **font styles**, **margin**, **padding**, and **borders** to HTML elements using CSS.

## 1. Font
The `font-family`, `font-size`, `font-weight`, and `color` properties are used to style the font of an element. Here’s an example of a custom font applied to a heading and a paragraph:

## HTML :
```html
<h1 class="font-example">This is a Heading with Custom Font</h1>
<p class="font-example">This is a paragraph with a custom font applied.</p>
```
## CSS :
```CSS
.font-example {
    font-family: 'Arial', sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: #333;
}
```
## 2.  Margin
The `margin` property adds space around an element, outside of its border. Here's an example of applying a margin to a `div`:

### HTML :
```html
<div class="margin-example">
    <p>This div has margin applied.</p>
</div>
```
### CSS :
```CSS
.margin-example {
    margin: 30px;
    background-color: lightblue;
    padding: 10px;
}
```
## 3. Padding
The `padding` property adds space inside an element, between its content and border. Here's an example of applying padding:
### HTML :
```html
<div class="padding-example">
    <p>This div has padding applied.</p>
</div>
```
### CSS :
```CSS
.padding-example {
    padding: 20px;
    background-color: lightgreen;
    text-align: center;
}
```
## 4. Borders
The `border` property is used to set a border around an element. Here's an example of adding a border:
### HTML :
```html
<div class="border-example">
    <p>This div has a border applied.</p>
</div>
```
### CSS :
``` CSS
.border-example {
    border: 5px solid black;
    padding: 15px;
    background-color: lightyellow;
}
```

### Explanation of Each Topic:

1. **Font**: 
   - `font-family`: Specifies the font of the text (e.g., Arial).
   - `font-size`: Defines the size of the text (e.g., 20px).
   - `font-weight`: Makes the text bold (using `bold`).
   - `color`: Sets the text color (e.g., #333 for dark gray).

2. **Margin**: 
   - `margin`: Adds space around an element outside of its border. It can be applied uniformly (e.g., `30px`) or with specific values for each side (e.g., `margin: 10px 20px` for top/bottom and left/right).

3. **Padding**: 
   - `padding`: Adds space inside an element, between its content and border. It can also be set uniformly or individually for top, right, bottom, and left (e.g., `padding: 20px`).

4. **Borders**: 
   - `border`: Sets a border around an element. You can define the width, style (e.g., `solid`), and color of the border (e.g., `5px solid black`).

---


