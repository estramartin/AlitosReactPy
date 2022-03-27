import fastapi

from fastapi import APIRouter
from fastapi.params import Depends
from sqlalchemy.orm.session import Session
from Models.facturas_model import FacturasItems, FacturasItemsModel, FacturasModel
from Repository.Facturas_repo import FacturasRepo
from DataBase.DB import get_session
from typing import List


facturas_router = APIRouter(prefix='/facturas', tags=['/Facturas'])

repo = FacturasRepo()


@facturas_router.get('/')
def get_all(session: Session =Depends(get_session)):
    return repo.get_all(session)


@facturas_router.get('/{codigo}')
def get_by_id(codigo: int, session:Session = Depends(get_session)):
    return repo.get_by_id(codigo, session)

@facturas_router.get('/buscar/{nombre}')
def get_by_nombre(nombre:str, session:Session= Depends(get_session)):
    return repo.get_by_name(nombre, session)

@facturas_router.post('/', response_model=FacturasModel)
def add_factura(datos:FacturasModel, session: Session = Depends(get_session)):
    return repo.add_factura(datos, session)

@facturas_router.delete('/{codigo}')
def delete_factura(codigo:int, session:Session=Depends(get_session)):
    repo.delete_factura(codigo, session)
    return 'Factura Eliminada'

@facturas_router.put('/{codigo}', response_model=FacturasModel)
def update_factura(datos:FacturasModel, codigo:int, session:Session=Depends(get_session)):
    return repo.update_factura(datos, codigo,session)


@facturas_router.get('/facturas/facturas-items/{codigo}',response_model=List[FacturasItemsModel])
def get_all_items_from_factura(codigo:int, session:Session= Depends(get_session)):
    return repo.get_all_items_from_factura(codigo, session)


@facturas_router.post('/item', response_model=FacturasItemsModel)
def add_product_to_factura(datos:FacturasItemsModel, session:Session = Depends(get_session)):
    return repo.add_product_to_factura(datos,session)

@facturas_router.delete('/item/{codigo}')
def add_product_to_factura(codigo: int, session:Session= Depends(get_session)):
    repo.delete_product_to_factura(codigo, session)
    return 'Elemento Eliminado Corectamente'

@facturas_router.put('/item/{codigo}', response_model=FacturasItemsModel)
def update_product_to_factura(codigo:int, datos: FacturasItemsModel, session:Session=  Depends(get_session)):
    return repo.update_product_to_factura(codigo, datos,session)
