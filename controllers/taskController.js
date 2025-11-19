const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const { error, value } = taskSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const task = new Task(value);
  await task.save();
  res.status(201).json({ message: 'Task created', task });
};

exports.getTasks = async (req, res) => {
  const { status, priority, q } = req.query;
  const filter = {};
  if (status) filter.status = status;
  if (priority) filter.priority = priority;
  if (q) filter.$or = [{ title: new RegExp(q,'i') }, { description: new RegExp(q,'i') }];

  const tasks = await Task.find(filter).sort({ createdAt: -1 });
  res.json(tasks);
};


exports.getTaskById = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
};


exports.updateTask = async (req, res) => {
  const { error, value } = taskSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const task = await Task.findByIdAndUpdate(req.params.id, value, { new: true });
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json({ message: 'Task updated', task });
};


exports.deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json({ message: 'Task deleted' });
};
