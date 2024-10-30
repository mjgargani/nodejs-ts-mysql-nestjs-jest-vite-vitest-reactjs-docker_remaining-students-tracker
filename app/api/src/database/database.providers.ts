import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseProvider {
  constructor(private configService: ConfigService) {}

  public createDataSource() {
    return new DataSource({
      type: 'mysql',
      host: this.configService.get<string>('MYSQL_HOST') || 'localhost',
      port: this.configService.get<number>('MYSQL_PORT') || 3306,
      username: this.configService.get<string>('MYSQL_USER'),
      password: this.configService.get<string>('MYSQL_PASSWORD'),
      database: this.configService.get<string>('MYSQL_DATABASE'),
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