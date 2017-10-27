import { imageEndpoint } from '../config';

export default function(image, width = 300, height = 300) {
  if (!image || !image.secret) return '';
  return `${imageEndpoint}/${image.secret}/${width}x${height}`;
}
