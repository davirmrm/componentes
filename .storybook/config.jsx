import { addDecorator, configure, addParameters } from '@storybook/react';
import * as React from 'react';

const req = require.context('../src/components', true, /\.stories\.(mdx|js)$/);

const withGlobal = (cb) => (
	<>
    <div className="storybook-content">
		  {cb()}
    </div>
	</>
);

const customViewports = {
  Iphone6: {
    name: 'Iphone6',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  Iphone5: {
    name: 'iphone5',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
    PixelXL: {
    name: 'PixelXL',
    styles: {
      width: '411px',
      height: '823px',
    },
  },
  Ipad: {
    name: 'Ipad',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
};

addDecorator(withGlobal);
addParameters({
  viewport: {// newViewports would be an ViewportMap. (see below for examples)
    viewports: customViewports,
  },
});
configure(req, module);
