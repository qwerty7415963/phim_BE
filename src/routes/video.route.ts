import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import VideoController from '@/controllers/video.controller';

class VideoRoute implements Routes {
  public path = '/';
  public router = Router();
  public videoController = new VideoController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.videoController.newVideo);
  }
}

export default VideoRoute;
