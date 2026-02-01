import { Jodit as JoditES5 } from 'jodit/esm/index.js';
import type { Jodit as JoditConstructorType } from 'jodit/esm/jodit';
import 'jodit/es2021/jodit.min.css';

import 'jodit/esm/plugins/all.js';

export const Jodit: typeof JoditConstructorType = JoditES5;
