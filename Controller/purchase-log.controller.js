import prisma from "../DB/db.config.js";

export const fetchPurchaseLogs = async (req, res) => {
  const data = await prisma.PurchaseHistory.findMany();
  return res.json({ status: 200, data });
};

export const createPurchaseLog = async (req, res) => {
  const { id, bookId, userId, purchaseDate, price, quantity } = req.body;

  await prisma.PurchaseHistory.update({
    where: {
      id: Number(id),
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
      quantity,
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
  const purchaseLogId = req.params.id;
  const data = await prisma.PurchaseHistory.findFirst({
    where: {
      id: Number(purchaseLogId),
    },
  });

  return res.json({ status: 200, data });
};
