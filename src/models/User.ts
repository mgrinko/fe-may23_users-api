import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
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
  // @PrimaryKey
  // @AllowNull(false)
  // @AutoIncrement
  // @Column({
  //   type: DataType.NUMBER
  // })
  // id: number;
  
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
