const express = require("express");
const router = express.Router();

const db = require("../config/database");

const auth = require("../config/auth");
const UserController = require("../controller/userController");
const taskController = require("../controller/taskController");
const ContactController = require("../controller/contactusController");

//login
router.post("/user_login", UserController.userLogin);
router.post("/signup", UserController.Registration);
router.post("/getEmployeeFromTechnology", UserController.getEmployeeFromTechnology);
router.post("/detail/Employee", UserController.getEmployee);

//product
router.post("/add/task", taskController.AddTask);
router.post("/detail/TaskDetailFromEmployeeId", taskController.TaskDetailFromEmployeeId);
router.post("/update/taskStatus", taskController.updateTaskStatus);

// router.post("/update/serviceStatus", ProductController.updateDetail);

router.post("/add/contactus", ContactController.ContactUs);



router.post("/add/project", (req, res) => {
    const { ProjectName, Technology, EndDate, Members } = req.body;

    const sql =
        "INSERT INTO project (ProjectName, Technology, EndDate) VALUES (?, ?, ?)";

    db.query(sql, [ProjectName, Technology, EndDate], (err, result) => {
        if (err) return res.send({ success: false });

        const projectId = result.insertId;

        Members.forEach((memberId) => {
            db.query(
                "INSERT INTO project_members (project_id, employee_id) VALUES (?, ?)",
                [projectId, memberId]
            );
        });

        res.send({ success: true });
    });
});

module.exports = router;