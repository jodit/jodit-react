// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - Jodit Editor (https://xdsoft.net/jodit/)
import { Jodit as JoditES5 } from 'jodit/es2021/jodit.fat.min';
import type { Jodit as JoditConstructorType } from 'jodit';
import 'jodit/es5/jodit.min.css';

export const Jodit: typeof JoditConstructorType = JoditES5;
