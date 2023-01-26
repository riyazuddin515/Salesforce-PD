import "./App.css";
import Questions from "./Questions";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "./FirebaseSetup";
import { useEffect, useState } from "react";
import axios from 'axios'

function App() {
  const [mockList, setMockiList] = useState([]);
  const [mockItem, setMockItem] = useState({});
  const [mock, setMock] = useState({})

  useEffect(() => {
    const fetch = async () => {
      const listRef = ref(storage);
      const res = await listAll(listRef);
      setMockiList(res.items);
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      if (mockItem._location) {
        const pathRef = ref(storage, mockItem._location.path_);
        const url = await getDownloadURL(pathRef);
        const mock = await axios.get(url);
        setMock(mock.data);
      }
    }
    fetch();
  }, [mockItem])

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Salesforce Platform Developer Mock Questions</h1>
      <div className="container">
        <div style={{ width: "20%" }}>
          <h2>Mock Questions List</h2>
          {mockList.length > 0 &&
            mockList.map((mi, index) => (
              <p
                key={index}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setMock(null)
                  setMockItem(mi);
                }}
              >
                {mi.name.replace(".json", "")}
              </p>
            ))}
        </div>
        <div style={{ width: "70%" }}>
          <h2>{mockItem.name?.replace(".json", "")}</h2>
          {mock?.questions?.map((question, index) => (
            <Questions key={question._id} question={question} index={index + 1}></Questions>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
