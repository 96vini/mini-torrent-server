import { randomUUID } from 'node:crypto';
import { FileUploadChunk } from './file-upload-chunk.entity';

export enum FileUploadStatus {
  PENDING = 'PENDING',
  UPLOADING = 'UPLOADING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
  EXPIRED = 'EXPIRED',
}

export type FileUploadProps = {
  name: string;
  mimeType: string;
  size: bigint;
  hash: string;
  chunkSize: number;
  totalChunks: number;
  id?: string;
  status?: FileUploadStatus;
  storageKey?: string | null;
  failureReason?: string | null;
  chunks?: FileUploadChunk[];
  fileId?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  expiresAt?: Date | null;
};

export class FileUpload {
  public readonly id: string;
  public readonly name: string;
  public readonly mimeType: string;
  public readonly size: bigint;
  public readonly hash: string;
  public readonly chunkSize: number;
  public readonly totalChunks: number;
  public status: FileUploadStatus;
  public storageKey: string | null;
  public failureReason: string | null;
  public chunks: FileUploadChunk[];
  public fileId: string | null;
  public readonly createdAt: Date;
  public updatedAt: Date;
  public expiresAt: Date | null;

  constructor(props: FileUploadProps) {
    this.id = props.id ?? randomUUID();
    this.name = props.name;
    this.mimeType = props.mimeType;
    this.size = props.size;
    this.hash = props.hash;
    this.chunkSize = props.chunkSize;
    this.totalChunks = props.totalChunks;
    this.status = props.status ?? FileUploadStatus.PENDING;
    this.storageKey = props.storageKey ?? null;
    this.failureReason = props.failureReason ?? null;
    this.chunks = props.chunks ?? [];
    this.fileId = props.fileId ?? null;
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
    this.expiresAt = props.expiresAt ?? null;
  }
}
