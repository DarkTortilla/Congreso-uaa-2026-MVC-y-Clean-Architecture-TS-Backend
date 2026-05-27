import { type Request, type Response } from "express";
import MajorModel from "../models/Major.ts";

export class Major {
	static createMajor = async (req: Request, res: Response) => {
		const {
			name,
			duration,
			description,
			logo,
			registerStartDate,
			registerEndDate,
		} = req.body;
		try {
			const majorExist = await MajorModel.findOne({ name });
			if (majorExist) {
				return res.status(409).json({ error: "major already exist" });
			}

			const major = new MajorModel({
				name,
				duration,
				description,
				logo,
				registerStartDate,
				registerEndDate,
			});

			await major.save();

			return res.status(201).json({ message: "major created" });
		} catch (error) {
			console.error(error);
		}
	};

	static getAllMajors = async (_req: Request, res: Response) => {
		try {
			const majors = await MajorModel.find();
			return res.status(200).json(majors);
		} catch (error) {
			console.error(error);
		}
	};

	static getMajorById = async (req: Request, res: Response) => {
		const { id } = req.params;
		try {
			const major = await MajorModel.findById(id);
			if (!major) {
				return res.status(404).json({ error: "major not found" });
			}
			return res.status(200).json(major);
		} catch (error) {
			console.error(error);
		}
	};

	static updateMAjor = async (req: Request, res: Response) => {
		const { id } = req.params;
		const updates = req.body;
		try {
			const updatedMajor = await MajorModel.findByIdAndUpdate(id, updates, {
				new: true,
				runValidators: true,
			});

			if (!updatedMajor) {
				return res.status(404).json({ error: "major not found" });
			}

			return res.status(200).json(updatedMajor);
		} catch (error) {
			console.error(error);
		}
	};

	static deleteMajor = async (req: Request, res: Response) => {
		const { id } = req.params;
		try {
			const deletedMajor = await MajorModel.findByIdAndDelete(id);
			if (!deletedMajor) {
				return res.status(404).json({ error: "major not found" });
			}
			return res.status(200).json({ message: "major deleted" });
		} catch (error) {
			console.error(error);
		}
	};
}
