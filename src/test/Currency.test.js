import { convert } from "../utils/currency";

beforeEach(() => {
  fetch.resetMocks();
});

it("converts correctly", async () => {
  fetch.mockResponseOnce(JSON.stringify({ rates: { CAD: 1.42 } }));
  const data = await convert("USD", "CAD");
  expect(data).toEqual(1.42);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    `http://api.exchangeratesapi.io/latest?access_key=982309a3deb3ea23b286cea8170358fd&from=USD&to=CAD&amount=1`
  );
});

it("catches erros and return null", async () => {
  fetch.mockReject(() => "API failure");
  const data = await convert("USD", "CAD");
  expect(data).toEqual(null);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    `http://api.exchangeratesapi.io/latest?access_key=982309a3deb3ea23b286cea8170358fd&from=USD&to=CAD&amount=1`
  );
});
