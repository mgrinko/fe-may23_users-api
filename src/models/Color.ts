import { Table, Column, Model, Unique } from 'sequelize-typescript';

@Table({
  tableName: 'colors',
  timestamps: false,
})
export class Color extends Model {
  @Unique
  @Column
  name: string;
}
