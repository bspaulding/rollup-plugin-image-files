# rollup-plugin-image-files

Like rollup-plugin-image, but writes image files to dest instead of inlining base64.
This was written for a library that would be consumed by react-native applications.

## Usage

Install the plugin via npm:

```bash
npm install --save-dev rollup-plugin-image-files
```

Add the plugin to your rollup config:

```javascript
import images from 'rollup-plugin-image-files';

export default {
  entry: 'src/index.js',
  des: 'dist/bundle.js',
  plugins: [images()]
}
```

Require some images in your source:

```javascript
import React from 'react';
import { Image } from 'react-native';
import imageSrc from '../path/to/image.png';

export default const MyComponent = () => (
  <Image source={imageSrc}/>
);
```

## What it does

The plugin does two things:

1. Copies the source image into the same directory as the destination file.
2. Replaces the image required with a module that exports the result of calling require on the copied image.
