// Injects all SVG files inside assets/svg folder into <body> as an SVG sprite.

// Create SVG sprite and inject it to HTML
const files = require.context('!svg-sprite-loader!../assets/svg', false, /.*\.svg$/);
files.keys().forEach(files);
