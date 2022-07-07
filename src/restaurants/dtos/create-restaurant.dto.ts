import { ArgsType, Field, InputType, OmitType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';
import { Restaurant } from '../entities/restaurant.entity';

@InputType()
export class createRestaurantDto extends OmitType(Restaurant, ['id']) {}

// @ArgsType()
// export class createRestaurantDto {
//   @Field(type => String)
//   @IsString()
//   @Length(5, 10)
//   name: string;

//   @Field(type => Boolean)
//   @IsBoolean()
//   isVegan: boolean;

//   @Field(type => String)
//   @IsString()
//   address: string;

//   @Field(type => String)
//   @IsString()
//   ownersName: string;

// }
