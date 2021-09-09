import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Bicycle } from '../bicycle/bicycle.entity';

@Entity({ name: 'rentBicycle' })
export class RentBicycle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'bigint' })
  rentTime: number;

  @Column({ type: 'bigint' })
  rentDate: number;

  @Column()
  bicycleId: number;

  @OneToOne(() => Bicycle, (bicycle) => bicycle.rentBicycle)
  @JoinColumn()
  bicycle: Bicycle;
}
