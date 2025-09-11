import Greeting from "./Greeting";

const App = () => {

  /*const fruits = ["apple", "banana", "mango", "kiwi"];
  const products = ["rice", "salt", "sugar"];
  return(
    <div>
      <h1>learn map in react</h1>
      <ul>
        {fruits.map((fruit, index) => ( 
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <ul>
        {products.map((product, index) => ( 
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );*/

  const friends =["Luffy", "Zoro", "Sanji", "Usopp"];

  return(
    <div>
      {friends.map((friend, index) => (
        <Greeting key={index} name={friend}></Greeting>
      ))}
    </div>
  );

}

export default App;