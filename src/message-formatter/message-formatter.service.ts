export class MessageFormatterService {
  format(message: string): string {
    const timeStamp = new Date().toISOString();
    return `[${timeStamp}] ${message}`;
  }
}
