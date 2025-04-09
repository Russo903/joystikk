function GetProfileReact() {
  const [msg, setMsg] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    setMsg(""); // Clear previous messages

    const url = `webUser/getProfile`;

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
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>{msg}</div>
    </div>
  );
}
