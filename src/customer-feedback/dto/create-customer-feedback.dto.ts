import { IsNotEmpty, IsString } from "class-validator";

class Location {
	@IsString()
	@IsNotEmpty()
	lat:string;

	@IsString()
	@IsNotEmpty()
	lon:string;
}

export class CreateCustomerFeedbackDto {

	@IsString()
	@IsNotEmpty()
	answer1:string;

	@IsString()
	@IsNotEmpty()
	answer2:string;

	@IsString()
	@IsNotEmpty()
	answer3:string;

	@IsString()
	@IsNotEmpty()
	answer4:string;

	@IsString()
	@IsNotEmpty()
	answer5:string;

	@IsString()
	@IsNotEmpty()
	textarea:string;

	@IsNotEmpty()
	location:Location;

	@IsString()
	@IsNotEmpty()
	submitDate:string;
}
