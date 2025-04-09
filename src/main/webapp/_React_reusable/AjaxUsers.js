const AjaxUsers = (url) => {
  console.log("AjaxUsers running");

  const [items, setItems] = React.useState([]);
  const [dbList, setDbList] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [filterInput, setFilterInput] = React.useState("");
  const [filteredList, setFilteredList] = React.useState([]);

  // Track current sort property and type
  const [sortProp, setSortProp] = React.useState(""); // Added
  const [sortType, setSortType] = React.useState(""); // Added

  React.useEffect(() => {
    ajax_alt(
      url,
      function (dbList) {
        if (dbList.dbError.length > 0) {
          console.log("Database error was " + dbList.dbError);
          setError(dbList.dbError);
        } else {
          console.log(
            "in AjaxUsers, here is web user list (on the next line):"
          );
          console.log(dbList.webUserList);
          setItems(dbList.webUserList);
          jsSort(dbList.webUserList, "userEmail", "text");
          setDbList(dbList.webUserList);
          setFilteredList(dbList.webUserList);
        }
        setIsLoading(false);
      },
      function (msg) {
        setError(msg);
        setIsLoading(false);
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
    window.location.hash = "#/userInsert";
  }

  console.log("items for UserTable on next line");
  console.log(items);
  return (
    <div className="clickSort">
      <h1>
        Web User List{" "}
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
              onClick={() => sortByProp("userEmail", "text")}
              className="textAlignLeft"
            >
              Email
            </th>
            <th
              onClick={() => sortByProp("userPassword", "text")}
              className="textAlignLeft"
            >
              Password
            </th>
            <th className="textAlignCenter">Image</th>
            <th
              onClick={() => sortByProp("birthday", "date")}
              className="textAlignCenter"
            >
              Birthday
            </th>
            <th
              onClick={() => sortByProp("membershipFee", "number")}
              className="textAlignRight"
            >
              Membership Fee
            </th>
            <th
              onClick={() => sortByProp("userRoleType", "text")}
              className="textAlignLeft"
            >
              Role
            </th>
            <th
              onClick={() => sortByProp("errorMsg", "text")}
              className="textAlignLeft"
            >
              Error
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((item, index) => (
            <tr key={item.webUserId}>
              <td className="textAlignLeft">{item.userEmail}</td>
              <td className="textAlignLeft">{item.userPassword}</td>
              <td className="shadowImage textAlignCenter">
                <img src={item.userImage} />
              </td>
              <td className="textAlignCenter">{item.birthday}</td>
              <td className="textAlignRight">{item.membershipFee}</td>
              <td className="nowrap textAlignLeft">
                {item.userRoleId} {item.userRoleType}
              </td>
              <td className="textAlignLeft">{item.errorMsg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
