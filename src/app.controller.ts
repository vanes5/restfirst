import { Controller, Delete, Get, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }

  #products =[
    'Bucket',
    'REST API for pros',
    'Tablet'
  ]


  @Get('products')
  listProducts(){
    return this.#products;
  }

  @Get('products/:id')
  getProduct(@Param('id') id:string){
    return this.#products[Number(id)];
  }

  @Delete('products/:id')
  deleteProduct(@Param('id') id:string){
    this.#products.splice(Number(id), 1);
  }
}
