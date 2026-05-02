import { Injectable } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';
import { DummyService } from './dummy/dummy.service';

@Injectable()
export class AppService {
  constructor(
    private readonly dummyService: DummyService,
    private readonly loggerService: LoggerService,
  ) {}

  getHello(): string {
    return this.loggerService.log(`Hello World! ${this.dummyService.work()}`);
  }
}
