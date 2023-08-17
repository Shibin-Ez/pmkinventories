const MessageBox = ({ user }) => {
  return (
    <div className="message-box">
      <h3 className="side-box-h3">Message</h3>
      Hello {user.name ? user.name : "Name"}, <br />
      your account for PMK Inventories has been created. <br />
      Kindly download the app via the following link: <br />
      https://www.wikipedia.org/ <br />
      <br />
      Mobile No: {user.mobileNo ? user.mobileNo : "987654321"} <br />
      Password : {user.passwordHash ? user.passwordHash : "****"}
    </div>
  );
};

export default MessageBox;
