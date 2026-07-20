import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsDefined,
  IsInstance,
  IsInt,
  IsMimeType,
  IsNotEmpty,
  IsPositive,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';

export class FileManifestChunkDto {
  // Posição do chunk no arquivo. O primeiro chunk possui índice zero.
  @IsInt()
  @Min(0)
  index!: number;

  // Tamanho real do chunk em bytes.
  @IsInt()
  @IsPositive()
  size!: number;

  // Hash utilizado para verificar a integridade individual do chunk.
  @IsString()
  @IsNotEmpty()
  hash!: string;
}

export class CreateFileUploadDto {
  // Nome original do arquivo, incluindo sua extensão.
  @IsString()
  @IsNotEmpty()
  name!: string;

  // Tamanho total do arquivo em bytes.
  @IsInt()
  @IsPositive()
  size!: number;

  // MIME type do arquivo, como image/png ou application/pdf.
  @IsMimeType()
  type!: string;

  // Hash do arquivo completo para validação após a montagem.
  @IsString()
  @IsNotEmpty()
  hash!: string;

  // Tamanho máximo configurado para cada chunk.
  @IsInt()
  @IsPositive()
  chunkSize!: number;

  // Quantidade total de chunks esperados.
  @IsInt()
  @IsPositive()
  totalChunks!: number;

  // Manifesto com os metadados de todos os chunks.
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => FileManifestChunkDto)
  chunks!: FileManifestChunkDto[];
}

export class FileChunkDto {
  // Posição do chunk no arquivo.
  @IsInt()
  @Min(0)
  index!: number;

  // Tamanho real do conteúdo armazenado no Blob.
  @IsInt()
  @IsPositive()
  size!: number;

  // Hash calculado para este chunk.
  @IsString()
  @IsNotEmpty()
  hash!: string;

  // Conteúdo binário do chunk.
  @IsDefined()
  @IsInstance(Blob)
  blob!: Blob;
}

export class FilePayloadDto {
  // Tamanho total do arquivo em bytes.
  @IsInt()
  @IsPositive()
  fileSize!: number;

  // Tamanho máximo configurado para cada chunk.
  @IsInt()
  @IsPositive()
  chunkSize!: number;

  // Quantidade de chunks que o payload deve possuir.
  @IsInt()
  @IsPositive()
  expectedChunks!: number;

  // Manifesto completo do upload.
  @IsDefined()
  @ValidateNested()
  @Type(() => CreateFileUploadDto)
  manifest!: CreateFileUploadDto;

  // Conteúdo binário dos chunks.
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => FileChunkDto)
  chunks!: FileChunkDto[];
}
