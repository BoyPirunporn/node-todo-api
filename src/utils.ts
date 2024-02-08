import { randomUUID } from "crypto";

interface IReport {
    statusCode: number;
    error: string;
}
export default class Utils {
    public static report(error: any): IReport {
        console.log(error)
        return {
            statusCode:999,
            error:"Opp something went wrong!!"
        }
    }
    public static generateId():string {
        return randomUUID()
    }
}