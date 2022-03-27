from fastapi import APIRouter
from fastapi.params import Depends
from Models.message_model import MessageModel
from DataBase.DB import get_session
from sqlalchemy.orm import Session
from Repository.Message_repo import RepoMessage

repo = RepoMessage()

message_router = APIRouter(prefix='/messages', tags=['/Messages'])


@message_router.get('/')
def get_all_messages(session: Session= Depends(get_session)):
    mensajes = repo.get_all_messages(session)
    return mensajes


@message_router.delete('/{codigo}')
def delete_message(codigo: int, session:Session=Depends(get_session)):
    repo.delete_message(codigo, session)
    return 'Borrado con exito'


@message_router.post('/')
def post_message( mensaje_to_add:MessageModel, session: Session=Depends(get_session)):
    messg = repo.post_message(mensaje_to_add, session )
    return messg