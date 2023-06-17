export class Utils {
  static  base_url : string = "http://localhost:8080/api/tasks" 
  static getUrlWithTaskId(id:string) :string{
    return this.base_url +"/"+id;
  }
}
