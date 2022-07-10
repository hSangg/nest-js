import {
  Controller,
  Get,
  Res,
  Req,
  Param,
  ParseIntPipe,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Delete,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { createCustomer } from '../dtos/createCustomer.dtos';
import { CustomersService } from '../services/customers/customers.service';

@Controller('customers')
export class ControllersController {
  constructor(private customersService: CustomersService) {}
  @Get('')
  getAllCustomer(@Res() res: Response) {
    return res.status(200).send(this.customersService.user);
  }
  @Get(':id')
  getCustomer(
    @Param('id', ParseIntPipe) id: number | string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const customer = this.customersService.findCustomerById(id);
    if (customer) res.status(200).send({ success: true, customer });
    else res.status(500).send({ success: false, message: 'unknown' });
  }
  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() newCustomer: createCustomer) {
    this.customersService.createCustomer(newCustomer);
  }

  @Delete(':id')
  deleteCustomer(@Param('id', ParseIntPipe) id: number | string) {
    this.customersService.deleteCustomer(id);
  }
}
