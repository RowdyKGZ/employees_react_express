const { prisma } = require("../prisma/prisma-client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET;

/**
 *
 * @route Post /api/users/login
 * @desc Логин
 * @access Public
 */
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Пожалуйста заполните поля" });
  }

  const user = await prisma.user.findFirst({ where: { email } });

  const isPasswordCorrect =
    user && (await bcrypt.compare(password, user.password));

  if (user && isPasswordCorrect && SECRET) {
    res.status(200).json({
      id: user.id,
      email: user.email,
      name: user.name,
      token: jwt.sign({ id: user.id }, SECRET, { expiresIn: "30d" }),
    });
  } else {
    return res.status(400).json({ message: "Неверно введен логин или пароль" });
  }
};

/**
 *
 * @route Post /api/users/register
 * @desc Регистрация
 * @access Public
 */

const register = async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({
      message: "Пожалуйста заполните обязательные поля",
    });
  }

  const registeredUser = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (registeredUser) {
    return res.status(400).json({ message: "Такой емайл уже сушествует" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  if (SECRET && user) {
    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      token: jwt.sign({ id: user.id }, SECRET, { expiresIn: "30d" }),
    });
  } else {
    return res.status(400).json({ message: "Не удалось создать пользователя" });
  }
};

/**
 *
 * @route GET /api/users/current
 * @desc Текуший пользователь
 * @access Private
 */

const current = async (req, res) => {
  return res.status(200).json(req.user);
};

module.exports = { login, register, current };
