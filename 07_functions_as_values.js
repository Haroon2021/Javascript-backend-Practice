const notifyByEmail = (email) => {
  return `Email sent to: <${email}>`;
};

const notifyByText = (phoneno) => {
  return `Text sent to: <${phoneno}>`;
};

const notify = (phonenooremail, sendmessage) => {
  return sendmessage(phonenooremail);
};

console.log(notify("hello@makers.tech.test", notifyByEmail));

console.log(notify("+10000000000", notifyByText));
