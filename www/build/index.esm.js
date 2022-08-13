import { A as ActiveRouter } from './active-router-6ecbf67a.js';
import './match-path-02f6df12.js';
import './index-c37bab2d.js';
import './location-utils-6419c2b3.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
