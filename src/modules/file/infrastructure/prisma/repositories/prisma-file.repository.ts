import { Injectable } from '@nestjs/common';
import { File } from '@/modules/file/domain/entities/file.entity';
import {
  CreateFileRepositoryInput,
  FileRepository,
} from '@/modules/file/domain/repositories/file.repository';
import { PrismaService } from '@/modules/file/infrastructure/prisma/prisma.service';

@Injectable()
export class PrismaFileRepository implements FileRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByHash(hash: string): Promise<File | null> {
    const file = await this.prisma.file.findFirst({
      where: {
        hash,
      },
    });

    if (!file) {
      return null;
    }

    return new File({
      id: file.id,
      name: file.name,
      mimeType: file.mimeType,
      size: file.size,
      hash: file.hash,
      storageKey: file.storageKey,
      createdAt: new Date(file.createdAt),
    });
  }

  async create(data: CreateFileRepositoryInput): Promise<File> {
    const file = await this.prisma.file.create({
      data: {
        name: data.file.name,
        mimeType: data.file.mimeType,
        size: data.file.size,
        hash: data.file.hash,
        storageKey: data.file.storageKey,
        createdAt: data.file.createdAt.toISOString(),
      },
    });

    return new File({
      id: file.id,
      name: file.name,
      mimeType: file.mimeType,
      size: file.size,
      hash: file.hash,
      storageKey: file.storageKey,
      createdAt: new Date(file.createdAt),
    });
  }
}
