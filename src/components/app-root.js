import { LitElement, html, css } from 'lit';
import { fetchVideos } from '../servicies/youtube-api.js';
import './search-bar.js';
import './video-list.js';
import 'dotenv/config';

class AppRoot extends LitElement {
  static styles = css`
    /* Global styles */
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
  `;

  static properties = {
    videos: { type: Array },
    apiKey: { type: String },
  };

  constructor() {
    super();
    this.videos = [];
    this.apiKey = ''; // Will be set from the environment variable
  }

  connectedCallback() {
    super.connectedCallback();
    // Fetch the API key from the environment variable or config
    this.apiKey = process.env.API_KEY;
  }

  async handleSearch(event) {
    const { query, order } = event.detail;
    // Fetch videos from YouTube API
    const videoData = await fetchVideos(query, order, this.apiKey);
    this.videos = videoData;
  }

  render() {
    return html`
      <div class="container">
        <search-bar @search-event="${this.handleSearch}"></search-bar>
        <video-list .videos="${this.videos}"></video-list>
      </div>
    `;
  }
}

customElements.define('app-root', AppRoot);