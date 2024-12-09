# Tailwind CSS Gradient Bug

This repository demonstrates a common yet sometimes tricky bug related to Tailwind CSS gradients not rendering as expected. The bug involves a simple div with a gradient background that might produce unexpected results due to misconfiguration, conflicting styles, or incorrect class names.

## Bug Description
A div element styled with Tailwind's `bg-gradient-to-r` utility along with color classes is not displaying the expected gradient.  Possible causes include missing colors in the `tailwind.config.js`, conflicting CSS rules, typos in class names, or plugin issues. 

## How to reproduce
1. Clone this repository.
2. Install the project dependencies.
3. Run a development server. 
4. Observe the unexpected gradient rendering in the browser.

## Solution
The solution involves carefully checking your `tailwind.config.js`, inspecting the element in the browser's developer tools, and ensuring the correct use of Tailwind's class names.