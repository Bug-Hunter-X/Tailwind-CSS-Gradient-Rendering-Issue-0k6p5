```javascript
// Ensure your tailwind.config.js is correctly configured
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007bff',
        'custom-purple': '#6f42c1'
      }
    }
  },
  plugins: []
}

// Correct usage of the gradient class and custom colors (if any)
<div class="bg-gradient-to-r from-custom-blue to-custom-purple p-4 rounded-lg shadow-lg">
  <p>This is some text.</p>
</div>
// Or using default colors
<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-lg">
  <p>This is some text.</p>
</div>
```