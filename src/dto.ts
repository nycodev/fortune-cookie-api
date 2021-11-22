import { ApiProperty } from "@nestjs/swagger";
import { IsString } from 'class-validator';


export class Dto {
    @ApiProperty()
    @IsString()
    id: string;
    @ApiProperty()
    @IsString()
    phrase: string;

}