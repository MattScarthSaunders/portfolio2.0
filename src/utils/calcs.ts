export const calculateYValue = (length: number, index: number) => {
  const gap = 2
  const inverse = length - 1 - index
  const height = 3
  const base = inverse * (gap + height) + 1
  return base
}

export const calculateLeftValue = (length: number, index: number) => {
  const gap = 3
  const inverse = length - 1 - index
  // negative 50% of project container width + (inverse of index * gap between labels) + (inverse of index * 0.5 because screenheight is approx half of screenwidth)
  const base = -25 + inverse * gap + inverse * 0.7
  return base
}
