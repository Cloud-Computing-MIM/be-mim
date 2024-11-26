import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database

//SUPABASE_URL=https://uxxgdrzwgymksrcqkdcf.supabase.co
//SUPABASE_API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX


const supabase = createClient('SUPABASE_URL', 'SUPABASE_API_KEY', {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

const adminAuthClient = supabase.auth.admin

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
