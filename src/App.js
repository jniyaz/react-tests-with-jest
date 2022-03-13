import ToggleTheme from "./components/ToggleTheme";
import ListItems from "./components/ListItems";
import { useEffect, useState } from "react";
import UserDetail from "./components/UserDetail";
import { getUser } from "./utils/getUser";
import { convert } from "./utils/currency";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getUser()
      .then((data) => setUser(data))
      .catch((err) => setError(err));

    // convert("USD", "CAD", 1).then((data) => {
    //   console.log(data);
    // });
  }, []);

  return (
    <div>
      {/* test 1 - text present in the screen */}
      <div>
        <h3>Learn React Testing</h3>
      </div>
      {/* test 2 - user click event*/}
      <ToggleTheme />
      {/* test 3 - multiple elements */}
      <ListItems />
      {/* text 4 - async calls */}
      <div>{error ? <span>{error}</span> : ""}</div>
      <div>{user ? <UserDetail user={user} /> : <span>Loading...</span>}</div>
      {/* Test 5 */}
      <div></div>
    </div>
  );
}

export default App;
