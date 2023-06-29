import { Schema, model } from "mongoose";

const groupSchema = new Schema(
  {
    gropName: { type: "string", required: true },
    teacher: { type: "string", required: true },
    room: { type: "string", required: true },
    category: { type: "string", required: true },
    day: { type: "string", required: true },
    startTime: { type: "string", required: true },
    startGroup: { type: "date", required: true },
    endGroup: { type: "date", required: true },
    students: [{type: Schema.Types.ObjectId, ref: "Student", required: true }],
    date: [Schema.Types.Mixed],
  },
  { timestamps: true }
);

// groupSchema.statics.addStudent = function (student) {
//   this.students.items.push(student);
//   return this.save();
// };

// groupSchema.statics.yesStudent = function (studentId) {
//   const students = [...this.students.items];
//   const yesorno = students.find(
//     (item) => item.toString() === studentId.toString()
//   );
//   if (yesorno) {
//     return true;
//   } else {
//     return false;
//   }
// };

export default model("Group", groupSchema);
