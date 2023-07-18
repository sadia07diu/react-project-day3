import { useState } from "react";

const ImmutableArray = () => {
    const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const AddToList = () => {
    list.push(item);
    setList([...list]);
  };
  const RemoveItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };
  const completed = (e) => {
    e.target.innerText = 'pending';
    e.target.innerText == 'pending' ? console.log('pending') : console.log('completed')
    

  }

  return (
    <div>
      <div className="container m-4 ">
        <section className="bg-success p-4">
          <h1 className="text-center bg-light">Welcome to todo world</h1>
          <input
            onChange={(e) => setItem(e.target.value)}
            type="text"
            placeholder="Enter a list item"
          />
          <button onClick={AddToList}>Add</button>

        </section>
        <section className="bg-info p-4">
          <table >
            <tbody >
              <tr className="bg-success p-4">
                <th>List Item</th>
                <th>Status</th>
                <th>Action</th>
              </tr>

              {list.length !== 0 ? (
                list.map((element, index) => {

                  return (
                    <>
                      <tr className="bg-light p-4">
                        <td>{element}</td>
                        <td><button onClick={(e)=>completed(e)}
                        >
                          Completed</button></td>
                        <td>
                          <button
                            onClick={() => {
                              RemoveItem(index);
                            }}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    </>

                  );
                })
              ) : (

                <tr></tr>
              )}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default ImmutableArray;
