export default function(amount) {
  return '$' +  (amount / 100).toLocaleString();
}
