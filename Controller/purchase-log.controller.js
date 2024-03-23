import prisma from "../DB/db.config.js";

export const fetchPurchaseLogs = async (req, res) => {
  const comments = await prisma.PurchaseHistory.findMany({
    include: {
      user: true,
      post: {
        include: {
          user: true,
        },
      },
    },
  });
  return res.json({ status: 200, data: comments });
};

export const createPurchaseLog = async (req, res) => {
  const { id, bookId, userId, purchaseDate, price } = req.body;

  await prisma.post.update({
    where: {
      id: Number(post_id),
    },
    data: {
      comment_count: {
        increment: 1,
      },
    },
  });

  const newComent = await prisma.PurchaseHistory.create({
    data: {
      id,
      bookId,
      userId,
      purchaseDate,
      price,
    },
  });

  return res.json({
    status: 200,
    data: newComent,
    msg: "Log created successfully.",
  });
};

// * Show user
export const showPurchaseLog = async (req, res) => {
  const commentId = req.params.id;
  const post = await prisma.comment.findFirst({
    where: {
      id: Number(commentId),
    },
  });

  return res.json({ status: 200, data: post });
};
