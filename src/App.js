import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.log("error");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((user) => {
        return <div key={user.id}>{user.name + user.email + user.address.city + user.address.street + user.address.zipcode}</div>;
      })}
    </div>
  );
};

export default App;
