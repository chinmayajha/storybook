import { createContext as ReactCreateContext } from 'react';

import type { Combo } from './root.tsx';

export const createContext = ({ api, state }: Combo) => ReactCreateContext({ api, state });
// bench s0047 focus1 1794095228866188000
// bench s0047 focus2 1794097577118822000
