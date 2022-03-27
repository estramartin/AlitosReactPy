from operator import add
from sqlalchemy.orm import Session
from sqlalchemy import select
from Models.message_model import Message, MessageModel


class RepoMessage():

    def get_all_messages(self, session:Session):
        mensaje= session.execute(select(Message).order_by(Message.codigo.desc())).scalars().all()
        return mensaje

    def delete_message(self, codigo: int, session:Session):
        mensaje = session.get(Message, codigo)
        session.delete(mensaje)
        session.commit()
        return 'Mensaje Eliminado'
    
    def post_message(self, mensaje_to_add:MessageModel, session:Session):
        add_mensaje = Message(nombre=mensaje_to_add.nombre, correo = mensaje_to_add.correo, titulo= mensaje_to_add.titulo, fecha = mensaje_to_add.fecha, mensaje = mensaje_to_add.mensaje)
        session.add(add_mensaje)
        session.commit()
        return add_mensaje