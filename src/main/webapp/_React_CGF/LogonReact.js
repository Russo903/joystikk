function LogonReact() {
  // all inputs always need State
  //is loading will track whether we are still waiting for response
  // msg will display errors

  const [emailInput, setEmailInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [msg, setMsg] = React.useState("");

  function logonClick() {
    setIsLoading(true);
    setMsg(""); // Clear previous messages

    const url = `webUser/logon?email=${encodeURIComponent(
      emailInput
    )}&password=${encodeURIComponent(passwordInput)}`;
    console.log("Logon URL:", url);

    ajax_alt(
      url,
      function (obj) {
        console.log("Logon response:", obj);
        if (obj.errorMsg.length > 0) {
          setMsg(<strong>{obj.errorMsg}</strong>);
        } else {
          setMsg(
            <div class="profile-card">
              <h2>Welcome, {obj.userEmail}!</h2>
              <p>Web User ID: {obj.webUserId}</p>
              <p>Birthday: {obj.birthday}</p>
              <p>Membership Fee: {obj.membershipFee}</p>
              <p>
                User Role: {obj.userRoleId} - {obj.userRoleType}
              </p>
              <p>
                <img src={obj.userImage} alt="User Image" />
              </p>
            </div>
          );
        }
        setIsLoading(false);
      },
      function (errorMsg) {
        console.log("AJAX error:", errorMsg);
        setMsg("Logon failed: " + errorMsg);
        setIsLoading(false);
      }
    );
  }

  if (isLoading) {
    return <div class="loading">Loading...</div>;
  }

  return (
    <div>
      <div class="login-container">
        <div class="login-credentials">
          <h2 class="login-title">Email</h2>
          <input
            type="text"
            onChange={(e) => setEmailInput(e.target.value)}
            value={emailInput}
          />
          <h2>Password</h2>
          <input
            type="password"
            onChange={(e) => setPasswordInput(e.target.value)}
            value={passwordInput}
          />
          <button onClick={logonClick}>Logon</button>
        </div>
      </div>
      <div>{msg}</div>
    </div>
  );
}
