import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import App from "../App";
import UserDetail from "../components/UserDetail";
import { getUser } from "../utils/getUser";

beforeEach(() => {
  fetch.resetMocks();
});

// describe("Testing User Details Component", () => {
it("loading text showing while api request is in progress", async () => {
  render(<App />);
  const loading = screen.getByText("Loading...");
  expect(loading).toBeInTheDocument();
  // await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
});

it("Api success and fetch user calls", async () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      name: "Leanne Graham",
      email: "Sincere@april.biz",
    })
  );
  const data = await getUser();
  expect(data.name).toEqual("Leanne Graham");
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    `https://jsonplaceholder.typicode.com/users/1`
  );
  render(<UserDetail user={data} />);
  const username = await screen.findByText("Leanne Graham");
  expect(username).toBeInTheDocument();
});

it("Api fails with user fetch calls", async () => {
  fetch.mockReject(() => "API failure");
  const data = await getUser();
  expect(data).toEqual(null);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    `https://jsonplaceholder.typicode.com/users/1`
  );
  //   render(<App />);
  //   const errorMessage = await screen.findByText("API failure");
  //   console.log(errorMessage);
});

// test("user's name is rendered", async () => {
//   render(<App />);
//   const username = await screen.findByText("Leanne Graham");
//   expect(username).toBeInTheDocument();
// });

//   test("error message is shown", async () => {
//     window.fetch.mockImplementationOnce(() => {
//       return Promise.reject({ message: "API is down" });
//     });

//     render(<App />);

//     const errorMessage = await screen.findByText("API is down");
//     expect(errorMessage).toBeInTheDocument();
//   });
// });
