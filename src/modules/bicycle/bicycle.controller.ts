import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BicycleService } from './bicycle.service';
import { CreateBicycleDto } from './dto/create-bicycle.dto';

@Controller('bicycle')
export class BicycleController {
  constructor(private bicycleService: BicycleService) {}

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
    const availableBicycle = await this.bicycleService.getAvailableBicycle();
    return availableBicycle;
  }
}
