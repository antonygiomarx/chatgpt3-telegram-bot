import { Injectable, Logger } from '@nestjs/common';
import {
  TelegramMessage,
  TelegramService as TelegramServiceProvider,
} from 'nestjs-telegram';

@Injectable()
export class TelegramService {
  readonly logger = new Logger(TelegramService.name);

  constructor(
    private readonly telegramServiceProvider: TelegramServiceProvider,
  ) {}

  async sendMessage(
    message: string,
    chatId: string | number,
  ): Promise<TelegramMessage> {
    return this.telegramServiceProvider
      .sendMessage({
        chat_id: chatId,
        text: message,
      })
      .toPromise();
  }
}
