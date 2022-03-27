from fastapi import APIRouter
from fastapi.params import Depends
from sqlalchemy.orm.session import Session
from Models.clients_model import ClientsModel
from Repository.Clients_repo import ClientsRepository
from DataBase.DB import get_session
from typing import List



clients_router = APIRouter( prefix = "/clients" ,tags=["/Clients"])
repo = ClientsRepository()


@clients_router.get('/', response_model=List[ClientsModel])
def all_clients(session:Session=Depends(get_session)):
    return repo.all_clients(session)

@clients_router.get('/{codigo}', response_model=ClientsModel)
def get_by_id(codigo: int, session: Session = Depends(get_session)):
    return repo.get_by_id(codigo,session)

@clients_router.get('/buscar/{nombre}',response_model=List[ClientsModel])
def get_by_nombre(nombre: str, session:Session= Depends(get_session)):
    return repo.get_by_nombre(nombre, session)

@clients_router.post('/', response_model=ClientsModel)
def add_client(datos: ClientsModel, session: Session = Depends(get_session)):  
    return repo.add_client(datos, session)

@clients_router.delete('/{codigo}')
def delete_client(codigo: int, session:Session = Depends(get_session)):
    repo.delete_client(codigo, session)
    return "Clinete borrado satisfacatoriamente"

@clients_router.put('/{codigo}', response_model=ClientsModel)
def update_client(codigo: int, datos: ClientsModel, session:Session= Depends(get_session)):
    return repo.update_client(codigo, datos,session)