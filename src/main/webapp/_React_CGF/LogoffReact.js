function LogoffReact() {
  const [msg, setMsg] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  function handleClick() {
    setIsLoading(true);
    setMsg(""); // Clear previous messages

    const url = `webUser/logoff`;

    ajax_alt(
      url,
      function (obj) {
        console.log("Logon response:", obj);
        if (obj.errorMsg.length > 0) {
          setMsg(<strong>{obj.errorMsg}</strong>);
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
    return <div>Loading...</div>;
  }

  return (
    <div class="logoff-center">
      <button class="btn-danger" onClick={handleClick}>
        Are you sure you want to Log out?
      </button>
      <div>{msg}</div>
    </div>
  );
}
