import { Injectable } from '@nestjs/common';
import { FilePayloadDto } from '../../infrastructure/dtos/file-manifest.dto';

@Injectable()
export class FileService {
  createFile(file: FilePayloadDto): FilePayloadDto {
    return file;
  }
}
