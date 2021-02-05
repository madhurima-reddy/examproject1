import { Icourse } from 'src/app/classes/icourse';
export class ReportCard {
    public ReportCard_id: number;
    public User_id: number;
    public Course_id: number;
    public Level_1_Marks: number;
    public Level_2_Marks: number;
    public Level_3_Marks: number;
    public Test_Date: Date;
    public Course: Icourse;
}
