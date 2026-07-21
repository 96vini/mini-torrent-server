import { randomUUID } from 'node:crypto';

export enum FileUploadChunkStatus {
  PENDING = 'PENDING',
  UPLOADING = 'UPLOADING',
  UPLOADED = 'UPLOADED',
  FAILED = 'FAILED',
}

export type FileUploadChunkProps = {
  fileUploadId: string;
  index: number;
  size: number;
  hash: string;
  id?: string;
  status?: FileUploadChunkStatus;
  storageKey?: string | null;
  failureReason?: string | null;
  attempts?: number;
  uploadedAt?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
};

export class FileUploadChunk {
  public readonly id: string;
  public readonly fileUploadId: string;
  public readonly index: number;
  public readonly size: number;
  public readonly hash: string;
  public status: FileUploadChunkStatus;
  public storageKey: string | null;
  public failureReason: string | null;
  public attempts: number;
  public uploadedAt: Date | null;
  public readonly createdAt: Date;
  public updatedAt: Date;

  constructor(props: FileUploadChunkProps) {
    this.id = props.id ?? randomUUID();
    this.fileUploadId = props.fileUploadId;
    this.index = props.index;
    this.size = props.size;
    this.hash = props.hash;
    this.status = props.status ?? FileUploadChunkStatus.PENDING;
    this.storageKey = props.storageKey ?? null;
    this.failureReason = props.failureReason ?? null;
    this.attempts = props.attempts ?? 0;
    this.uploadedAt = props.uploadedAt ?? null;
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
  }
}
