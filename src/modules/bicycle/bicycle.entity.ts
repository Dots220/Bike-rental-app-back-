import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RentBicycle } from '../rent-bicycle/rent-bicycle.entity';

@Entity({ name: 'bicycle' })
export class Bicycle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: 'Custom' | 'Road' | 'Mountain';

  @Column()
  rent: number;

  @OneToOne(() => RentBicycle, (rentBicycle) => rentBicycle.bicycle)
  rentBicycle: RentBicycle;
}
