export class CreateBicycleDto {
  readonly name: string;

  readonly type: 'Custom' | 'Road' | 'Mountain';

  readonly rent: number;

  readonly rentStatus: boolean;
}
