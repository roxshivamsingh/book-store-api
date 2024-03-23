import prisma from "../DB/db.config.js";

export const fetchBooks = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  if (page <= 0) {
    page = 1;
  }
  if (limit <= 0 || limit > 100) {
    limit = 10;
  }
  const skip = (page - 1) * limit;
  const posts = await prisma.Book.findMany({
    skip: skip,
    take: limit,
    include: {
      comment: {
        include: {
          user: {
            select: {
              name: true,
            },
          },
        },
      },
    },
    orderBy: {
      id: "desc",
    },
    where: {
      NOT: {
        title: {
          endsWith: "Blog",
        },
      },
    },
  });

  //   * to get the total posts count
  const totalPosts = await prisma.Book.count();
  const totalPages = Math.ceil(totalPosts / limit);
  return res.json({
    status: 200,
    data: posts,
    meta: {
      totalPages,
      currentPage: page,
      limit: limit,
    },
  });
};

export const createBook = async (req, res) => {
  const { user_id, title, description, sellCount, price } = req.body;

  const newPost = await prisma.Book.create({
    data: {
      user_id: Number(user_id),
      title,
      description,
      sellCount,
      price,
    },
  });

  return res.json({ status: 200, data: newPost, msg: "Post created." });
};

// * Show user
export const showBook = async (req, res) => {
  const postId = req.params.id;
  const post = await prisma.Book.findFirst({
    where: {
      id: Number(postId),
    },
  });

  return res.json({ status: 200, data: post });
};

// * Delete user
export const deleteBook = async (req, res) => {
  const postId = req.params.id;
  await prisma.Book.delete({
    where: {
      id: Number(postId),
    },
  });

  return res.json({ status: 200, msg: "Book deleted successfully" });
};

// * To Seach the book
export const searchBook = async (req, res) => {
  const query = req.query.q;
  const books = await prisma.Book.findMany({
    where: {
      description: {
        search: query,
      },
    },
  });

  return res.json({ status: 200, data: books });
};
