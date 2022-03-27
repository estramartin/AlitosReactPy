from fastapi import APIRouter, HTTPException
from fastapi.params import Depends
from DataBase.DB import get_session
from sqlalchemy.orm.session import Session
from Repository.Sellpoints_repo import Sellpoints
from Models.sellpoints_model import sellPointsModel
from typing import List


sellpoints_router = APIRouter(prefix='/sellpoints', tags=['/Sell_Points'])

repo = Sellpoints()

@sellpoints_router.get('/', response_model=List[sellPointsModel])
def get_all(session:Session = Depends(get_session)):
    return repo.get_all(session)

@sellpoints_router.get('/{codigo}', response_model=sellPointsModel)
def get_by_id( codigo: int, session: Session= Depends(get_session)):
    sell_point = repo.get_by_id(codigo,session)
    if sell_point is None:
        raise HTTPException(status_code= 404, detail='Punto de Venta no encontrado')
   
    return sell_point

@sellpoints_router.get('/buscar/{nombre}' ,response_model=List[sellPointsModel])
def get_by_name(nombre:str, session:Session = Depends(get_session)):
    return  repo.get_by_name(nombre,session)

@sellpoints_router.post('/', response_model=sellPointsModel)
def add_sellpoint( datos: sellPointsModel ,session: Session =Depends(get_session) ):
    return repo.add_sellpoint( session, datos)

@sellpoints_router.delete('/{codigo}')
def delete_sellpoint(codigo: int ,session: Session = Depends(get_session)):
    repo.delete_sellpoint(codigo,session)
    return 'Punto de venta borrado'

@sellpoints_router.put('/{codigo}', response_model=sellPointsModel)
def update_sellpoint(codigo: int, datos: sellPointsModel, session: Session= Depends(get_session)):
    sellpoint = repo.update_sellpoint(codigo, datos,session)
    return sellpoint