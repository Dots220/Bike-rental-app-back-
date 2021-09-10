import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BicycleService } from './bicycle.service';
import { CreateBicycleDto } from './dto/create-bicycle.dto';
import { RentBicycleService } from '../rent-bicycle/rent-bicycle.service';

@Controller('bicycle')
export class BicycleController {
  constructor(
    private bicycleService: BicycleService,
    private rentBicycleService: RentBicycleService,
  ) {}

  @Post()
  public async create(@Body() bicycle: CreateBicycleDto) {
    console.log(bicycle);
    const res = await this.bicycleService.create(bicycle);
    return res;
  }

  @Delete('/:id')
  public async delete(@Param() params) {
    await this.bicycleService.deleteBicycle(params.id);
  }

  @Get()
  public async getAvailable() {
    await this.rentBicycleService.checkRentStatus();
    const availableBicycle = await this.bicycleService.getAvailableBicycle();
    return availableBicycle;
  }
}
