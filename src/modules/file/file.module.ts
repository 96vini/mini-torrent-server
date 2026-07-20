import { Module } from '@nestjs/common';
import { FileService } from './application/services/file.service';
import { FileController } from './infrastructure/controllers/file.controller';

@Module({
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
