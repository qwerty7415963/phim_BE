import { NextFunction, Request, Response } from 'express';

import VideoService from '@/services/video.service';

class VideoController {
  public videoService = new VideoService();

  public newVideo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await this.videoService.newVideo();

      res.status(201).json();
    } catch (error) {
      next(error);
    }
  };
}

export default VideoController;
