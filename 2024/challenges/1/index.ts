const lista = [3, 4, 2, 1, 3, 3];
const listb = [4, 3, 5, 3, 9, 3];

const handle = (lista: number[], listb: number[]): number => {
  return lista
    .sort()
    .map((val, i) => {
      return Math.abs(val - listb.sort()[i]);
    })
    .reduce((acc, val) => acc + val, 0);
};

export { handle };
