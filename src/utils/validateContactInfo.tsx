interface Props {
  name: string;
  email: string;
  phone: string;
}

const validateContactInfo = ({ name, email, phone }: Props) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  let error: Partial<Props> = {};

  if (name === "") {
    error.name = "This field is required";
  }

  if (email === "") {
    error.email = "This field is required";
  } else if (!emailPattern.test(email)) {
    error.email = "Enter a valid email";
  }

  if (phone === "") {
    error.phone = "This field is required";
  }

  return error;
};

export default validateContactInfo;
