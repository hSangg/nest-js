import { Injectable } from '@nestjs/common';
import { createCustomer } from 'src/customers/dtos/createCustomer.dtos';

@Injectable()
export class CustomersService {
  user = [
    {
      id: 1,
      name: 'Cong',
    },
    {
      id: 2,
      name: 'Sang',
    },
    {
      id: 3,
      name: 'My',
    },
    {
      id: 4,
      name: 'Nhung',
    },
  ];

  findCustomerById(id: number | string) {
    return this.user.find((x) => x.id === id);
  }
  createCustomer(newCustomer: createCustomer) {
    this.user.push(newCustomer);
  }

  deleteCustomer(id: number | string) {
    this.user.filter((x) => x.id != +id);
  }
}
