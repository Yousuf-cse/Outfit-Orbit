import asyncHandler from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js"
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res, next) => {
    const { name, number, password, confirmPassword } = req.body;

    if (!name || !number || !password || !confirmPassword) throw new ApiError(400, "All fields are required!");

    if (password !== confirmPassword) throw new ApiError(400, "Passwords do not match!");

    const existingUser = await User.findOne({ number });
    if (existingUser) throw new ApiError(400, "User already exists");

    const newUser = new User({ name, number, password });
    await newUser.save();
    if (!newUser) throw new ApiError(500, "Could not register user");
    res.status(201).json(new ApiResponse(201, {
        _id: newUser._id,
        name: newUser.name,
        number: newUser.number
    }, "User registered successfully!"));
});

const loginUser = asyncHandler(async (req, res, next) => {
    const { numberOrEmail, password } = req.body;
    if (!numberOrEmail || !password) throw new ApiError(400, "All fields are required");

    const user = await User.findOne({ $or: [{ number: numberOrEmail }, { email: numberOrEmail }] });
    if (!user) throw new ApiError(400, "User not found");

    const isPasswordCorrect = await user.isPasswordCorrect(password);
    if (!isPasswordCorrect) throw new ApiError(400, "Invalid credentials");

    const token = user.generateToken();
    if (!token) throw new ApiError(500, "Could not generate token");

    const options = {
        httpOnly: true,
        secure: true
    };

    user.password = undefined;
    res.status(200).cookie("token", token, options).json(new ApiResponse(200, { user, token }, "User logged in successfully!"));
});

export { registerUser, loginUser };