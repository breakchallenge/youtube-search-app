import { LitElement, html, css } from 'lit';
import './video-item.js';

class VideoList extends LitElement {
  static styles = css`
    .video-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  `;

  static properties = {
    videos: { type: Array },
  };

  constructor() {
    super();
    this.videos = [];
  }

  render() {
    return html`
      <div class="video-list">
        ${this.videos.map(
          (video) => html` <video-item .video="${video}"></video-item> `
        )}
      </div>
    `;
  }
}

customElements.define('video-list', VideoList);