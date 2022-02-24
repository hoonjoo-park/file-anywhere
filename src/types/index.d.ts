export interface FileType {
  created_at: number;
  key: string;
  expires_at: number;
  download_count: number;
  count: number;
  size: number;
  sent?: Sent;
  summary: string;
  thumbnailUrl: string;
  files?: FileData[] | null;
}

export interface Sent {
  subject: string;
  content: string;
  emails?: string[] | undefined;
}

export interface FileData {
  key: string;
  thumbnailUrl: string;
  name: string;
  size: number;
}
