const AjaxGames = (url) => {
  console.log("AjaxGames running");

  // Tell React that 'items' (an array of objects) is a state variable
  // that (when changed) should redisplay this component.
  // Set its initial value to [], an empty array.
  const [items, setItems] = React.useState([]);

  // this is the data initially read (just once) from the DB.
  const [dbList, setDbList] = React.useState([]);

  // Tell React that "error" is a state variable that (when changed)
  // should redisplay this component. Set its initial value to null.
  const [error, setError] = React.useState(null);

  const [isLoading, setIsLoading] = React.useState(true);

  // the user's input that filters the list.
  const [filterInput, setFilterInput] = React.useState("");

  // this is the filtered list.
  const [filteredList, setFilteredList] = React.useState([]);

  // Track current sort property and type
  const [sortProp, setSortProp] = React.useState(""); // Added
  const [sortType, setSortType] = React.useState(""); // Added

  // useEffect 2nd parameter is an array of elements that
  // (if any of those state variables change) should trigger the function specified
  // as the 1st useEffect parameter.
  // RUN ONCE PATTERN: If you put [] as 2nd param, it runs the 1st param (fn) once.
  React.useEffect(() => {
    // ajax_alt takes three parameters: the URL to read, Success Fn, Failure Fn.
    ajax_alt(
      url, // URL for AJAX call to invoke
      //"json/users.json", // URL for AJAX call to invoke
      //"webUser/getAll", // URL for AJAX call to invoke

      // success function (anonymous)
      function (dbList) {
        // success function gets obj from ajax_alt
        if (dbList.dbError.length > 0) {
          console.log("Database error was " + dbList.dbError);
          setError(dbList.dbError);
        } else {
          console.log(
            "in AjaxUsers, here is web user list (on the next line):"
          );
          console.log(dbList.otherList);
          setItems(dbList.otherList);
          setDbList(dbList.otherList);
          setFilteredList(dbList.otherList);
        }
        setIsLoading(false); // set isLoading last to prevent premature rendering.
      },

      // failure function (also anonymous)
      function (msg) {
        // failure function gets error message from ajax_alt
        setError(msg);
        setIsLoading(false); // set isLoading last to prevent premature rendering.
      }
    );
  }, []);

  function sortByProp(propName, sortType) {
    // sort the user list based on property name and type
    jsSort(dbList, propName, sortType);
    console.log("Sorted list is below");
    console.log(dbList);

    // For state variables that are objects or arrays, you have to do
    // something like this or else React does not think that the state
    // variable (dbList) has changed. Therefore, React will not re-render
    // the component.
    let listCopy = JSON.parse(JSON.stringify(dbList));
    setDbList(listCopy);
    setSortProp(propName); // Store current sort property
    setSortType(sortType); // Store current sort type
    let filteredCopy = filterObjList(listCopy, filterInput); // Reapply filter
    setFilteredList(filteredCopy); // Update filteredList with sorted and filtered data
  }

  const doFilter = (filterInputVal) => {
    let newList = filterObjList(dbList, filterInputVal);
    console.log(
      "function doFilter. filterInputVal is: " +
        filterInputVal +
        ". See filtered list on next line:"
    );
    console.log(newList);
    if (sortProp && sortType) {
      // If sorted, reapply sort
      jsSort(newList, sortProp, sortType);
    }
    setFilteredList(newList);
  };

  const clearFilter = () => {
    setFilterInput("");
    doFilter("");
  };

  if (isLoading) {
    console.log("Is Loading...");
    return <div> Loading... </div>;
  }

  if (error) {
    console.log("Error...");
    return <div>Error: {error} </div>;
  }

  function callInsert() {
    window.location.hash = "#/gameInsert";
  }

  console.log("items for UserTable on next line");
  console.log(items);
  return (
    <div className="clickSort">
      <h1>
        Games List{" "}
        <span style={{ cursor: "pointer" }} onClick={() => callInsert()}>
          {" "}
          ( + ){" "}
        </span>
      </h1>
      <div>
        Filterable User List  
        <input
          value={filterInput}
          onChange={(e) => setFilterInput(e.target.value)}
        />
         <button onClick={() => doFilter(filterInput)}>Search</button> 
        <button onClick={clearFilter}>Clear</button>
      </div>

      <table>
        <thead>
          <tr>
            <th
              onClick={() => sortByProp("game_title", "text")}
              className="textAlignLeft"
            >
              Title
            </th>
            <th className="textAlignCenter">Cover</th>
            <th
              onClick={() => sortByProp("rating", "number")}
              className="textAlignRight"
            >
              Rating
            </th>
            <th
              onClick={() => sortByProp("review", "text")}
              className="textAlignLeft"
            >
              Review
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((item, index) => (
            <tr key={item.game_id}>
              <td className="textAlignLeft">{item.game_title}</td>
              <td className="shadowImage textAlignCenter">
                <img src={item.image_url} />
              </td>
              <td className="textAlignRight">{item.rating}</td>
              <td className="textAlignLeft">{item.review}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
