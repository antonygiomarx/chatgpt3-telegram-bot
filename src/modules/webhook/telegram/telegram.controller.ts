import { Body, Controller, Post } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { TelegramWebhookMessageEvent } from './interfaces/telegram.interface';
import { ChatGptService } from 'nestjs-chatgpt';

@Controller('webhook/telegram')
export class TelegramController {
  constructor(
    private readonly telegramService: TelegramService,
    private chatGptService: ChatGptService,
  ) {}

  @Post()
  async webhook(@Body() body: TelegramWebhookMessageEvent) {
    const { text, chat } = body.message;

    const chatId = chat.id;

    const { choices } = await this.chatGptService.generateTextGPT3({
      prompt: text,
    });

    const message = choices[0].text;

    return this.telegramService.sendMessage(message, chatId);
  }
}
