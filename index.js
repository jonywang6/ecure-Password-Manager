// 欢迎信息
console.log("Keep your passwords safe and secure with our intuitive password manager!");

// 导入密码管理器模块
const passwordManager = require("./passwordManager");

// 添加新密码
passwordManager.addPassword("email", "example@gmail.com", "mySecretPassword123");

// 获取密码
const emailPassword = passwordManager.getPassword("email");
console.log("Password for email:", emailPassword);

// 更新密码
passwordManager.updatePassword("email", "newPassword456");

// 删除密码
passwordManager.deletePassword("email");

// 执行其他操作
console.log("Say goodbye to forgotten passwords and security breaches with ease!");
