import { forwardRef, Module } from '@nestjs/common';
import { BicycleController } from './bicycle.controller';
import { BicycleService } from './bicycle.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bicycle } from './bicycle.entity';
import { RentBicycleModule } from '../rent-bicycle/rent-bicycle.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Bicycle]),
    forwardRef(() => RentBicycleModule),
  ],
  controllers: [BicycleController],
  providers: [BicycleService],
  exports: [BicycleService],
})
export class BicycleModule {}
