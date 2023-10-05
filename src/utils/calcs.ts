export const calculateYValue = (length: number, index: number) => {
  const gap = 3
  const inverse = length - 1 - index
  const height = 8
  const base = inverse * (gap + height)
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
