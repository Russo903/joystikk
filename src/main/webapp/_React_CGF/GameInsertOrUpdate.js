"use strict"; // not sure if this is needed in react...

const GameInsertOrUpdate = (props) => {
  // Determine if this is an Insert or an Update by checking the URL path for a colon.
  // If the path has ":" in it, then it's an update. Otherwise it's an insert.
  var action = "insert";
  var id = "";
  var url = props.location.pathname;
  console.log("url that invoked OtherInsertOrUpdate is " + url);
  if (url.search(":") > -1) {
    const url_list = url.split(":");
    id = url_list[url_list.length - 1];
    console.log("to update id " + id);
    action = "update";
  } else {
    console.log("to insert");
  }

  // State variable that holds all user-entered data for the "other" table.
  const [gameData, setGameData] = React.useState({
    game_id: "",
    game_title: "",
    image_url: "",
    rating: "",
    review: "",
    added_to_backlog: "",
    web_user_id: "",
    user_email: "", // This may be used for display after we fetch the record (join).
    errorMsg: "",
  });

  // State variable to hold the list of web users (for the pick-list).
  // The user will select a web_user (by userEmail) to tie to the new game record.
  const [webUserList, setWebUserList] = React.useState([]);

  // State variable that holds field-level error messages (including form-level).
  const [errorObj, setErrorObj] = React.useState({
    game_id: "",
    game_title: "",
    image_url: "",
    rating: "",
    review: "",
    added_to_backlog: "",
    web_user_id: "",
    errorMsg: "",
  });

  // So we do not render the component before we have data.
  const [isLoading, setIsLoading] = React.useState(true);

  // Helper function to safely copy an object and set a property (so React sees the change).
  const setProp = (obj, propName, propValue) => {
    var o = Object.assign({}, obj);
    o[propName] = propValue;
    return o;
  };

  // Convert user’s input object into JSON, then URI-encode it (same approach as sample code).
  const encodeGameInput = () => {
    var obj = {
      game_id: gameData.game_id,
      game_title: gameData.game_title,
      image_url: gameData.image_url,
      rating: gameData.rating,
      review: gameData.review,
      added_to_backlog: gameData.added_to_backlog,
      web_user_id: gameData.web_user_id,
    };
    console.log("Game input object about to be JSON encoded:");
    console.log(obj);
    return encodeURI(JSON.stringify(obj));
  };

  React.useEffect(() => {
    console.log(
      "AJAX call for webUser list so user can pick the web_user_id..."
    );

    // 1) Get the list of web users for the <select> tag
    ajax_alt(
      "webUser/getAll",
      function (obj) {
        // If there's a dbError in reading all users, show that error in user pick list area.
        if (obj.dbError && obj.dbError.length > 0) {
          console.log("DB error reading webUser list: " + obj.dbError);
          setErrorObj(setProp(errorObj, "web_user_id", obj.dbError));
          setIsLoading(false);
        } else {
          // Sort user list by email (alphabetically)
          obj.webUserList.sort(function (a, b) {
            if (a.userEmail > b.userEmail) {
              return 1;
            } else {
              return -1;
            }
          });
          setWebUserList(obj.webUserList);

          // Pre-select the first user in the pick list so there's always a valid selection
          // (unless it's an update, in which case we’ll override after the data fetch).
          if (obj.webUserList.length > 0) {
            setGameData(
              setProp(gameData, "web_user_id", obj.webUserList[0].webUserId)
            );
          }

          // 2) If this is an update, fetch the game record by ID.
          if (action === "update") {
            console.log("Now getting the game record with id " + id);
            ajax_alt(
              "other/getById?gameId=" + id,
              function (obj) {
                if (obj.errorMsg.length > 0) {
                  console.log(
                    "DB error trying to get the game record for update."
                  );
                  setErrorObj(setProp(errorObj, "errorMsg", obj.errorMsg));
                } else {
                  console.log("Game record for update (next line)");
                  console.log(obj);
                  // Pre-populate the gameData with data from DB.
                  setGameData(obj);
                }
                setIsLoading(false);
              },
              function (ajaxErrorMsg) {
                // AJAX error reading the existing game record
                setErrorObj(setProp(errorObj, "errorMsg", ajaxErrorMsg));
                setIsLoading(false);
              }
            );
          } else {
            // This is insert, not update
            setIsLoading(false);
          }
        }
      },
      function (ajaxErrorMsg) {
        // AJAX error reading all web users
        setErrorObj(setProp(errorObj, "errorMsg", ajaxErrorMsg));
        setIsLoading(false);
      }
    );
  }, []); // empty array so it only runs once

  // The function that calls our insert or update API.
  const validate = () => {
    console.log("validate() - calling other/" + action);
    setIsLoading(true);
    ajax_alt(
      "other/" + action + "?jsonData=" + encodeGameInput(),
      function (obj) {
        // obj has field-level error messages or success message
        console.log("Field-level error messages from the server (next line):");
        console.log(obj);

        if (obj.errorMsg.length === 0) {
          // That means record was inserted (or updated) successfully
          obj.errorMsg = "Record Saved!";
        }
        setErrorObj(obj);
        setIsLoading(false);
      },
      function (ajaxErrorMsg) {
        const userFriendlyMsg =
          "Insert failed. Database is down or not connected (e.g., tunnel issue).";
        console.log("AJAX call failed: " + ajaxErrorMsg);
        setErrorObj(setProp(errorObj, "errorMsg", userFriendlyMsg));
        setIsLoading(false);
      }
    );
  };

  if (isLoading) {
    return <div> ... Loading ... </div>;
  }

  return (
    <table className="game-insert-form">
      <tbody>
        <tr className="form-row">
          <td className="form-label">Game Id</td>
          <td className="form-input">
            <input value={gameData.game_id} disabled />
          </td>
          <td className="form-error">{errorObj.game_id}</td>
        </tr>
        <tr className="form-row">
          <td className="form-label">Game Title</td>
          <td className="form-input">
            <input
              value={gameData.game_title}
              onChange={(e) =>
                setGameData(setProp(gameData, "game_title", e.target.value))
              }
            />
          </td>
          <td className="form-error">{errorObj.game_title}</td>
        </tr>
        <tr className="form-row">
          <td className="form-label">Image URL</td>
          <td className="form-input">
            <input
              value={gameData.image_url}
              onChange={(e) =>
                setGameData(setProp(gameData, "image_url", e.target.value))
              }
            />
          </td>
          <td className="form-error">{errorObj.image_url}</td>
        </tr>
        <tr className="form-row">
          <td className="form-label">Rating</td>
          <td className="form-input">
            <input
              value={gameData.rating}
              onChange={(e) =>
                setGameData(setProp(gameData, "rating", e.target.value))
              }
            />
          </td>
          <td className="form-error">{errorObj.rating}</td>
        </tr>
        <tr className="form-row">
          <td className="form-label">Review</td>
          <td className="form-input">
            <textarea
              value={gameData.review}
              onChange={(e) =>
                setGameData(setProp(gameData, "review", e.target.value))
              }
            />
          </td>
          <td className="form-error">{errorObj.review}</td>
        </tr>
        <tr className="form-row">
          <td className="form-label">Added To Backlog (Integer)</td>
          <td className="form-input">
            <input
              value={gameData.added_to_backlog}
              onChange={(e) =>
                setGameData(
                  setProp(gameData, "added_to_backlog", e.target.value)
                )
              }
            />
          </td>
          <td className="form-error">{errorObj.added_to_backlog}</td>
        </tr>
        <tr className="form-row">
          <td className="form-label">Web User</td>
          <td className="form-input">
            <select
              onChange={(e) =>
                setGameData(setProp(gameData, "web_user_id", e.target.value))
              }
              value={gameData.web_user_id}
            >
              {webUserList.map((u) => (
                <option key={u.webUserId} value={u.webUserId}>
                  {u.userEmail}
                </option>
              ))}
            </select>
          </td>
          <td className="form-error">{errorObj.web_user_id}</td>
        </tr>
        <tr className="form-row">
          <td colSpan="3" className="form-button-row">
            <button type="button" onClick={validate}>
              Save
            </button>
            <div className="form-main-error">{errorObj.errorMsg}</div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}; // end of OtherInsertOrUpdate component

/* 
    Example of StringDataOther after successful insert might look like:
  
    {
      "game_id": "15",
      "game_title": "Halo Infinite",
      "image_url": "https://somewhere.com/halo.jpg",
      "rating": "9/10",
      "review": "2025-03-31",
      "web_user_id": "7",
      "user_email": "person7@somewhere.com",
      "added_to_backlog": "1",
      "errorMsg": ""
    }
  */
