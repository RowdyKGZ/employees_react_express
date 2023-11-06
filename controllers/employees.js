const { prisma } = require("../prisma/prisma-client");

/**
 *
 * @route GET /api/employees
 * @desc Все пользователи
 * @access Private
 */
const all = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();

    res.status(200).json(employees);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Не удалось получить сотрудников" });
  }
};

/**
 *
 * @route POST /api/employees/add
 * @desc Добовление пользователя
 * @access Private
 */
const add = async (req, res) => {
  try {
    const data = req.body;

    if (!data.firstName || !data.lastName || !data.address || !data.age) {
      return res.status(400).json({ message: "Все поля обязательные" });
    }

    const employee = await prisma.employee.create({
      data: {
        ...data,
        userId: req.user.id,
      },
    });

    return res.status(201).json(employee);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Что-то пошло не так" });
  }
};

/**
 *
 * @route delete /api/employees/remove
 * @desc Удаление пользователя
 * @access Private
 */
const remove = async (req, res) => {
  const { id } = req.body;

  console.log(id, "idddd");
  try {
    await prisma.employee.delete({
      where: {
        id,
      },
    });
    return res.status(204).json("Ok");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Не удалось удалить сотрудника" });
  }
};

/**
 *
 * @route PUT /api/employees/remove
 * @desc Изменение пользователя
 * @access Private
 */
const edit = async (req, res) => {
  const data = req.body;
  const id = data.id;
  try {
    await prisma.employee.update({
      where: { id },
      data,
    });

    res.status(204).json("Ok");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Не удалось изменить сотрудника" });
  }
};

/**
 *
 * @route GET /api/employees/:id
 * @desc Получение одного пользователя
 * @access Private
 */
const employee = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await prisma.employee.findUnique({
      where: {
        id,
      },
    });
    return res.status(200).json(employee);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Не удалось получить сотрудника" });
  }
};

module.exports = { all, add, remove, edit, employee };
