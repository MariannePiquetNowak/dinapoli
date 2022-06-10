export const getItems = item => `http://localhost:8055/items/${item}`;

export const getItemsFilter = (item, param) => `http://localhost:8055/items/${item}?filter${param}`;