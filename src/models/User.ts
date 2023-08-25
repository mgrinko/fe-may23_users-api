import { Optional } from 'sequelize';
import { Model, Table, Column, ForeignKey, BelongsTo, AllowNull } from 'sequelize-typescript';
import { Color } from './Color';

interface UserAttributes {
  id: number;
  name: string;
  carColorId: number;
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

@Table({
  tableName: 'users',
  timestamps: false,
})
export class User extends Model<UserAttributes, UserCreationAttributes> {
  @AllowNull(false)
  @Column
  name: string;

  @ForeignKey(() => Color)
  @Column
  carColorId: number;

  @BelongsTo(() => Color)
  carColor: Color;
}
