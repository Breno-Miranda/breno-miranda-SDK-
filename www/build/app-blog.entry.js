import { r as registerInstance, h } from './index-c37bab2d.js';

const appBlogCss = "";

let AppBlog = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  normalize(name) {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }
  render() {
    if (this.match && this.match.params.name) {
      return (h("div", { class: "app-blog" }, h("p", null, "Hello! My name is ", this.normalize(this.match.params.name), ". My name was passed in through a route param!")));
    }
  }
};
AppBlog.style = appBlogCss;

export { AppBlog as app_blog };
