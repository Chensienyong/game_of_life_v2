
def transpose(array):
  array = array[:]  # make copy to avoid changing original
  n = len(array)
  for i, row in enumerate(array):
    array[i] = row + [None for _ in range(n - len(row))]
  array = zip(*array)
  for i, row in enumerate(array):
    array[i] = [elem for elem in row if elem is not None]
  return array

