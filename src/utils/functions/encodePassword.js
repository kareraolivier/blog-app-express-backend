import bcrypt from "bcrypt";

const saltRounds = 1;
 
export const encode = async (password) => {
  try {
    let hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (err) {
    console.error("Error occurred while hashing password:", err);
    throw err;
  }
};

export const getDecodedPassword = async (password, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    if (isMatch) {
      return password;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};
