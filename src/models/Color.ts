import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'colors',
  modelName: 'Color',
  timestamps: false,
})
export class Color extends Model {
  @Column
  name: string;
}
