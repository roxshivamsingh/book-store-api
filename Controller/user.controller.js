import prisma from "../DB/db.config.js";

export const fetchUsers = async (req, res) => {
  const users = await prisma.User.findMany();

  return res.json({ status: 200, data: users });
};

export const createUser = async (req, res) => {
  const { name, email, role } = req.body;

  const findUser = await prisma.User.findUnique({
    where: {
      email,
    },
  });

  if (findUser) {
    return res.json({
      status: 400,
      message: "Email Already Taken . please another email.",
    });
  }

  const newUser = await prisma.User.create({
    data: {
      name,
      email,
      role,
    },
  });

  return res.json({ status: 200, data: newUser, msg: "User created." });
};

// * Show user
export const showUser = async (req, res) => {
  const userId = req.params.id;
  const user = await prisma.User.findFirst({
    where: {
      id: Number(userId),
    },
  });

  return res.json({ status: 200, data: user });
};

// * Update the user
export const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;

  await prisma.User.update({
    where: {
      id: Number(userId),
    },
    data: {
      name,
      email,
      password,
    },
  });

  return res.json({ status: 200, message: "User updated successfully" });
};

// * Delete user
export const deleteUser = async (req, res) => {
  const userId = req.params.id;
  await prisma.User.delete({
    where: {
      id: Number(userId),
    },
  });

  return res.json({ status: 200, msg: "User deleted successfully" });
};
