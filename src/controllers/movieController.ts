import type { Request, Response } from "express";
import Movie from "../models/Movie";

export const getMovies = async (req: Request, res: Response) => {
  try {
    const movies = await Movie.find()
      .populate({
        path: "genre",
        select: "name",
      })
      .populate({
        path: "theaters",
        select: "name",
      });

    return res.json({
      data: movies,
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
