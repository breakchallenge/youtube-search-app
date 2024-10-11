import { LitElement, html, css } from 'lit';

class SearchBar extends LitElement {
  static styles = css`
    .search-container {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
    input[type='text'] {
      flex: 1;
      padding: 8px;
      font-size: 16px;
    }
    select {
      margin-left: 10px;
      padding: 8px;
      font-size: 16px;
    }
    button {
      margin-left: 10px;
      padding: 8px 16px;
      font-size: 16px;
      cursor: pointer;
    }
  `;

  static properties = {
    query: { type: String },
    order: { type: String },
  };

  constructor() {
    super();
    this.query = '';
    this.order = 'relevance';
  }

  handleInputChange(event) {
    this.query = event.target.value;
  }

  handleOrderChange(event) {
    this.order = event.target.value;
  }

  handleSearch() {
    if (this.query.trim() === '') return;
    this.dispatchEvent(
      new CustomEvent('search-event', {
        detail: { query: this.query, order: this.order },
      })
    );
  }

  render() {
    return html`
      <div class="search-container">
        <input
          type="text"
          placeholder="Search..."
          .value="${this.query}"
          @input="${this.handleInputChange}"
        />
        <select @change="${this.handleOrderChange}">
          <option value="relevance">Relevance</option>
          <option value="date">Date</option>
          <option value="rating">Rating</option>
        </select>
        <button @click="${this.handleSearch}">Search</button>
      </div>
    `;
  }
}

customElements.define('search-bar', SearchBar);