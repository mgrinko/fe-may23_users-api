import { Color } from '../models';

function getAll() {
  return Color.findAll();
}

export const colorService = { getAll };