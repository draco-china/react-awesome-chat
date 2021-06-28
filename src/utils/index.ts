/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-29 04:08:52
 * @LastEditTime: 2021-06-29 04:14:39
 */
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';

dayjs.extend(isToday);

export const DateFormat = (
  date?: string | number | Date | dayjs.Dayjs,
  complete?: boolean,
) => {
  let format = complete ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
  if (dayjs(date).isToday()) {
    format = complete ? 'HH:mm:ss' : 'HH:mm';
  }
  if (dayjs(date).format('YYYY') === dayjs().format('YYYY')) {
    format = complete ? 'MM-DD HH:mm:ss' : 'MM-DD';
  }
  return dayjs(date).format(format);
};
