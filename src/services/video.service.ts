import { getStorage } from 'firebase/storage';

class VideoService {
  public storage = getStorage();

  public async newVideo() {
    console.log('ok');
  }
}

export default VideoService;
