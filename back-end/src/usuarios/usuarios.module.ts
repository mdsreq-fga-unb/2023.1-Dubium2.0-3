import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { DatabaseModule } from 'src/database/database.module';
import { usuarioProviders } from './usuarios.providers';
import { perguntasProviders } from 'src/perguntas/perguntas.providers';
import { respostaProviders } from 'src/respostas/respostas.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuariosController],
  providers: [UsuariosService, ...usuarioProviders, ...perguntasProviders, ...respostaProviders],
  exports: [UsuariosService]
})
export class UsuariosModule {}