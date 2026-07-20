import { File } from '../entities/file.entity';

export type CreateFileRepositoryInput = {
  file: File;
};

export abstract class FileRepository {
  abstract findByHash(hash: string): Promise<File | null>;

  abstract create(data: CreateFileRepositoryInput): Promise<File>;
}
