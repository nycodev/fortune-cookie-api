import { PartialType } from "@nestjs/mapped-types";
import { Dto } from "./dto";

export class UpdateDto extends PartialType(Dto) {}