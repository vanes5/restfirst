import { Body, Controller, Delete, Get, Param, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateProductDto } from './createProduct.dto';

@Controller('')
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
    {
      name : 'Bucket',
      price: 3500
    },
    {
      name: "Ablak",
      price: 10000000000
    },
    {
      name: "Tablet",
      price: 1144245
    }
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

  @Post('products')
  newProduct(@Body() createProductDto: CreateProductDto){
    this.#products.push(createProductDto);
  }
}
