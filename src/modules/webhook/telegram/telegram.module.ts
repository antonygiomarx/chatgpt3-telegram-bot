import { TelegramController } from './telegram.controller';
import { Module } from '@nestjs/common';
import { TelegramModule as TelegramProviderModule } from 'nestjs-telegram';
import { TelegramService } from './telegram.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TelegramProviderModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        botKey: configService.get('TELEGRAM_BOT_KEY'),
      }),
    }),
  ],
  controllers: [TelegramController],
  providers: [TelegramService],
})
export class TelegramModule {}
