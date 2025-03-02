# Block-Level vs Inline Elements in HTML

## Block-Level Elements

Block-level elements are elements that take up the entire width of their parent container and always start on a new line. These elements are often used to structure the layout of a web page.

### Example of Block-Level Elements

```html
<!-- <div> is a block-level element, so it takes up the full width of its container. -->

<div style="background-color: lightblue; padding: 10px;">

  <!-- <h1> is a block-level element, so it will appear on a new line. -->

  <h1>This is a Block-Level Heading</h1> 

  <!-- <p> is a block-level element, it starts on a new line and takes up the full width of its container. -->

  <p>This paragraph is inside a <div> container. It takes up the full width of the container.</p>
</div>
```
- The <`div`>, <`h1`>, and <`p`> tags are all block-level elements.
- They take up the full width of their container and appear one after another, starting each on a new line.

### Inline Elements
- Inline elements take up only as much width as necessary and do not cause the content to break into a new line. They are typically used for styling parts of the text or smaller sections of content.
```html
<!-- <span> is an inline element, it does not break the flow of the content and stays within the text. -->

<p>This is a <span style="color: red;">red</span> word inside a paragraph. The <span> tag is inline.</p>

<!-- <a> is an inline element, it stays within the paragraph without breaking the flow. -->

<p>This is a <a href="https://www.example.com" target="_blank">link</a> inside a paragraph. The <a> tag is also inline.</p>
```
- The <`span`> and <`a`> tags are inline elements.
They do not break the flow of the surrounding content, meaning the text continues in the same line.
- They do not break the flow of the surrounding content, meaning the text continues in the same line.

### Combining Block and Inline Elements
- You can mix block-level and inline elements in the same container. Block elements can contain inline elements without issue.

#### Example of Mixing Block and Inline Elements
```html
<!-- <div> is a block-level element, which can contain inline elements like <strong> and <span>. -->

<div style="background-color: lightgray; padding: 10px;">
  <h2>Block and Inline Elements Together</h2>
  <p>Here is a <strong>strong</strong> word inside a block-level tag.<p>

  <span style="color: green;">This span is inline</span>, so it won't create a new line.</p>

  <!-- <strong> is an inline element. It stays within the paragraph and gives bold styling. -->
  <!-- <span> is inline, so it also stays in the flow without breaking the line. -->
</div>
```
- In this example, the <`strong`> and <`span`> elements are inline elements inside the block-level <`p`> tag.
- They stay within the paragraph without forcing a line break.