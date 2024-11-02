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
    return this.provider.get('POSTGRES_USER', 'postgres') as string;
  }

  public getDbPassword() {
    return this.provider.get('POSTGRES_PASSWORD', 'strong_password') as string;
  }

  public getDbName() {
    return this.provider.get('POSTGRES_DB', 'postgres') as string;;
  }

  public getDbSchema() {
    const context = this.provider
      .get('NODE_ENV', 'development') as "development" | "production";
    return context;
  }
}

export default new Environment(new EnvironmentProvider(configService));