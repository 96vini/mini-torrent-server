import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

export class FileManifestChunkDto {
  @IsNumber()
  @IsNotEmpty()
  index!: number;

  @IsNumber()
  @IsNotEmpty()
  size!: number;

  @IsString()
  @IsNotEmpty()
  hash!: string;
}

export class FileManifestDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsNumber()
  @IsNotEmpty()
  size!: number;

  @IsString()
  @IsNotEmpty()
  type!: string;

  @IsString()
  @IsNotEmpty()
  hash!: string;

  @IsNumber()
  @IsNotEmpty()
  chunkSize!: number;

  @IsNumber()
  @IsNotEmpty()
  totalChunks!: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FileManifestChunkDto)
  chunks!: FileManifestChunkDto[];
}

export class FileChunkDto {
  @IsNumber()
  @IsNotEmpty()
  index!: number;

  @IsNumber()
  @IsNotEmpty()
  size!: number;

  @IsString()
  @IsNotEmpty()
  hash!: string;

  @IsNotEmpty()
  blob!: Blob;
}

export class FilePayloadDto {
  @IsNumber()
  @IsNotEmpty()
  fileSize!: number;

  @IsNumber()
  @IsNotEmpty()
  chunkSize!: number;

  @IsNumber()
  @IsNotEmpty()
  expectedChunks!: number;

  @ValidateNested()
  @Type(() => FileManifestDto)
  manifest!: FileManifestDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FileChunkDto)
  chunks!: FileChunkDto[];
}
