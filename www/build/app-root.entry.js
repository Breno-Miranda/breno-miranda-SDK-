import { r as registerInstance, h } from './index-c37bab2d.js';

const appRootCss = "";

let AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: "/", component: "app-home", exact: true }), h("stencil-route", { url: "/profile/:name", component: "app-profile" }), h("stencil-route", { url: "/blog/:name", component: "app-blog" }))));
  }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
