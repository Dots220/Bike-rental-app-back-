import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
  }

  @Get()
  public async getRentBicycle() {
    await this.rentBicycleService.checkRentStatus();
    const res = await this.bicycleService.getRentBicycle();
    return res;
  }

  @Delete('/:id')
  public async cancelRent(@Param() params) {
    await this.rentBicycleService.cancelRent(params.id);
  }
}
