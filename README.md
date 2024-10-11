# YouTube Search App

A simple web application that allows users to search for YouTube videos using the YouTube Data API.

## Features

- Search for YouTube videos by keyword.
- Display video results with thumbnails, titles, and descriptions.
- Paginated results for easy browsing.
- Watch videos directly in the app.
- Responsive design for both desktop and mobile.

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

### API Key

This app uses the **YouTube Data API v3**. You will need to obtain an API key from Google Cloud Console.

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project (if you don't have one).
3. Go to **APIs & Services** > **Library** and enable the **YouTube Data API v3**.
4. In the **Credentials** tab, create an API key for your project.
5. Copy the API key.


### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-github-username/youtube-search-app.git
   cd youtube-search-app

2. Install dependencies:

   ```bash
   npm install

3. Create a .env file in the root of the project and add your YouTube API key:

   ```bash
   API_KEY=YOUR_YOUTUBE_API_KEY

   e.g. API_KEY=AIzaSyAXeaO2utyjsit__nNbBFtjkY_gaWIXxc4

### Running the App Local

To start the development server:

```bash
npm run start
```

This will start the app locally at http://localhost:1234. 


---

## Project Structure

The project is structure as follows:

```bash
├── public/                 # Static files
├── src/
│   ├── components/         # React components
│   ├── services/           # API service calls
│   ├── styles/             # CSS styles
│   └── main.js             # Main app component
├── .env                    # API key configuration
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

## Usage
1. Enter a keyword or phrase in the search bar.
2. The app will display a list of YouTube videos related to the search query.
3. Click on a video thumbnail to watch it directly in the app.

## Built With
1. Lit - A simple library for building fast, lightweight web components.
2. YouTube Data API v3 - API for interacting with YouTube data.