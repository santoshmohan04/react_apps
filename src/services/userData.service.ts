import { userDataType } from '../model/useModel';

export class userData {
  private static users: userDataType[] = [
    {
      sno: 'ASTX1001',
      name: 'Santhosh',
      age: 34,
      designation: 'UI Developer',
    },
    {
      sno: 'ASTX1002',
      name: 'Mahesh',
      age: 33,
      designation: 'Ux Designer',
    },
    {
      sno: 'ASTX1003',
      name: 'Venkatesh',
      age: 31,
      designation: 'UI Engineer',
    },
    {
      sno: 'ASTX1004',
      name: 'Hari',
      age: 30,
      designation: 'Digital Marketing',
    },
    {
      sno: 'ASTX1005',
      name: 'Srinivas',
      age: 28,
      designation: 'Business Developement Executive',
    },
    {
      sno: 'ASTX1006',
      name: 'Praneeth',
      age: 34,
      designation: 'Senior Sales Executive',
    },
  ];

  public static getallUsers() {
    return this.users;
  }
}
