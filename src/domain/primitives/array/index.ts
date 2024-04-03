export const getShuffledList = <T>({
  itemList,
}: {
  itemList: Array<T>;
}): Array<T> => {
  return itemList.sort(() => Math.random() - 0.5);
};
