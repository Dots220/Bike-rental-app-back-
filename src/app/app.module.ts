import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bicycle } from '../modules/bicycle/bicycle.entity';
import { RentBicycle } from '../modules/rent-bicycle/rent-bicycle.entity';
import { BicycleModule } from '../modules/bicycle/bicycle.module';
import { RentBicycleModule } from '../modules/rent-bicycle/rent-bicycle.module';
import { BicycleService } from '../modules/bicycle/bicycle.service';
import { BicycleController } from '../modules/bicycle/bicycle.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3010,
      username: 'postgres',
      password: 'qQ12345!',
      entities: [Bicycle, RentBicycle],
      synchronize: true,
    }),
    BicycleModule,
    RentBicycleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
