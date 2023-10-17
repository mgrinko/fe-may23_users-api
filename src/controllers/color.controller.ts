import { Color } from '../models';
import { colorService } from '../services/color.service';
import { ControllerAction } from '../types';

// api/colors?offset=5&limit=5&sort=name
const getAll: ControllerAction = async (req, res) => {
  const {
    offset = '0',
    limit = '2',
    sort = 'id',
  } = req.query;

  if (typeof sort !== 'string'
    || !['id', 'name'].includes(sort)
    || typeof offset !== 'string'
    || typeof limit !== 'string'
  ) {
    res.sendStatus(422);
    return;
  }

  const colors = await Color.findAndCountAll({
    offset: +offset,
    limit: +limit,
    order: [
      [sort, 'ASC'],
    ]
  });

  res.send(colors);
};

export const colorController = { getAll };