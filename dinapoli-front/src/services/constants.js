export const getItems = item => `http://localhost:8055/items/${item}`;

export const getItemsFilter = (item, param) => `http://localhost:8055/items/${item}?filter${param}`;

export const stringFour = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
  }