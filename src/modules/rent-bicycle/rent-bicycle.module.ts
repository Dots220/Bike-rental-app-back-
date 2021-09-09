import { Module } from '@nestjs/common';
import { RentBicycleService } from './rent-bicycle.service';
import { RentBicycleController } from './rent-bicycle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RentBicycle } from './rent-bicycle.entity';
import { BicycleModule } from "../bicycle/bicycle.module";


@Module({
  imports: [TypeOrmModule.forFeature([RentBicycle]),BicycleModule],
  providers: [RentBicycleService],
  controllers: [RentBicycleController],
  exports: [RentBicycleService],
})
export class RentBicycleModule {}
