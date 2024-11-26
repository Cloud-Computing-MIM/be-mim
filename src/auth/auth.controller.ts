import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Controller('admin')
export class AuthController {
  @Get('dashboard')
  @UseGuards(AuthGuard) // Apply the guard here
  getAdminDashboard() {
    return { message: 'Welcome, Admin!' };
  }
}
