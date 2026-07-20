import { Body, Controller, Post } from '@nestjs/common';
import { FileService } from '../../application/services/file.service';
import { FilePayloadDto } from '../dtos/file-manifest.dto';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('manifest')
  createFile(@Body() file: FilePayloadDto): FilePayloadDto {
    return this.fileService.createFile(file);
  }
}
