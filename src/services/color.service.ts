import { Color } from '../models/Color';

function getAll() {
  return Color.findAll();
}

export const colorService = { getAll };