import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

export class EnvironmentProvider {
  constructor(private configService: ConfigService) {}

  public getPort() {
    return this.configService.get<string>('VITE_API_PORT') || '3000';
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
