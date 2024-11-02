import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseProvider {
  constructor(private configService: ConfigService) {}

  public createDataSource() {
    const config: DataSourceOptions = {
      type: 'mysql',
      host: this.configService.get<string>('MARIADB_HOST') || 'localhost',
      port: this.configService.get<number>('MARIADB_PORT') || 3306,
      username: this.configService.get<string>('MARIADB_USER') || 'user',
      password: this.configService.get<string>('MARIADB_PASSWORD') || 'password',
      database: this.configService.get<string>('MARIADB_DATABASE'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      synchronize: true,
    };
    const dataSource = new DataSource(config);
    return dataSource;
  }
}

const configService = new ConfigService();
const databaseProvider = new DatabaseProvider(configService);
export const dataSource = databaseProvider.createDataSource();

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return dataSource.initialize();
    },
    inject: [ConfigService],
  },
];