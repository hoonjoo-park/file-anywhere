export interface FileType {
  created_at: number;
  key: string;
  expires_at: number;
  download_count: number;
  count: number;
  size: number;
  summary: string;
  thumbnailUrl: string;
  files?: FileData[] | null;
}

export interface FileData {
  key: string;
  thumbnailUrl: string;
  name: string;
  size: number;
}
