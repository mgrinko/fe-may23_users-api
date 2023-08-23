import { colorService } from '../services/color.service';
import { ControllerAction } from '../types';

const getAll: ControllerAction = (req, res) => {
  const colors = colorService.getAll();

  res.send(colors);
};

export const colorController = { getAll };