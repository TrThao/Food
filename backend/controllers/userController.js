import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Hàm tạo token JWT với thời gian hết hạn 7 ngày
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// Hàm xác thực dữ liệu đầu vào của người dùng
const validateUserInput = (email, password) => {
    if (!validator.isEmail(email)) {
        throw new Error('Email không hợp lệ');
    }
    if (password.length < 8) {
        throw new Error('Mật khẩu phải có ít nhất 8 ký tự');
    }
};

// Đăng nhập người dùng
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Tìm người dùng bằng email
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Người dùng không tồn tại" });
        }

        // So sánh mật khẩu đã nhập với mật khẩu đã được băm (hashed) trong cơ sở dữ liệu
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Thông tin đăng nhập không chính xác" });
        }

        // Tạo token và gửi lại cho người dùng
        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Có lỗi xảy ra" });
    }
};

// Đăng ký người dùng mới
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Xác thực dữ liệu đầu vào
        validateUserInput(email, password);

        // Kiểm tra xem email đã tồn tại hay chưa
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(400).json({ success: false, message: "Người dùng đã tồn tại" });
        }

        // Băm mật khẩu trước khi lưu vào cơ sở dữ liệu
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Tạo người dùng mới
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        // Lưu người dùng vào cơ sở dữ liệu và tạo token
        const user = await newUser.save();
        const token = createToken(user._id);
        res.status(201).json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Có lỗi xảy ra" });
    }
};

export {
    loginUser,
    registerUser
};
