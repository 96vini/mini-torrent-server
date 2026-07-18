import { Module } from '@nestjs/common';
import { FilesService } from './application/services/files.service';
import { FilesController } from './infrastructure/controllers/files.controller';

@Module({
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
