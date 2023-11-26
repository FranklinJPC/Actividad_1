import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import {Filesystem, Directory} from '@capacitor/filesystem'
import {Preferences} from '@capacitor/preferences'
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }
  public photos: UserPhoto[] = [];
  public async addNewToGallery(){
    // Tomar foto 
    const capturarFoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    })
    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturarFoto.webPath!
    })
  }
}
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
