// const jwt = require("jsonwebtoken");
// const key = require("../key/key");
// const userModel = require("../models/userModel");

// module.exports.create_user = async function (req, res) {
// 	const { name, email, password, keyadmin } = req.body;
// 	const check = await CheckDuplicate(name);
// 	const role = "user";
// 	if (check) {
// 		try {
// 			const pass = HashPassword(password);
// 			const user = await userModel.create({ name, email, pass, role });
// 			console.log("admin == ", user);
// 			const token = jwt.sign(
// 				{
// 					email: email,
// 					name: name,
// 					password: pass,
// 					role: role,
// 					key: adminKey,
// 				},
// 				key.jwt,
// 				{ expiresIn: 60 * 60 }
// 			);
// 			res.status(200).json({ token: token, user });
// 		} catch (error) {
// 			console.log(error);
// 			console.log("you already have account by this email");
// 			res.status(500).json("error = ", error);
// 		}
// 	}
// };
