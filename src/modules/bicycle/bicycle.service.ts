import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { Bicycle } from './bicycle.entity';
import { CreateBicycleDto } from './dto/create-bicycle.dto';
import { RentBicycle } from '../rent-bicycle/rent-bicycle.entity';

@Injectable()
export class BicycleService {
  constructor(
    @InjectRepository(Bicycle)
    private bicycleRepository: Repository<Bicycle>,
  ) {}

  public async create(bicycle: CreateBicycleDto) {
    return this.bicycleRepository.save(bicycle);
  }

  public async findById(id: number) {
    return this.bicycleRepository.findOne({ id });
  }

  public async deleteBicycle(Id: number) {
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Bicycle)
      .where('id = :Id', { Id })
      .execute();
  }

  // public async setRentStatus(Id: number) {
  //   await getConnection()
  //     .createQueryBuilder()
  //     .update(Bicycle)
  //     .set({ rentStatus: true })
  //     .where('id = :id', { id: Id })
  //     .execute();
  // }

  public async getAvailableBicycle() {
    // const rentBicycleId = await getConnection()
    //   .createQueryBuilder()
    //   .select('bicycleId')
    //   .from(RentBicycle,'rentBicycle rb')
    //   .getMany();

    // const rentBicycleId = await this.bicycleRepository.manager.query(
    //   `SELECT "bicycleId" from "rentBicycle"`,
    // );
    //
    const res = await this.bicycleRepository.manager.query(
      `SELECT * from bicycle b WHERE id not IN (SELECT "bicycleId" from "rentBicycle")`,
    );

    return res;

    // const BicycleId = await getConnection()
    //   .createQueryBuilder()
    //   .select('bicycle')
    //   .from(Bicycle, 'bicycle')
    //   .where('')
    //   .getMany();
    //
    // const bicycle = await getConnection()
    //   .createQueryBuilder()
    //   .select('bicycle')
    //   .from(Bicycle, 'bicycle')
    //   .where('id = :id', { id })
    //   .orderBy('todos.id')
    //   .getMany();
  }
}
