// example
const numberArray: number[] = [1,2,3,4,5];
const stringArray: string[] = ['EN','TH'];
const anyArray: any[] = [1,2,3,'EN','TH'];

// สร้าง type เป็น interface
interface DepartmentType {
  departmentName: string;
  departmentCode: string;
  status: number
}

// สร้าง array ด้วย type ใหม่
const departmentArray: DepartmentType[] = [
  {departmentName:'Union',departmentCode:'UN',status:1},
  {departmentName:'United Stated',departmentCode:'USA',status:1},
  {departmentName:'China',departmentCode:'CHI',status:2}
]

// สร้าง type ใหม่ด้วย keyword 'type'
type FaveGundamType = 'Exia'|'OO'|null;
const faveGundamArray: FaveGundamType[] = ['Exia','Exia',null,'OO'];

//โจทย์ สร้าง type ใหม่ให้ object นี้ทดลองประกาศเป็น array
type Employee = {name:string,surname:string,id:number};
const employee = {name:'Mark',surname:'Suck',id:20};
const EmPloyee:Employee[]=[
  {name:'Swiss',surname:'Chompoo',id:7},
  {name:'Mark',surname:'Suck',id:20}
];
console.log(EmPloyee);

//โจทย์ สร้าง type ใหม่ให้กับ arrow function นี้
type arrayList = {data:string[]};
const array = (data:string[]) =>{
  return data.filter(i=>i.startsWith('x'));
}

// โจทย์ สร้าง type ให้ object นี้
type resPonse = {name:string,status:number};
type Mock = {response:resPonse[]};
const mock:Mock = {
  response : [{
  name: 'Thanadit',
  status: 1
},{
  name: 'Buthong',
  status: 2
},{
  name: 'Otoya',
  status: 3
}]};