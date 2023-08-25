import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Color } from './Color';
import { Optional } from 'sequelize';

interface UserAttributes {
  id: number;
  name: string;
  carColorId: number;
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

@Table({
  tableName: 'users',
  modelName: 'User',
  timestamps: false,
})
export class User extends Model<UserAttributes, UserCreationAttributes> {
  @Column
  name: string;

  @ForeignKey(() => Color)
  @Column({
    field: 'car_color_id'
  })
  carColorId: number;

  @BelongsTo(() => Color)
  carColor: Color;
}
