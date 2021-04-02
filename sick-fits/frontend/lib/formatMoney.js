export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionalDigits: 2,
  };

  // check if it's a clean dollar ammount
  if (amount % 100 === 0) {
    options.minimumFractionalDigits = 0;
  }

  const formatter = Intl.NumberFormat('en-US', options);

  return formatter.format(amount / 100);
}
