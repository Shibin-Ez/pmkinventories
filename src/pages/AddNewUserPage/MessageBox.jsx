const MessageBox = ({ user }) => {
  return (
    <div className="message-box">
      <h3 className="side-box-h3">Message</h3>
      Hello {user.name ? user.name : "Name"}, <br />
      your account for PMK Inventories has been created. <br />
      Kindly download the app via the following link: <br />
      https://tinyurl.com/2h2ajwcc <br />
      <br />
      User manual can be downloaded from the below link: <br />
      {user.manualLink ? user.manualLink : ""} <br />
      <br />
      User Id: {user.userId ? user.userId : "*****"} <br />
      Password : {user.passwordHash ? user.passwordHash : "****"}
    </div>
  );
};

export default MessageBox;
