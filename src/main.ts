import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY,
  {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  },
});

const adminAuthClient = supabase.auth.admin

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
