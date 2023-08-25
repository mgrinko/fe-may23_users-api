import { colorService } from '../services/color.service';
import { ControllerAction } from '../types';

const getAll: ControllerAction = async (req, res) => {
  const colors = await colorService.getAll();

  res.send(colors);
};

export const colorController = { getAll };
