// TODO: Put the project ID in a config file.
export default function(image, width = 300, height = 300) {
  if(!image || !image.secret) return '';
  return `https://images.graph.cool/v1/cj5xz8szs28930145gct82bdj/${image.secret}/${width}x${height}`;
}
