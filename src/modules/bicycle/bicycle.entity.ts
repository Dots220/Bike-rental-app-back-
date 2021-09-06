import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bicycle' })
export class Bicycle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column({ default: false })
  checked: boolean;

  // @ManyToOne(() => User, (user) => user.todos)
  // user: User
}
