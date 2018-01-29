import 'jest-preset-angular';
import { MatCommonModule } from '@angular/material';

declare let global: {
  [key: string]: any;
};

global['CSS'] = null;
(<any>MatCommonModule.prototype)['_checkDoctype'] = function() {};
(<any>MatCommonModule.prototype)['_checkTheme'] = function() {};

Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});
