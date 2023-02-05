import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ChatGptModule } from 'nestjs-chatgpt';
import { TelegramModule } from './modules/webhook/telegram/telegram.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ChatGptModule.forRoot(process.env.CHATGPT_API_KEY),
    TelegramModule,
  ],
  providers: [AppService],
  exports: [],
  controllers: [AppController],
})
export class AppModule {}
