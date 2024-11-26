import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SupabaseService {
  private readonly supabase: SupabaseClient;

  constructor(private configService: ConfigService) {
    const supabaseUrl = this.configService.get<string>('SUPABASE_supabaseURL');
    const supabaseApiKey = this.configService.get<string>('SUPABASE_supabaseApiKEY');

    if (!supabaseUrl || !supabaseApiKey) {
      throw new Error('Missing Supabase credentials in environment variables.');
    }

    this.supabase = createClient(supabaseUrl, supabaseApiKey);
  }

  getClient(): SupabaseClient {
    return this.supabase;
  }
}
