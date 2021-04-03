import axios from 'axios';

const KEY = 'AIzaSyAk3uK0l4hd1h2eufD8Q-qc5c9_xAvAwM8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});