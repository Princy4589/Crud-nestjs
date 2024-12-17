import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { log } from "console";

@Controller('users')
export class UsersController{
    constructor(private usersService:UsersService){}
    @Post()
    @UsePipes(new ValidationPipe)
    createUser(@Body() createUserDto:CreateUserDto){
        console.log(createUserDto);
        return this.usersService.createUser(createUserDto)
        
    }

    @Get()
    getUsers(){
        return this.usersService.getUsers()
    }

    @Get(':id')
    getUserById(@Param('id') id:string){
        return this.usersService.getUsersById(id)
    }
}