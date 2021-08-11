export default function formatMoney(amount = 0) {
  const formatter = Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: amount % 100 === 0 ? 0 : 2,
  });
  console.log({ amount, answer: amount % 100 });
  return formatter.format(amount);
}
