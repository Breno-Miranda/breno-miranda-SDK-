import { Component, h, State } from '@stencil/core';
import API from "../../services/api";

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})

export class AppHome {

  @State() data: any;

  componentWillLoad() {
    API.post("/websites", { domain: window.location.hostname })
      .then((res: any) => {
        this.data = JSON.parse(res.data.data.documents)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  render() {
    console.log(this.data)
    if (this.data) {
      return (
        <div>
          <header id="header">
            <div class="inner">
              <a href="#" class="image avatar"><img src={this.data.img_profile} alt={this.data.title} /></a>
              <h2>{this.data.title}</h2>
              <h1>{this.data.career}</h1>
              <h1>{this.data.description}</h1>
            </div>
          </header>
          <div id="main">
            <section id="one">
              <header class="major">
                <h2>{this.data.label_about}</h2>
              </header>
              <p>{this.data.description_about}</p>
              <ul class="actions">
                <li><a href={this.data.link_about} class="button">{this.data.label_about_btn}</a></li>
              </ul>
            </section>
            <section id="two">
              <h2>{this.data.recent_works.labe_title}</h2>
              <div class="row">
                {this.data.recent_works.arr.map((data, i) => {
                  return (
                    <article key={data} class="col-6 col-12-xsmall work-item">
                      <a href={data.img} class="image fit thumb"><img src={data.img} alt={data.title} /></a>
                      <h3>{data.title}</h3>
                      <p>{data.description}</p>
                    </article>
                  )
                })}
              </div>
              <ul class="actions">
                <li><a href={this.data.recent_works.link_button} target="_blank" class="button">{this.data.recent_works.label_button}</a></li>
              </ul>
            </section>

            <section id="three">
              <h2>{this.data.follow_me.label_title}</h2>
              <p>{this.data.follow_me.description}</p>
              <div class="row">
                <div class="col-8 col-12-small">
                  <form method="post" action="#">
                    <div class="row gtr-uniform gtr-50">
                      <div class="col-12"><textarea name="message" id="message" placeholder={this.data.follow_me.placeholder_text} ></textarea></div>
                    </div>
                  </form>
                  <ul class="actions">
                    <li><input type="submit" value={this.data.follow_me.label_button} /></li>
                  </ul>
                </div>
                <div class="col-4 col-12-small">
                  <ul class="labeled-icons">
                    <li>
                      <h3 class="icon solid fa-mobile-alt"><span class="label">Phone</span></h3>
                      {this.data.follow_me.whatsapp}
                    </li>
                    <li>
                      <h3 class="icon solid fa-envelope"><span class="label">Email</span></h3>
                      <a href={"mailto:"+this.data.follow_me.email}>{this.data.follow_me.email}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <footer id="footer">
            <div class="inner">
              <ul class="icons">
              {this.data.social_media.map((data, i) => {
                return (
                  <li key={data}><a href={data.link} class={data.icon}><span class="label">{data.title}</span></a></li>
                )
              })}
              </ul>
              <ul class="copyright">
                <li>&copy; Untitled</li><li>Criado por <a href={this.data.copyright.link}>{this.data.copyright.description}</a></li>
              </ul>
            </div>
          </footer>
        </div>
      );
    }
  }
}
