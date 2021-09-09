import { Module } from '@nestjs/common';
import { BicycleController } from './bicycle.controller';
import { BicycleService } from './bicycle.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bicycle } from './bicycle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bicycle])],
  controllers: [BicycleController],
  providers: [BicycleService],
  exports: [BicycleService],
})
export class BicycleModule {}
