import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private supabaseService: SupabaseService
  ) {}

  async login(email: string, password: string): Promise<{ accessToken: string }> {
    const supabase = this.supabaseService.getClient();
    const { data: user, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error || !user?.user_metadata?.is_admin) {
      throw new UnauthorizedException('Invalid credentials or not an admin');
    }

    const payload = { sub: user.id, email: user.email };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}
