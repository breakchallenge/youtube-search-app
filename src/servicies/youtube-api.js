export async function fetchVideos(query, order, apiKey) {
  try {
    // First, get the list of videos matching the search query
    const searchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        query
      )}&type=video&order=${order}&maxResults=10&key=${apiKey}`
    );
    const searchData = await searchResponse.json();

    if (!searchData.items) return [];

    const videoIds = searchData.items.map((item) => item.id.videoId).join(',');

    // Next, get the statistics for the videos (to get the comment count)
    const statsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${apiKey}`
    );
    const statsData = await statsResponse.json();

    // Combine data
    const videos = searchData.items.map((item) => {
      const stats = statsData.items.find(
        (statItem) => statItem.id === item.id.videoId
      );
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.medium.url,
        commentCount: stats.statistics.commentCount,
      };
    });

    return videos;
  } catch (error) {
    console.error('Error fetching videos', error);
    return [];
  }
}