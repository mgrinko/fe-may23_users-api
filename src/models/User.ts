import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Color } from './Color';

@Table({
  tableName: 'users',
  modelName: 'User',
})
export class User extends Model {
  @Column
  name: string;

  @ForeignKey(() => Color)
  @Column
  carColorId: number;
}
