export const withdraw = (clients, balances, client, amount) => {
  return balances[clients.indexOf(client)] < amount
    ? -1
    : balances[clients.indexOf(client)] - amount;
};
