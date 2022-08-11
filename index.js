var robot = require("robotjs");

//iniciamos notepad
robot.keyTap("r", ["command"]);
robot.typeString("notepad");
robot.keyTap("enter");
//escribimos un texto de prueba
robot.typeString("Hola, esto es un texto de prueba");
//guardamos el archivo en documentos
robot.keyTap("g",["control"]);
//le damos un nombre
robot.typeString("prueba");
//guardamos
robot.keyTap("enter");
