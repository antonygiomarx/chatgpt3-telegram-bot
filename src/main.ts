import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as process from 'process';

export class MainApplication {
  static readonly logger = new Logger(MainApplication.name);

  static readonly port = process.env.PORT || 3000;

  static async bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors();

    app.useLogger(this.logger);

    await app.listen(this.port);
  }
}

MainApplication.bootstrap()
  .then(() => {
    MainApplication.logger.log(
      `Application is running on: ${MainApplication.port}`,
    );
  })
  .catch((err) => {
    MainApplication.logger.error(`Application failed to start: ${err}`);
  });
