import { IsDefined, IsNumber, IsString, Min } from "class-validator"

export class CreateProductDto{
    @IsDefined({
        message:'The termek is rwuired'
    })
    @IsString()
    name: string

    @IsDefined()
    @IsNumber()
    @Min(1)
    price: number
}