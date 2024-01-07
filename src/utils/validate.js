export const checkValidate = (email, password, name) => {
  const nameValid = name === "" ? false : true;
  const emailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const passwordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (name && !nameValid) return "Please enter name";
  if (!emailValid) return "Please enter valid email";
  if (!passwordValid) return "Please enter valid password";

  return null;
};
