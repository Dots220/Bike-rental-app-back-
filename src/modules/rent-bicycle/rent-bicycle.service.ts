import { Injectable } from '@nestjs/common';
import { RentBicycle } from './rent-bicycle.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { CreateBicycleDto } from '../bicycle/dto/create-bicycle.dto';
import { CreateRentBicycleDto } from './dto/create-rent-bicycle.dto';
import { BicycleService } from '../bicycle/bicycle.service';
import { Bicycle } from '../bicycle/bicycle.entity';

@Injectable()
export class RentBicycleService {
  constructor(
    @InjectRepository(RentBicycle)
    private rentBicycleRepository: Repository<RentBicycle>,
  ) {}

  public async create(Time: number, bicycle: Bicycle): Promise<RentBicycle> {
    const rentDate = Date.now();
    const rentTime = Time * 3600000;
    const RentBike = this.rentBicycleRepository.save({
      rentTime,
      rentDate,
      bicycle,
    });
    return RentBike;
  }

  public async getRentBicycle() {
    return await getConnection()
      .createQueryBuilder()
      .select('rentBicycle')
      .from(RentBicycle, 'rentBicycle')
      .getMany();
  }

  public async checkRentStatus() {
    const nowDate = Date.now();
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(RentBicycle)
      .where(':nowDate - rentDate > rentTime', {
        nowDate,
      })
      .execute();
  }

  public async cancelRent(idProps: number) {
    await this.rentBicycleRepository.delete({ bicycleId: idProps });
  }
}
