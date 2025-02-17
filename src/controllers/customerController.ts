import { Request, Response } from "express";
import User from "../models/User";
import WalletTransaction from "../models/WalletTransaction";
import Transaction from "../models/Transaction";

export const getCustomer = async (req: Request, res: Response) => {
  try {
    const customers = await User.find({ role: "customer" }).select(
      "name email"
    );

    return res.json({
      data: customers,
      message: "Success get data",
      status: "Success",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to get data",
      data: null,
      status: "Failed",
    });
  }
};

export const getWalletTransaction = async (req: Request, res: Response) => {
  try {
    const transaction = await WalletTransaction.find().populate({
      path: "wallet",
      select: "user -_id",
      populate: {
        path: "user",
        select: "name",
      },
    });

    return res.json({
      data: transaction,
      message: "Success get data",
      status: "Success",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to get data",
      data: null,
      status: "Failed",
    });
  }
};

export const getTransaction = async (req: Request, res: Response) => {
  try {
    const transactions = await Transaction.find()
      .populate({
        path: "user",
        select: "name -_id",
      })
      .populate({
        path: "movie",
        select: "title -_id",
      })
      .populate({
        path: "theater",
        select: "name -_id",
      });

    return res.json({
      data: transactions,
      message: "Success get data",
      status: "Success",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to get data",
      data: null,
      status: "Failed",
    });
  }
};
