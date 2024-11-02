import { DataSource, DataSourceOptions } from 'typeorm';
import { Injectable } from '@nestjs/common';
import environmentProvider from 'src/utils/environment.provider';

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
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
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