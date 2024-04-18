import * as ref from '../_config';

export const addClassItem = (item, className) => {
  document[ref._querySelector](item)?.[ref._classList][ref._add](className);
};

export const removeClassItem = (item, className) => {
  document[ref._querySelector](item)?.[ref._classList][ref._remove](className);
};

export const toggleClassItem = (item, className) => {
  document[ref._querySelector](item)?.[ref._classList][ref._toggle](className);
};
