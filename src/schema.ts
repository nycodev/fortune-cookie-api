import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type FortuneDocument = FortuneEntity & Document;

@Schema()
export class FortuneEntity {
    @Prop()
    id: string;
    @Prop()
    phrase: string;
}

export const FortuneSchema = SchemaFactory.createForClass(FortuneEntity);