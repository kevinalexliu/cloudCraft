const express = require('express');

const router = express.Router();
const taskController = require('./controller/tasks');
const usersController = require('./controller/userList');
const getUserID = require('./controller/usersInfo');
const messagesController = require('./controller/messages');
const searchController = require('./controller/search');
const messageToTask = require('./controller/messageToTask');

router.get('/tasks', taskController.getTasks);
router.post('/task', taskController.addTask);
router.put('/task/delete', taskController.deleteTask);
router.put('/task/complete', taskController.completeTask);

router.get('/users', usersController.getUsers);
router.get('/channels', usersController.getChannels);
router.get('/userChannel', usersController.getUserChannel);
router.get('/channelUsers', usersController.getChannelUsers);
router.get('/channelName', usersController.getChannelName);
router.get('/directMessages', usersController.getDirectMessages);

router.get('/chat', messagesController.getChatHistory);
router.post('/chat', messagesController.editChat);
router.put('/chat/delete', messagesController.deleteChat);

router.get('/userInfo', getUserID);

router.get('/search/tasks', searchController.searchTasks);
router.get('/search/messages', searchController.searchChat);

router.post('/addToTask', messageToTask.addMessageToTask);

module.exports = router;
