# Learn how to connect JavaScript
### To get started, follow these simple steps:

1. Create an HTML file `(index.html)`.

2. Create a JavaScript file `(app.js)` with the required code.
3. Link the `app.js` file to the HTML using the `<script>` tag.
```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>How to Connect JavaScript to HTML</title>
</head>
<body>
    <h1>Welcome to Day02 !</h1>

    <!-- 1. Inline JavaScript -->
    <script>
        console.log("Hello from Inline JavaScript!");
    </script>

    <h2>Check the Console for Inline JavaScript Output</h2>

    <!-- 2. External JavaScript (Linked externally) -->
    <script src="app.js"></script>

    <h2>Check the Console for External JavaScript Output</h2>

    <!-- 3. Asynchronous Loading of JavaScript -->

    <script src="app.js"></script>              <!-- This links the JavaScript file -->

    <h2>Async Script Loaded - Check Console</h2>

</body>
</html>
```
# How It Works:
- When the page loads, the JavaScript from the `<script>` tags will be executed in the following order:

1. Inline JavaScript: Immediately logs the message to the console.
2. External JavaScript: The file external-script.js will be loaded and executed.
3. Async JavaScript: The script from async-script.js will load asynchronously and log its message to the console.

# How to Test:
- Save this HTML file as `index.html`.

- Create the two `external JavaScript files`, and `async-script.js`, and add the respective code.

- Open `index.html` in your browser and check the developer console (`press F12 `and go to the `"Console"` tab) to see the log outputs.

---