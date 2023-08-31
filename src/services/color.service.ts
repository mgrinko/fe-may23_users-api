import { Color } from '../models';

function getAll({ offset, limit, sort }) {
  return Color.findAll();
}

export const colorService = { getAll };