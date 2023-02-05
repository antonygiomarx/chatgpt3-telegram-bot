import { Test, TestingModule } from '@nestjs/testing';
import { TelegramController } from '../telegram.controller';
import { TelegramService } from '../telegram.service';
import { TelegramWebhookMessageEvent } from '../interfaces/telegram.interface';
import { TelegramModule } from '../telegram.module';

describe('TelegramController', () => {
  let telegramController: TelegramController;

  const telegramControllerMockRequestMock: TelegramWebhookMessageEvent = {
    update_id: 0,
    message: {
      message_id: 0,
      from: {
        id: 0,
        is_bot: false,
        first_name: 'string',
        username: 'string',
        language_code: 'string',
      },
    },
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TelegramController],
      providers: [TelegramService],
      imports: [TelegramModule],
    }).compile();

    telegramController = app.get<TelegramController>(TelegramController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(
        telegramController.webhook(telegramControllerMockRequestMock),
      ).resolves.toBeFalsy();
    });
  });
});
