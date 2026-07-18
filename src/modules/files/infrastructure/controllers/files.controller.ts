import { Body, Controller, Post } from '@nestjs/common';
import { FilesService } from '../../application/services/files.service';
import { FilePayloadDto } from '../dtos/file-manifest.dto';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('manifest')
  createFile(@Body() file: FilePayloadDto): FilePayloadDto {
    return this.filesService.createFile(file);
  }
}
