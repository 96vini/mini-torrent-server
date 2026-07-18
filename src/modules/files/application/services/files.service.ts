import { Injectable } from '@nestjs/common';
import { FilePayloadDto } from '../../infrastructure/dtos/file-manifest.dto';

@Injectable()
export class FilesService {
  createFile(file: FilePayloadDto): FilePayloadDto {
    return file;
  }
}
