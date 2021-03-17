export interface Reader {
  read(p: Uint8Array): Promise<{ nread: number; eof: boolean }>;
}

export interface Writer {
  write(p: Uint8Array): Promise<number>;
}
