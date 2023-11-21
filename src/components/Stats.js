export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈"
          : `💼 You have ${numItems} items on your list, and you already packed
       ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}


// import { useState } from "react";
// import "./styles.css";


// export default function App() {
// const[price, setPrice] = useState("")
// const[me, setMe] = useState("");
// const[friend, setFriend] = useState("");

// const total = price + me 

//   return (
//     <div>
//      <p>How much was the bill?<input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="0"/>
//       </p>
//      <p>How did you like the service?<select value={me} onChange={(e)=> setPrice(e.target.value)}>
//        <option>Dissatisfied 0%</option>
//        <option  value="5">It was okay (5%)</option>
//        <option>It was good (10%)</option>
//        <option>Absolutely amazing! (20%)</option>
//        </select></p>
//      <p>How did your friend like the service?<select value={price} onChange={(e)=> setPrice(e.target.value)}>
//        <option>Dissatisfied 0%</option>
//        <option>It was okay (5%)</option>
//        <option>It was good (10%)</option>
//        <option>Absolutely amazing! (20%)</option>
//        </select></p>
//    <div className="text-div">
//      {price&&<p className="text">You Pay ${price} (${price} + ${total})</p>}
//    </div>
//     </div>
//   );
// }

