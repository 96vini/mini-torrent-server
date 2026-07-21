export type FileProps = {
  id: string;
  name: string;
  mimeType: string;
  size: bigint;
  hash: string;
  storageKey: string;
  createdAt: Date;
};

export class File {
  constructor(public readonly props: FileProps) {}

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  get mimeType() {
    return this.props.mimeType;
  }

  get size() {
    return this.props.size;
  }

  get hash() {
    return this.props.hash;
  }

  get storageKey() {
    return this.props.storageKey;
  }

  get createdAt() {
    return this.props.createdAt;
  }
}
