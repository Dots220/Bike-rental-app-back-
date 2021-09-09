import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RentBicycleService } from './rent-bicycle.service';
import { CreateBicycleDto } from '../bicycle/dto/create-bicycle.dto';
import { BicycleService } from '../bicycle/bicycle.service';

@Controller('rentBicycle')
export class RentBicycleController {
  constructor(
    private rentBicycleService: RentBicycleService,
    private bicycleService: BicycleService,
  ) {}

  @Post('/:id')
  public async create(@Param() params, @Body() rentTime) {
    const bicycle = await this.bicycleService.findById(params.id);
    const res = await this.rentBicycleService.create(
      rentTime.rentTime,
      bicycle,
    );
    console.log(params.id);
  }

  @Get()
  public async getRentBicycle() {
    const availableBicycle = await this.bicycleService.getAvailableBicycle();
    return availableBicycle;
  }
}
