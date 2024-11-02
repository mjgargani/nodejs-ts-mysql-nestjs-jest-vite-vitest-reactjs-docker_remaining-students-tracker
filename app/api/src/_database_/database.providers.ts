import { DataSource, DataSourceOptions } from 'typeorm';
import { Injectable } from '@nestjs/common';
import environmentProvider from 'src/_utils_/environment.provider';
import path from 'path';

@Injectable()
export class DatabaseProvider {
  constructor() {}

  public createDataSource() {
    const config: DataSourceOptions = {
      type: 'postgres',
      host: environmentProvider.getDbHost(),
      port: environmentProvider.getDbPort(),
      username: environmentProvider.getDbUser(),
      password: environmentProvider.getDbPassword(),
      database: environmentProvider.getDbName(),
      schema: environmentProvider.getDbSchema(),
      entities: [path.join(__dirname, '..', '**', '*.entity{.ts,.js}')],
      migrations: [path.join(__dirname, '..', '_migrations_', environmentProvider.getDbSchema(), '*{.ts,.js}')],
      synchronize: true,
    };
    const dataSource = new DataSource(config);
    return dataSource;
  }
}

const databaseProvider = new DatabaseProvider();
export const dataSource = databaseProvider.createDataSource();

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return dataSource.initialize();
    },
  },
];