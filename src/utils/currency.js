async function convert(from, to, amount = 1) {
  // http://api.exchangeratesapi.io/v1/latest?access_key=982309a3deb3ea23b286cea8170358fd&format=1
  //  http://api.exchangeratesapi.io/v1/latest?access_key=982309a3deb3ea23b286cea8170358fd&symbols=USD,AUD,CAD,INR,MYR&format=1
  try {
    const result = await fetch(
      `http://api.exchangeratesapi.io/latest?access_key=982309a3deb3ea23b286cea8170358fd&from=${from}&to=${to}&amount=${amount}`
    );
    const data = await result.json();
    return data.rates[to];
  } catch (e) {
    return null;
  }
}

export { convert };
