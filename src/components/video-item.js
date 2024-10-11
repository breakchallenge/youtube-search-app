import { LitElement, html, css } from 'lit';

class VideoItem extends LitElement {
  static styles = css`
    .video-item {
      display: flex;
      gap: 20px;
    }
    .thumbnail img {
      width: 160px;
      height: 90px;
    }
    .details {
      flex: 1;
    }
    .details h3 {
      margin: 0;
    }
    .details p {
      margin: 5px 0;
    }
    .details a {
      text-decoration: none;
      color: blue;
    }
  `;

  static properties = {
    video: { type: Object },
  };

  constructor() {
    super();
    this.video = {};
  }

  render() {
    const { video } = this;
    return html`
      <div class="video-item">
        <div class="thumbnail">
          <a
            href="https://www.youtube.com/watch?v=${video.id}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="${video.thumbnail}" alt="${video.title}" />
          </a>
        </div>
        <div class="details">
          <h3>
            <a
              href="https://www.youtube.com/watch?v=${video.id}"
              target="_blank"
              rel="noopener noreferrer"
              >${video.title}</a
            >
          </h3>
          <p>${video.description}</p>
          <p>Comments: ${video.commentCount}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('video-item', VideoItem);