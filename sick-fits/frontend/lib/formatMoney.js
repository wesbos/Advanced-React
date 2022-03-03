export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  };

  // check if its a clean euro amount - we don't want to show 24.00€ - shows 24€
  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = Intl.NumberFormat('pt-PT', options);
  return formatter.format(amount / 100);
}
