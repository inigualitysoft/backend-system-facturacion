import { Controller, Get, Post, Body, UseGuards, Req, SetMetadata, Param, Patch, ParseUUIDPipe, ParseBoolPipe, Delete, DefaultValuePipe, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { UpdateUserDto } from './dto/edit-user.dto';
import { fileFilter } from './helpers/fileFilter.helper';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { fileNamer } from './helpers/fileNamer.helper';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'foto' }
  ],
    {
      fileFilter: fileFilter,
      storage: diskStorage({
        destination: function (_, file, cb) {
          cb(null, './public/images')
        },
          filename: fileNamer
      })
    }
  ))
  createUser(
    @Body() createUserDto: CreateUserDto,
    @UploadedFiles() files: { foto?: Express.Multer.File[] }
  ) {
    return this.authService.create(createUserDto, files);
  }

  @Get('/find/:term')
  findOne(@Param('term') term: string) {
    return this.authService.findOne( term );
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login( loginUserDto );
  }

  @Patch('/edit/:id')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'foto' }
  ],
    {
      fileFilter: fileFilter,
      storage: diskStorage({
        destination: function (_, file, cb) {
          cb(null, './public/images')
        },
          filename: fileNamer
      })
    }
  ))
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
    @UploadedFiles() files: { foto?: Express.Multer.File[] }
  ) {
    return this.authService.update(id, updateUserDto, files);
  }

  @Get('/users')
  findAll(
    @Param('estado', new DefaultValuePipe( false ), ParseBoolPipe) estado: boolean
  ) {
    return this.authService.findAll( estado );
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.authService.remove( id );
  }

}
