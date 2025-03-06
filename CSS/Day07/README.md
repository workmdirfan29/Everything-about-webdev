# CSS Properties Example

## HTML Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Properties Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Grid Layout Example -->
    <div class="grid-container">
        <div class="grid-item">Item 1</div>
        <div class="grid-item">Item 2</div>
        <div class="grid-item">Item 3</div>
        <div class="grid-item">Item 4</div>
    </div>

    <!-- Width and Height Example -->
    <div class="box">
        <p>This box has a fixed width and height.</p>
    </div>

    <!-- Overflow Example -->
    <div class="overflow-box">
        <p>This box has content that overflows its container. Scroll to see more.</p>
        <p>More content to overflow...</p>
        <p>More content to overflow...</p>
    </div>

    <!-- Visibility Example -->
    <div class="visibility-box">
        <p>This box is visible.</p>
    </div>

    <!-- Opacity Example -->
    <div class="opacity-box">
        <p>This box has reduced opacity, making it slightly transparent.</p>
    </div>

    <!-- Text Alignment Example -->
    <h2 class="center-align">This heading is center aligned.</h2>
    <p class="right-align">This paragraph is right aligned.</p>

    <!-- Text Decoration Example -->
    <p class="underline-text">This text is underlined.</p>
    <p class="no-decoration">This text has no decoration.</p>
</body>
</html>
```
## CSS Code
```CSS
/* Grid Layout Example */
.grid-container {
    display: grid;                        /* Set up a grid container */
    grid-template-columns: repeat(2, 1fr); /* Two equal-width columns */
    gap: 10px;                             /* Space between items */
    padding: 20px;
}

.grid-item {
    background-color: #4CAF50; /* Green background for grid items */
    color: white;              /* White text */
    padding: 20px;
    text-align: center;
}

/* Width and Height Example */
.box {
    width: 300px;              /* Fixed width of 300px */
    height: 200px;             /* Fixed height of 200px */
    background-color: lightblue;
    padding: 20px;
    margin: 20px;
    border: 2px solid #333;
}

/* Overflow Example */
.overflow-box {
    width: 300px;              /* Fixed width of 300px */
    height: 150px;             /* Fixed height of 150px */
    overflow: auto;            /* Adds scrollbars if content overflows */
    background-color: #f0f0f0;
    padding: 10px;
    margin: 20px;
    border: 2px solid #333;
}

/* Visibility Example */
.visibility-box {
    width: 100%;
    height: 100px;
    background-color: #f4a261;
    visibility: visible;      /* The box is visible */
    padding: 20px;
    margin: 20px;
    color: white;
}

/* Opacity Example */
.opacity-box {
    width: 100%;
    height: 150px;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
    opacity: 0.7;                    /* 70% opacity for the box */
    padding: 20px;
    margin: 20px;
    color: white;
}

/* Text Alignment Example */
.center-align {
    text-align: center; /* Center the text */
}

.right-align {
    text-align: right;  /* Align text to the right */
}

/* Text Decoration Example */
.underline-text {
    text-decoration: underline; /* Underline the text */
}

.no-decoration {
    text-decoration: none; /* Remove any text decoration */
}
```
# Explanation of Each Property

### 1. **Grid**
- **`display: grid;`**: Turns the `.grid-container` into a grid container, allowing its children to be arranged in a grid layout.

- **`grid-template-columns: repeat(2, 1fr);`**: Creates two equal-width columns.

- **`gap: 10px;`**: Defines the space between grid items.

### 2. **Width and Height**
- **`width: 300px;`**: Sets a fixed width of 300px for the `.box`.

- **`height: 200px;`**: Sets a fixed height of 200px for the `.box`.

### 3. **Overflow**
- **`overflow: auto;`**: Ensures that if content overflows the `.overflow-box`, scrollbars will appear to view the hidden content.

### 4. **Visibility**
- **`visibility: visible;`**: Makes the `.visibility-box` visible on the page. If set to **`visibility: hidden;`**, the box will be invisible but still take up space in the layout.

### 5. **Opacity**
- **`opacity: 0.7;`**: Reduces the opacity of the `.opacity-box` to 70%, making it slightly transparent.

### 6. **Text Alignment**
- **`text-align: center;`**: Centers the text inside the `.center-align` element.

- **`text-align: right;`**: Aligns the text to the right inside the `.right-align` element.

### 7. **Text Decoration**
- **`text-decoration: underline;`**: Underlines the text inside the `.underline-text` element.

- **`text-decoration: none;`**: Removes any text decoration from the `.no-decoration` element.

---

# Summary of Properties:

- **Grid**: A layout model that allows content to be placed in rows and columns.

- **Width and Height**: Defines the size of an element.

- **Overflow**: Controls how content that overflows its container is handled.

- **Visibility**: Hides or shows an element without removing it from the document flow.

- **Opacity**: Adjusts the transparency of an element.

- **Text Alignment**: Controls the alignment of text (left, center, right).

- **Text Decoration**: Modifies text decorations like underlining or strikethroughs.

These CSS properties give you a lot of control over the layout and appearance of elements in your web pages.
