import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseProvider {
  constructor(private configService: ConfigService) {}

  public createDataSource() {
    return new DataSource({
      type: 'mysql',
      host: this.configService.get<string>('DB_HOST') || 'localhost',
      port: 3306,
      username: this.configService.get<string>('DB_USER') || 'root',
      password: this.configService.get<string>('DB_PASSWORD') || 'root',
      database: this.configService.get<string>('DB_NAME') || 'local',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }).initialize();
  }
}

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async (configService: ConfigService) => {
      const databaseProvider = new DatabaseProvider(configService);
      return databaseProvider.createDataSource();
    },
    inject: [ConfigService],
  },
];