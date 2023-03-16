export const register = async (req, res) => {
  try {
    res.status(200).json("Registered successfully");
  } catch (err) {
    console.error(`error: ${err}`);
    res.status(500).json({ err });
  }
};

export const login = async (req, res) => {
  try {
    res.status(200).json("logged in successfully");
  } catch (err) {
    console.error(`error: ${err}`);
    res.status(500).json({ err });
  }
};

export const logout = async (req, res) => {
  try {
    res.status(200).json("logged out successfully");
  } catch (err) {
    console.error(`error: ${err}`);
    res.status(500).json({ err });
  }
};
