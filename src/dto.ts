import { ApiProperty } from "@nestjs/swagger";
import { IsString } from 'class-validator';


export class Dto {
    @ApiProperty()
    @IsString()
    _id: string;
    @ApiProperty()
    @IsString()
    phrase: string;

}