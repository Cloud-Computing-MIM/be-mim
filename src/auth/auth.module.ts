import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import  { AuthGuard } from './auth.guard';
@Module({})
export class AuthModule {
    controllers: [AuthController] 
    providers: [AuthService, AuthGuard]
}
