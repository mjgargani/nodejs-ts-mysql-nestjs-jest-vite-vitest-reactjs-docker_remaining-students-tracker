import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

class EnvironmentProvider {
  constructor(private configService: ConfigService) {}

  public get(envName: string, defaultValue: unknown) {
    return this.configService.get<unknown>(envName) || defaultValue;
  }
}

class Environment {
  constructor(private provider: EnvironmentProvider) {}

  public getDbHost() {
    return this.provider.get('PGHOST', 'localhost') as string;
  }

  public getDbPort() {
    return this.provider.get('PGPORT', 5432) as number;
  }

  public getDbUser() {
    return this.provider.get('PGUSER', 'user') as string;
  }

  public getDbPassword() {
    return this.provider.get('PGPASSWORD', 'password') as string;
  }

  public getDbDatabase() {
    const context = this.provider
      .get('NODE_ENV', 'development') as "development" | "production";
    return context;
  }
}

export default new Environment(new EnvironmentProvider(configService));