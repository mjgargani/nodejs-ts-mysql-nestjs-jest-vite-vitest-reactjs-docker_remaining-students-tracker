import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

@Injectable()
export class EnvironmentProvider {
  constructor(private configService: ConfigService) {}

  public get(envName: string, defaultValue: unknown) {
    return this.configService.get<unknown>(envName) || defaultValue;
  }

  public set(envName: string, value: unknown) {
    return this.configService.set<unknown>(envName, value);
  }
}