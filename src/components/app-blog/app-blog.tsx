import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil-community/router';

@Component({
  tag: 'app-blog',
  styleUrl: 'app-blog.css',
  shadow: true,
})
export class AppBlog {
  @Prop() match: MatchResults;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class="app-blog">
          <p>Hello! My name is {this.normalize(this.match.params.name)}. My name was passed in through a route param!</p>
        </div>
      );
    }
  }
}

// <stencil-route-link url="/profile/stencil">
// <button>Profile page</button>
// </stencil-route-link>
