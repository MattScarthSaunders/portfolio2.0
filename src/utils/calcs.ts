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

export const calculateAspectRatioUnitAgnostic = (
  width: number,
  height: number,
  maxW: number,
  maxH: number
) => {
  const aspectRatio = width / height

  // Initialize the width and height in vh
  let newWidth = maxW
  let newHeight = maxH

  // Check if the aspect ratio is wider than the maximum allowed
  if (aspectRatio > maxW / maxH) {
    newWidth = maxW
    newHeight = maxW / aspectRatio
  } else {
    newHeight = maxH
    newWidth = maxH * aspectRatio
  }

  return { newWidth, newHeight }
}
